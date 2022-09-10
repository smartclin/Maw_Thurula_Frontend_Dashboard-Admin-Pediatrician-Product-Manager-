import React,{useState } from 'react';
import axios from 'axios';
// import './App.css';

function ImageuploadS() {

    const [userInfo, setuserInfo] = useState({
        file:[],
        filepreview:null,
    });

    const handleInputChange = (event) => {
        setuserInfo({
            ...userInfo,
            file:event.target.files[0],
            filepreview:URL.createObjectURL(event.target.files[0]),
        });

    }

    const [isSucces, setSuccess] = useState(null);

    const submit = async () =>{
        const formdata = new FormData();
        formdata.append('avatar', userInfo.file);

        axios.post("http://localhost:8080/imageupload", formdata,{
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(res => { // then print response status
                console.warn(res);
                if(res.data.success === 1){
                    setSuccess("Image upload successfully");
                }

            })
    }

    return (
        <div className="container mr-60">
            {/*<h3 className="text-white">React Image Upload And Preview Using Node Js - <span> codeat21.com </span> </h3>*/}

            <div className="formdesign">
                {isSucces !== null ? <h4> {isSucces} </h4> :null }
                <div className="form-row" style={{margin:"10px 50px 50px 50px"}}>
                    {/*<label className="text-white">Select Image :</label>*/}
                    <input type="file" className="form-control" name="upload_file"  onChange={handleInputChange} />
                </div>
                <div className="form-row">

                </div>
            </div>

          <div>
              {userInfo.filepreview !== null ?
                  // <img className="previewimg"   src={userInfo.filepreview} alt="UploadImage" style={{ display: "flex", alignContent: "center", justifyContent: "center" , height: "100px" , width:"100px"}} />
                  // : null}
                  <img
                      className="writeImg"
                      src={userInfo.filepreview}
                      // src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt="UploadImage"
                  />:null}
          </div>

            {/*<div className="form-row">*/}
            {/*    <button type="submit" className="btn btn-dark" onClick={()=>submit()} > Save </button>*/}

            {/*</div>*/}

        </div>
    );
}

export default ImageuploadS;