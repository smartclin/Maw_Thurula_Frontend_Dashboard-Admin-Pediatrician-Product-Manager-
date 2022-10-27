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
import {getMotherListForAdmin} from "../../../../services/Admin/Mother/admin_mother_service";
// import {useEffect, useState} from "@types/react";
import {Fragment, useEffect, useState} from 'react';
import {getCommentList, today_article_comments} from "../../../../services/Pediatrician/pt_service";

const TodayCommentListTable=()=> {
    const [CommentList, setCommentList] = useState([]);

    function DateReturn(){
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '/' + mm + '/' + yyyy;
        return formattedToday
    }
    let today=DateReturn()
    console.log(today)
    useEffect(() => {
        today_article_comments(today).then(data => {
            data.categories?setCommentList(data.categories):console.log("connte");
            console.log("CommentList")
        }).catch(err => {
            console.log(err.error)
        })
    }, []);

    useEffect(async () => {
        console.log("MotherList")
        console.log(CommentList)

    }, [CommentList]);

    // const handleOnClick = () => navigate('/admin/mother_details', {replace: false});

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                        This message will show on this users window
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="reason"
                        label="Reason for the action"
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
                title="Comment List"
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
                    { title: 'comment', field: 'comment_content',width: "10%" },
                    { title: 'id', field: 'user_id',width: "10%",hidden:true },
                    { title: 'Status', field: 'STATUS',lookup:{0:'Unblock',1:'Block'},width: "10%",hidden:true } ,
                ]}
                data={CommentList}
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
                // onRowClick={(event, rowData) => handleOnClick(rowData.user_id,rowData.postCount)}
                actions={[

                    (rowData) => {
                        return rowData.status
                            ? { icon: ()=><LockIcon style={{color:'#bdc3c7'}}/>,tooltip: 'Block the comment', onClick: (rowData) => { handleClickOpen()} }
                            : { icon:() =><LockOpenIcon style={{color:'#27ae60'}}/>,tooltip: 'Unblock the comment', onClick: (rowData) => { handleClickOpen()} }
                    }
                    // ,
                    // {
                    //     icon: ()=> <VisibilityIcon style={{color:'#1abc9c'}}/>,
                    //     tooltip: 'View User',
                    //     onClick: (event, rowData) => alert("You saved " + rowData.name),
                    // }
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
export default TodayCommentListTable;



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
