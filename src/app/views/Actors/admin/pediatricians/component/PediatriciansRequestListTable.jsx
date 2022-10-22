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
import {useEffect, useState} from "react";
import {
    Astrologers_Data_with_profit, BlockAstrologer,
    UnBlockAstrologer
} from "../../../../../services/Admin/Astrologer/admin_astrologer_service";
import {
    AcceptPediatrician,
    Pediatrician_Request_Data, RejectPediatrician
} from "../../../../../services/Admin/Pediatrician/admin_pediatrician_service";


const PediatriciansRequestListTable=()=> {
    const [open, setOpen] = React.useState(false);
    const [AList, setAList] = useState([]);
    const [pid, setPid] = useState([]);
    const navigate = useNavigate();
    // const handleOnClick = () => navigate('/admin/mother_details/2', {replace: false});
    const handleOnClick = (id) => navigate('/admin/PediatricianApprovalDecision/'+id, {replace: false});
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

    const [id, setId] = React.useState(false);

    const handleRejectClickOpen = (uid) => {
        // console.log(uid)
        setId(uid);
        // // console.log("Id : "+id)
        setOpen(true);
    };
    const handleAcceptClickOpen= (uid) => {
        // console.log(uid)
        AcceptPediatrician(uid).then(data => {
            // console.log("Succesfully Unblocked id-"+uid)
            Pediatrician_Request_Data().then(data => {
                setAList(data);
            }).catch(err => {
                console.log(err.error)
            })
        }).catch(err => {
            console.log(err.error)
        })
    };
    const sendValue = () => {
        // console.log("Succesfully blocked id-"+id)
        RejectPediatrician(id).then(data => {
            // console.log("Succesfully blocked id-"+id+"  reason- "+valueRef.current.value)
            Pediatrician_Request_Data().then(data => {
                setAList(data);
            }).catch(err => {
                console.log(err.error)
            })
        }).catch(err => {
            console.log(err.error)
        })
        setOpen(false);
    }


    useEffect(() => {
        Pediatrician_Request_Data().then(data => {
            setAList(data);
        }).catch(err => {
            console.log(err.error)
        })
    }, []);
    return (
        <div>


        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Are You Sure?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Rejecting will permanently remove this Person from the system. This cannot be undone!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={sendValue}>Reject</Button>
            </DialogActions>
        </Dialog>
        <MaterialTable
            title="Pending Request List"
            columns={[
                {
                    field: 'profile_picture',
                    title: 'Avatar',
                    render: rowData => <img src={rowData.profile_picture} style={{width: 30, borderRadius: '50%',boxShadow: "0px 3px 6px #9E9E9E"}}/>,
                    cellStyle: {
                        paddingLeft:30
                    },
                    headerStyle: {
                        paddingLeft:30
                    }                },
                { title: 'Name', field: 'name',width: "10%" },
                { title: 'Email', field: 'email',width: "10%" },
                { title: 'Phone', field: 'phone_number',width: "10%" },
            ]}
            // data={[
            //     {url:'https://i.postimg.cc/mkbXchv1/7.jpg', name: 'Akila Anjana', Email: 'anjanadissanayaka@gmail.com', phone: "0713568999", Charge: 'Rs.500' ,Income: 'Rs.7500' ,Status:1},
            //     {url:'https://i.postimg.cc/W4Lzg2xN/4.jpg', name: 'Anura Ajantha', Email: 'Ajantha@gmail.com', phone: "0713568994", Charge: 'Rs.700' ,Income: 'Rs.7500' ,Status:1},
            //     {url:'https://i.postimg.cc/7YtTGrxh/3.jpg', name: 'Kasun kalhara', Email: 'kalhara@gmail.com', phone: "0713568997", Charge: 'Rs.800' ,Income: 'Rs.7500' ,Status:0},
            //     {url:'https://i.postimg.cc/GtPLN2v8/6.jpg', name: 'Jagath Manawakage', Email: 'Manawakage@gmail.com', phone: "071356890", Charge: 'Rs.900' ,Income: 'Rs.7500' ,Status:0},
            //     {url:'https://i.postimg.cc/fTnrG143/1.webp', name: 'Dissanayaka', Email: 'dissanayaka@gmail.com', phone: "0713568991", Charge: 'Rs.500' ,Income: 'Rs.7500' ,Status:0},
            //
            // ]}
            data={AList.pediatricians}
            // onRowClick={(event, rowData) => console.log(rowData)}
            actions={[
                (rowData) => {
                    return {
                        icon: CheckCircleIcon,
                        tooltip: 'Accept',
                        onClick: (event, rowData) => { handleAcceptClickOpen(rowData.user_id) }
                    }
                },
                (rowData) => {
                    return {
                        icon: CancelIcon,
                        tooltip: 'Reject',
                        onClick: (event, rowData) => { handleRejectClickOpen(rowData.user_id)}
                    }
                }
            ]}
            onRowClick={(event, rowData) => handleOnClick(rowData.user_id)}
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
