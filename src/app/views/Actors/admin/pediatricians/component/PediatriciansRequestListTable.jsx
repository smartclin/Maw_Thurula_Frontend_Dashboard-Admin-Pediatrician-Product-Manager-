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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import {useNavigate} from 'react-router-dom';


const PediatriciansRequestListTable=()=> {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    // const handleOnClick = () => navigate('/admin/mother_details/2', {replace: false});
    const handleOnClick = () => navigate('/admin/PediatricianApprovalDecision', {replace: false});
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
            title="Pending Request List"
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
                { title: 'Phone', field: 'phone',width: "10%" },
            ]}
            data={[
                {url:'https://i.postimg.cc/mkbXchv1/7.jpg', name: 'Akila Anjana', Email: 'anjanadissanayaka@gmail.com', phone: "0713568999", Charge: 'Rs.500' ,Income: 'Rs.7500' ,Status:1},
                {url:'https://i.postimg.cc/W4Lzg2xN/4.jpg', name: 'Anura Ajantha', Email: 'Ajantha@gmail.com', phone: "0713568994", Charge: 'Rs.700' ,Income: 'Rs.7500' ,Status:1},
                {url:'https://i.postimg.cc/7YtTGrxh/3.jpg', name: 'Kasun kalhara', Email: 'kalhara@gmail.com', phone: "0713568997", Charge: 'Rs.800' ,Income: 'Rs.7500' ,Status:0},
                {url:'https://i.postimg.cc/GtPLN2v8/6.jpg', name: 'Jagath Manawakage', Email: 'Manawakage@gmail.com', phone: "071356890", Charge: 'Rs.900' ,Income: 'Rs.7500' ,Status:0},
                {url:'https://i.postimg.cc/fTnrG143/1.webp', name: 'Dissanayaka', Email: 'dissanayaka@gmail.com', phone: "0713568991", Charge: 'Rs.500' ,Income: 'Rs.7500' ,Status:0},

            ]}
            onRowClick={(event, rowData) => console.log(rowData)}
            actions={[
                (rowData) => {
                    return {
                        icon: CheckCircleIcon,
                        tooltip: 'Accept',
                        onClick: (event, rowData) => alert("You saved " + rowData.name),
                    }
                },
                (rowData) => {
                    return {
                        icon: CancelIcon,
                        tooltip: 'Reject',
                        onClick: (event, rowData) => alert("You Reject " + rowData.name),
                    }
                }
            ]}
            onRowClick={(event, rowData) => handleOnClick()}
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
export default PediatriciansRequestListTable;
