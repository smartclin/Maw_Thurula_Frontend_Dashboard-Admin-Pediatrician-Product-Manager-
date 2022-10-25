import * as React from 'react';
import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment ,useState} from 'react';
import Write from "./shared/PediatricianDashboardWritePost";
import App from "./shared/TextEditor";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { storage } from './firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import ImageuploadS from "./shared/ImageuploadS"

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Analytics = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyAqQxOctXSkcr0KI75gvVGJeculIpHyIOs",
        authDomain: "image-upload-1-ccfc0.firebaseapp.com",
        projectId: "image-upload-1-ccfc0",
        storageBucket: "image-upload-1-ccfc0.appspot.com",
        messagingSenderId: "339310811518",
        appId: "1:339310811518:web:982254ea6554ee148f3b2f"
    };

    const app = initializeApp(firebaseConfig);
    const storage=getStorage(app)

    // State to store uploaded file

    const [url, setUrl] = useState("");
    const [percent, setPercent] = useState(0);
    const ImgHandler = (event) => {
        // setProfileImage(URL.createObjectURL(event));
        console.log(event)
        const fileRef = ref(storage, `/files/${event.name}`);
        const uploadTask = uploadBytesResumable(fileRef, event);
        uploadTask.on("state_changed", (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                // setProgress(prog)
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    // const user_id = user?.sub;

                    setUrl(url);
                    console.log("this is",url)
                })
            }
        )
    }


    const handleUpload = (file) => {
        console.log(file.name)

        if (!file.name) {
            console.log("Please upload an image first!");
        }

        const storageRef = ref(storage, `/files/${file.name}`);
        console.log("starage",storageRef)

        // progress can be paused and resumed. It also exposes progress updates.
        // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log("url",url);
                    setUrl(url)
                });
            }
        );
    };
    const button = () => {

    }
    const { palette } = useTheme();
    return (
        <Fragment>
                   <Grid style={{margin:'10px'}}>
                       {/*<Write upload={{handleupload1}}/>*/}
                       <div>
                           {/*<form>*/}
                               <div>
                                   <ImageuploadS imageupload={ImgHandler}/>
                               </div>
                           {/*</form>*/}
                       </div>
                       <div className="form-row">
                             <App link={url}></App>
                       </div>
                   </Grid>
        </Fragment>
    );
};

export default Analytics;
