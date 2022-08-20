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
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import {useNavigate, useParams} from "react-router-dom";
const AstrologerListTable=()=> {
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
    const navigate = useNavigate();

    const loadReport=()=>navigate({
        pathname:'../admin/one_astrologer_report',

    })


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
            title="Astrologers List"
            columns={[
                {
                    field: 'url',
                    title: 'Avatar',
                    render: rowData => <img src={rowData.url} style={{width: 30, borderRadius: '50%',boxShadow: "0px 3px 6px #9E9E9E"}}/>,
                    cellStyle: {
                        paddingLeft:30
                    },
                    headerStyle: {
                        paddingLeft:30
                    }                },
                { title: 'Name', field: 'name',width: "10%" },
                { title: 'Email', field: 'Email',width: "10%" },
                { title: 'Jobs', field: 'Jobs',width: "10%" },
                { title: 'Charge', field: 'Charge',width: "10%" },
                { title: 'Income', field: 'Income',width: "10%" },
                { title: 'Status', field: 'Status',lookup:{0:'Unblock',1:'Block'},width: "10%" ,hidden:true},
            ]}
            data={[
                {url:'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4', name: 'Akila Anjana', Email: 'anjanadissanayaka@gmail.com', Jobs: 1987, Charge: 'Rs.500' ,Income: 'Rs.7500' ,Status:1},
                {url:'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4', name: 'Anura Ajantha', Email: 'Ajantha@gmail.com', Jobs: 1987, Charge: 'Rs.700' ,Income: 'Rs.7500' ,Status:1},
                {url:'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4', name: 'Kasun kalhara', Email: 'kalhara@gmail.com', Jobs: 1987, Charge: 'Rs.800' ,Income: 'Rs.7500' ,Status:0},
                {url:'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4', name: 'Jagath Manawakage', Email: 'Manawakage@gmail.com', Jobs: 1987, Charge: 'Rs.900' ,Income: 'Rs.7500' ,Status:0},
                {url:'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4', name: 'Dissanayaka', Email: 'dissanayaka@gmail.com', Jobs: 1987, Charge: 'Rs.500' ,Income: 'Rs.7500' ,Status:0},

            ]}
            onRowClick={(event, rowData) => console.log(rowData)}
            actions={[
                (rowData) => {
                    return rowData.Status
                        ? { icon: ()=><LockIcon style={{color:'#1976d2'}}/>, onClick: (rowData) => { /* anythink */ } }
                        : { icon:() =><LockOpenIcon style={{color:'#1976d2'}}/>, onClick: (rowData) => { handleClickOpen()} }
                },
                {
                    icon: ()=><ViewTimelineIcon style={{color:'#1976d2'}}/>,
                    tooltip: 'View report',
                    onClick: (event, rowData) => {loadReport()},
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
export default AstrologerListTable;
