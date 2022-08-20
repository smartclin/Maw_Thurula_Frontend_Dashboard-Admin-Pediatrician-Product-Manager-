import MaterialTable from "material-table";

import LockIcon from '@mui/icons-material/LockRounded';
import LockOpenIcon from '@mui/icons-material/LockOpenRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';

import * as React from 'react';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import PendingIcon from '@mui/icons-material/Pending';
import DoneIcon from '@mui/icons-material/Done';
import {useNavigate} from "react-router-dom";

const NewJobRequestTable=()=> {

    const navigate = useNavigate();

    const viewRequest=(replyStatus)=>{
        replyStatus ?
            navigate({pathname:'/np/view_request_with_response'})
            :
            navigate({pathname:'/np/view_request'})

    }
    const [open, setOpen] = React.useState(false);

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
    let mainDiv={
        margin:'50px',

    };

    let tableStyle={
        padding:'10px 25px '
    };



    return (
        <div style={mainDiv}>

{/*
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
        </Dialog>*/}
        <MaterialTable style={tableStyle}
            title="Request List"
            columns={[

                { title: 'Name', field: 'name',width: "20%" },
                { title: 'Email', field: 'Email',width: "20%" },
                { title: 'Date', field: 'Date',width: "10%" },
                { title: 'Status', field: 'Status',lookup:{0:'Waiting for reply',1:'Replied'},width: "10%" ,hidden:true},
            ]}
            data={[
                { name: 'Maduni Tharukshi', Email: 'maduni@gmail.com', Date: '2022/02/05', Status:1},
                { name: 'Akila Anjana', Email: 'anjana@gmail.com', Date: '2022/02/01',Status:0},
                { name: 'Lulakshi Naduni', Email: 'lulakshi@gmail.com', Date: '2022/01/30' ,Status:1},
                {name: 'Hansana Ranaweera', Email: 'hansa@gmail.com', Date: '2022/01/25' ,Status:1},
                { name: 'Yasas Gamage', Email: 'yasas@gmail.com', Date: '2022/01/02', Status:0},
                { name: 'Maduni Tharukshi', Email: 'maduni@gmail.com', Date: '2022/02/05', Status:1},
                { name: 'Akila Anjana', Email: 'anjana@gmail.com', Date: '2022/02/01',Status:0},
                { name: 'Lulakshi Naduni', Email: 'lulakshi@gmail.com', Date: '2022/01/30' ,Status:1},


            ]}
            onRowClick={(event, rowData) => viewRequest(rowData.Status)}
            actions={[
                (rowData) => {
                    return rowData.Status
                        ? { icon:() =><DoneIcon style={{color:"#32a85c"}}/>,tooltip:'Replied' , onClick: (rowData) => { /* anythink */ } }
                        : { icon:() =><PendingIcon style={{color:"#f2b13f"}}/>,tooltip:'Waiting for reply', onClick: (rowData) => { handleClickOpen()} }
                }

            ]}
            options={{sorting:true, exportAllData:true ,exportButton:true ,actionsColumnIndex: -1,
                paging: true,
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
export default NewJobRequestTable;