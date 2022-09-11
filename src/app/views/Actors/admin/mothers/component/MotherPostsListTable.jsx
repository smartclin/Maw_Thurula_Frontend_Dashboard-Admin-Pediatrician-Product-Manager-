import MaterialTable from "material-table";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

import * as React from 'react';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import {
    AcceptPost,
    getMotherListForAdmin,
    MotherPendingPostWithCount, RejectPost
} from "../../../../../services/Admin/Mother/admin_mother_service";

const MotherPostListTable=()=> {

    const navigate = useNavigate();
    // const handleOnClick = () => navigate('/admin/mother_details/2', {replace: false});
    // const handleOnClick = () => navigate('/admin/target_mothers_full_post_list/2', {replace: false});
    const handleOnClick = (uid,pid) => navigate('/admin/target_mothers_full_post_list/'+uid+'/'+pid, {replace: false});

    // const handleOnClick = () => navigate('/admin/mother_details', {replace: false});
    const [PostList, setPostList] = useState([]);
    const [open, setOpen] = React.useState(false);


    useEffect(() => {
        MotherPendingPostWithCount().then(data => {
            setPostList(data);
        }).catch(err => {
            console.log(err.error)
        })
    }, []);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const checkStatus=(data)=>{
        console.log("data - "+data)
        return true
    }
    const accept=(pid)=>{
        // console.log("data - "+pid)
        AcceptPost(pid).then(x => {
            MotherPendingPostWithCount().then(data => {
            setPostList(data);
            }).catch(err => {
                console.log(err.error)
            })
        }).catch(err => {
            console.log(err.error)
        })
        return true
    }
    const reject=(pid)=>{
        // console.log("data - "+pid)
        RejectPost(pid).then(x => {
            MotherPendingPostWithCount().then(data => {
            setPostList(data);
            }).catch(err => {
                console.log(err.error)
            })
        }).catch(err => {
            console.log(err.error)
        })
        return true
    }
    function DateReturn(date){
        const today = new Date(date);
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '/' + mm + '/' + yyyy;
        return formattedToday
    }
    return (
        <div>


        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Reason for this action</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    This message will show on this users window
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="reason"
                    label="Reason for Block"
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Submit</Button>
            </DialogActions>
        </Dialog>
        <MaterialTable
            title="Recent Community Post"
            columns={[

                { title: 'Name', field: 'name',width: "25%",
                    cellStyle: {
                        paddingLeft:30,
                        minWidth: 100,
                        maxWidth: 100
                    },
                    headerStyle: {
                        paddingLeft:30
                    } },
                { title: 'Posts', field: 'Posts',width: "25%"},
                { title: 'id', field: 'id',width: "25%",hidden:true},
                { title: 'pid', field: 'pid',width: "25%",hidden:true},
                { title: 'Title', field: 'Title',cellStyle: {
                        minWidth: 300,
                        maxWidth: 300,
                        paddingRight:60

                    } },
                { title: 'Date', field: 'date',width: "25%" ,type: "date",dateSetting: { locale: "en-GB" },},
            ]}
            // data={[
            //     {
            //         id:'1',
            //         name: 'Madhuni Tharukshi',
            //         Posts: 6,
            //         date:'2022/08/10',
            //         Title: 'Breastfeeding challenges'
            //     },
            //     {
            //         id:'1',
            //         name: 'Kasunika Udayangi',
            //         Posts: 4,
            //         date:'2022/08/10',
            //         Title: 'Lack of sleep'
            //     },
            //     {
            //         id:'1',
            //         name: 'Pawani Chathurika',
            //         Posts: 12,
            //         date:'2022/08/10',
            //         Title: 'When to call the doctor'
            //     },
            //     {
            //         id:'1',
            //         name: 'Lulakshi hettiarachchi',
            //         Posts: 4,
            //         date:'2022/08/10',
            //         Title: 'Weight gain'
            //     },
            //     {
            //         id:'1',
            //         name: 'Amasha sewwandi',
            //         Posts: 2,
            //         date:'2022/08/10',
            //         Title: 'Vaccine safety'
            //     },
            //
            //
            // ]}
            data={PostList.data}
            onRowClick={(event, rowData) => handleOnClick(rowData.id,rowData.pid)}
            actions={[
                {
                    icon: ()=> <CheckCircleRoundedIcon style={{color:'#74b9ff',marginBottom:1}}/>,
                    tooltip: 'Accept',
                    onClick: (event, rowData) =>accept(rowData.pid) ,
                },
                {

                    icon: ()=> <CancelRoundedIcon style={{color:'#ff7675'}}/>,
                    tooltip: 'Reject',
                    onClick: (event, rowData) => reject(rowData.pid),
                    iconProps: { color:  'primary' },
                }
            ]}
            options={{sorting:true, exportAllData:true ,exportButton:true ,actionsColumnIndex: -1,
                paging: true
            }}
            localization={{
                pagination: {
                    labelDisplayedRows: '',
                    labelRowsPerPage:''
                },
            }}
        />
        </div>
    )
}
export default MotherPostListTable;
