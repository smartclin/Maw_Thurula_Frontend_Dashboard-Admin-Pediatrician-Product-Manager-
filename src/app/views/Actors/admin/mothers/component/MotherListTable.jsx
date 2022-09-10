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
import {useNavigate} from 'react-router-dom';
import {
    BlockMother,
    getMotherListForAdmin,
    UnBlockMother
} from "../../../../../services/Admin/Mother/admin_mother_service";
// import {useEffect, useState} from "@types/react";
import {Fragment, useEffect, useState,useRef} from 'react';

const MotherListTable=()=> {
    const navigate = useNavigate();
    // const handleOnClick = () => navigate('/admin/mother_details/2', {replace: false});
    const handleOnClick = (id,count) => navigate('/admin/target_mothers_post_list/'+id+'/'+count, {replace: false});

    const [MotherList, setMotherList] = useState([]);
    const [TMotherList, setTMotherList] = useState([]);
    const mlist=[]



    useEffect(() => {
        getMotherListForAdmin().then(data => {
            setMotherList(data);
        }).catch(err => {
            console.log(err.error)
        })
    }, []);

    useEffect(async () => {
        // console.log(MotherList)
    }, [MotherList]);

    // const handleOnClick = () => navigate('/admin/mother_details', {replace: false});

    const [open, setOpen] = React.useState(false);
    const [id, setId] = React.useState(false);

    const handleBlockClickOpen = (uid) => {
        setId(uid);
        // console.log("Id : "+id)
        setOpen(true);
    };
    const handleUnBlockClickOpen= (uid) => {
      UnBlockMother(uid).then(data => {
            // console.log("Succesfully Unblocked id-"+uid)
              getMotherListForAdmin().then(data => {
                  setMotherList(data);
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
        // console.log(valueRef.current.value)
        // console.log("Id : "+id)
        BlockMother(id,valueRef.current.value).then(data => {
            // console.log("Succesfully blocked id-"+id+"  reason- "+valueRef.current.value)
            getMotherListForAdmin().then(data => {
                setMotherList(data);
            }).catch(err => {
                console.log(err.error)
            })
        }).catch(err => {
            console.log(err.error)
        })
        setOpen(false);
    }

    const checkStatus=(data)=>{
        // console.log("data - "+data)
        return true
    }
    return (
        <div>


        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Reason for this action</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Maybe she did it because of pregnancy stress...
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
            title="Mothers List"
            columns={[
                {
                    field: 'DP',
                    title: 'Avatar',
                    render: rowData => <img src={rowData.DP} style={{width: 30, borderRadius: '50%',boxShadow: "0px 3px 6px #9E9E9E"}}/>,
                    cellStyle: {
                        paddingLeft:30
                    },
                    headerStyle: {
                        paddingLeft:30
                    }                },
                { title: 'Name', field: 'first_name',width: "10%" },
                { title: 'Email', field: 'email',width: "10%" },
                { title: 'Posts', field: 'postCount',width: "10%" },
                { title: 'id', field: 'user_id',width: "10%",hidden:true },
                { title: 'Status', field: 'STATUS',lookup:{0:'Unblock',1:'Block'},width: "10%",hidden:true } ,
            ]}
            data={MotherList.students}
            // data={[
            //     {
            //         url: 'https://i.postimg.cc/q7jS5mTj/12.jpg',
            //         name: 'Maduni Tharukshi',
            //         Email: 'maduni12@gmail.com',
            //         Posts: 6,
            //         Comments: 63,
            //         Status: 1
            //     },
            //     {
            //         url: 'https://i.postimg.cc/43yRsCwr/13.jpg',
            //         name: 'Senuri wikramanayake',
            //         Email: 'wikramanayake@gmail.com',
            //         Posts: 12,
            //         Comments: 63,
            //         Status: 1
            //     },
            //     {
            //         url: 'https://i.postimg.cc/Zn0j1C0B/6.jpg',
            //         name: 'Kasunika jayathilake',
            //         Email: 'jayathilake@gmail.com',
            //         Posts: 1,
            //         Comments: 34,
            //         Status: 0
            //     },
            //     {
            //         url: 'https://i.postimg.cc/PryVPnn5/8.jpg',
            //         name: 'Nisansala sewwandi',
            //         Email: 'sewwandi@gmail.com',
            //         Posts: 5,
            //         Comments: 15,
            //         Status: 1
            //     },
            //     {
            //         url: 'https://i.postimg.cc/sDp1kW0t/10.jpg',
            //         name: 'Hiruni mahisha',
            //         Email: 'mahisha@gmail.com',
            //         Posts: 4,
            //         Comments: 87,
            //         Status: 1
            //     },
            //
            // ]}
            onRowClick={(event, rowData) => handleOnClick(rowData.user_id,rowData.postCount)}
            actions={[

                (rowData) => {
                    return rowData.STATUS
                        ? { icon: ()=><LockIcon style={{color:'#bdc3c7'}}/>,tooltip: 'Unlock', onClick: (event, rowData) => { handleUnBlockClickOpen(rowData.user_id) } }
                        : { icon:() =><LockOpenIcon style={{color:'#27ae60'}}/>,tooltip: 'Lock', onClick: (event, rowData) => { handleBlockClickOpen(rowData.user_id)} }
                }
                ,
                {
                    icon: ()=> <VisibilityIcon style={{color:'#1abc9c'}}/>,
                    tooltip: 'View User',
                    onClick: (event, rowData) => handleOnClick(rowData.user_id,rowData.postCount),
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
export default MotherListTable;



// MotherList ? motherList.students.map((mother, index) => {
//
//     if(mother.STATUS == 1){
//         block++
//     }
//     if(mother.login_status=1){
//         active++
//     }
//     console.log(mother.user_id,)
//     console.log(mother.first_name+" "+mother.last_name,)
//     console.log(mother.DP,)
//     console.log(mother.email,)
//     console.log(mother.postCount,)
//     mlist.push({
//         id:mother.user_id,
//         name:mother.first_name+" "+mother.last_name,
//         url:mother.DP,
//         Email:mother.email,
//         Posts:mother.postCount,
//         Status:mother.STATUS
//     })
//
// }) : console.log("Data 1 Loading")

// setTMotherList(mlist);
// console.log("-----------------mlist")
// console.log("all "+all)
// console.log("active "+active)
// console.log("block "+block)
