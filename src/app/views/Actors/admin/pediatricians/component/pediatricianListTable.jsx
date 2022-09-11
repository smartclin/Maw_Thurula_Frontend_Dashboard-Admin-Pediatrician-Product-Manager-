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
import ArchiveIcon from "@mui/icons-material/Archive";
import {useEffect, useState} from "react";
import {
    BlockPediatrician,
    getPListForAdmin,
    UnBlockPediatrician
} from "../../../../../services/Admin/Pediatrician/admin_pediatrician_service";
import {
    BlockMother,
    getMotherListForAdmin,
    UnBlockMother
} from "../../../../../services/Admin/Mother/admin_mother_service";
import {useRef} from "react";

const PediatricianListTable=()=> {
    const [open, setOpen] = React.useState(false);

    const [PList, setPList] = useState([]);
    const [SPList, setSPList] = useState([]);
    const [all, setAll] = useState(0);
    const [block, setBlock] = useState(0);
    const [active, setActive] = useState(0);

    useEffect(() => {
        getPListForAdmin().then(data => {
            setPList(data);
        }).catch(err => {
            console.log(err.error)
        })
    }, []);


    const [id, setId] = React.useState(false);

    const handleBlockClickOpen = (uid) => {
        // console.log(uid)
        setId(uid);
        // // console.log("Id : "+id)
        setOpen(true);
    };
    const handleUnBlockClickOpen= (uid) => {
        console.log(uid)
        UnBlockPediatrician(uid).then(data => {
            // console.log("Succesfully Unblocked id-"+uid)
            getPListForAdmin().then(data => {
                setPList(data);
                setSPList(data);
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
        console.log("Succesfully blocked id-"+id+"  reason- "+valueRef.current.value)
        BlockPediatrician(id,valueRef.current.value).then(data => {
            console.log("Succesfully blocked id-"+id+"  reason- "+valueRef.current.value)
            getPListForAdmin().then(data => {
                setPList(data);
                setSPList(data)
            }).catch(err => {
                console.log(err.error)
            })
        }).catch(err => {
            console.log(err.error)
        })
        setOpen(false);
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
                        inputRef={valueRef}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={sendValue}>Block</Button>
                </DialogActions>
            </Dialog>
        <MaterialTable
            title="Pediatricians List"
            columns={[
                {
                    field: 'profile_picture',
                    title: 'Avatar',
                    render: rowData => <img src={rowData.profile_picture} style={{width: 30,height:30, borderRadius: '50%',boxShadow: "0px 3px 6px #9E9E9E"}}/>,
                    cellStyle: {
                        paddingLeft:30
                    },
                    headerStyle: {
                        paddingLeft:30
                    }                },
                { title: 'Name', field: 'name',width: "10%" },
                { title: 'id', field: 'user_id',width: "10%" ,hidden:true},

                { title: 'Email', field: 'email',width: "10%" },
                { title: 'Articles', field: 'count',width: "10%" },
                { title: 'Phone Number', field: 'phone_number',width: "10%" },
                { title: 'Registered', field: 'registered_at',width: "10%" },
                { title: 'Status', field: 'STATUS',lookup:{0:'Unblock',1:'Block'},width: "10%" ,hidden:true},
            ]}
            // commect for check data
            // data={[
            //     {url:'https://i.postimg.cc/mkbXchv1/7.jpg', name: 'Akila Anjana', Email: 'anjanadissanayaka@gmail.com', Articles: 25, Number: '0713804551' ,date: '2022/07/06' ,Status:1},
            //     {url:'https://i.postimg.cc/W4Lzg2xN/4.jpg', name: 'Anura Ajantha', Email: 'Ajantha@gmail.com', Articles: 26, Number: '0713804552' ,date: '2022/07/06' ,Status:1},
            //     {url:'https://i.postimg.cc/7YtTGrxh/3.jpg', name: 'Kasun kalhara', Email: 'kalhara@gmail.com', Articles: 75, Number: '0713804553' ,date: '2022/07/06' ,Status:0},
            //     {url:'https://i.postimg.cc/GtPLN2v8/6.jpg', name: 'Jagath Manawakage', Email: 'Manawakage@gmail.com', Articles: 85, Number: '0743804555' ,date: '2022/07/06' ,Status:0},
            //     {url:'https://i.postimg.cc/fTnrG143/1.webp', name: 'Dissanayaka', Email: 'dissanayaka@gmail.com', Articles: 21, Number: '0713804556' ,date: '2022/07/06' ,Status:1},
            //
            //
            //
            // ]}
            data={PList.paediatrician}
            onRowClick={(event, rowData) => console.log(rowData)}
            actions={[
                (rowData) => {
                    return rowData.STATUS
                        ? { icon: ()=><LockIcon style={{color:'#bdc3c7'}}/>,tooltip: 'Unlock', onClick: (event, rowData) => { handleUnBlockClickOpen(rowData.user_id) } }
                        : { icon:() =><LockOpenIcon style={{color:'#27ae60'}}/>,tooltip: 'Lock', onClick: (event, rowData) => { handleBlockClickOpen(rowData.user_id)} }
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
export default PediatricianListTable;
