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
import {useNavigate} from "react-router-dom";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import ArchiveIcon from '@mui/icons-material/Archive';
import {useEffect, useRef, useState} from "react";
import {
    Astrologers_Data_with_profit, BlockAstrologer,
    UnBlockAstrologer
} from "../../../../../services/Admin/Astrologer/admin_astrologer_service";
import {BlockNP, NP_Data_with_profit, UnBlockNP} from "../../../../../services/Admin/Name_Provider/admin_np_service";

const NameProviderListTable=()=> {
    const [open, setOpen] = React.useState(false);
    const [AList, setAList] = useState([]);
    useEffect(() => {
        NP_Data_with_profit().then(data => {
            setAList(data);
        }).catch(err => {
            console.log(err.error)
        })
    }, []);


    const [id, setId] = React.useState(false);

    const handleBlockClickOpen = (uid) => {
        console.log(uid)
        setId(uid);
        // // console.log("Id : "+id)
        setOpen(true);
    };

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    function calcProfit(x){
        if(x){
            // console.log("has val -"+x)
            let val=numberWithCommas(x)
            let y="Rs. "+val
            return y
        }
        else {
            return "Rs. 0"
        }
    }
    const handleUnBlockClickOpen= (uid) => {
        // console.log(uid)
        UnBlockNP(uid).then(data => {
            // console.log("Succesfully Unblocked id-"+uid)
            NP_Data_with_profit().then(data => {
                setAList(data);
            }).catch(err => {
                console.log(err.error)
            })
        }).catch(err => {
            console.log(err.error)
        })
    };

    const handleClose = () => {
        setOpen(false);
    };
    const valueRef = useRef('')
    const sendValue = () => {
        // console.log("Succesfully blocked id-"+id+"  reason- "+valueRef.current.value)
        BlockNP(id,valueRef.current.value).then(data => {
            console.log("Succesfully blocked id-"+id+"  reason- "+valueRef.current.value)
            NP_Data_with_profit().then(data => {
                setAList(data);
            }).catch(err => {
                console.log(err.error)
            })
        }).catch(err => {
            console.log(err.error)
        })
        setOpen(false);
    }
    const navigate = useNavigate();

    const loadReport=()=>navigate({
        pathname:'../admin/one_name_provider_report',

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
                        inputRef={valueRef}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={sendValue}>Block</Button>
                </DialogActions>
            </Dialog>
        <MaterialTable
            title="Name Provider List"
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
                { title: 'id', field: 'user_id',width: "10%",hidden:true },
                { title: 'Email', field: 'email',width: "10%" },
                { title: 'Jobs', field: 'Jobs',width: "10%" ,hidden:true},
                { title: 'Charge', field: 'service_charge',width: "10%" },
                { title: 'Income', field: 'sum',width: "10%",render: (expense) => <span>{calcProfit(expense.sum)}</span> },
                { title: 'Status', field: 'STATUS',lookup:{0:'Unblock',1:'Block'},width: "10%" ,hidden:true},
            ]}
            // data={[
            //     {url:'https://i.postimg.cc/mkbXchv1/7.jpg', name: 'Akila Anjana', Email: 'anjanadissanayaka@gmail.com', Jobs: 1987, Charge: 'Rs.500' ,Income: 'Rs.7500' ,Status:1},
            //     {url:'https://i.postimg.cc/W4Lzg2xN/4.jpg', name: 'Anura Ajantha', Email: 'Ajantha@gmail.com', Jobs: 1987, Charge: 'Rs.700' ,Income: 'Rs.7500' ,Status:1},
            //     {url:'https://i.postimg.cc/7YtTGrxh/3.jpg', name: 'Kasun kalhara', Email: 'kalhara@gmail.com', Jobs: 1987, Charge: 'Rs.800' ,Income: 'Rs.7500' ,Status:0},
            //     {url:'https://i.postimg.cc/GtPLN2v8/6.jpg', name: 'Jagath Manawakage', Email: 'Manawakage@gmail.com', Jobs: 1987, Charge: 'Rs.900' ,Income: 'Rs.7500' ,Status:0},
            //     {url:'https://i.postimg.cc/fTnrG143/1.webp', name: 'Dissanayaka', Email: 'dissanayaka@gmail.com', Jobs: 1987, Charge: 'Rs.500' ,Income: 'Rs.7500' ,Status:0},
            //
            // ]}
            data={AList.np}
            onRowClick={(event, rowData) => console.log(rowData)}
            actions={[
                (rowData) => {
                    return rowData.STATUS==1
                        ? { icon: ()=><LockIcon style={{color:'#bdc3c7'}}/>,tooltip: 'Unlock', onClick: (event, rowData) => { handleUnBlockClickOpen(rowData.user_id) } }
                        : { icon:() =><LockOpenIcon style={{color:'#27ae60'}}/>,tooltip: 'Lock', onClick: (event, rowData) => { handleBlockClickOpen(rowData.user_id)} }
                },
                {
                    icon: () => <ArchiveIcon style={{color: '#2c3e50'}}/>,
                    tooltip: 'View report',
                    onClick: (event, rowData) => {
                        loadReport()
                    },
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
export default NameProviderListTable;
