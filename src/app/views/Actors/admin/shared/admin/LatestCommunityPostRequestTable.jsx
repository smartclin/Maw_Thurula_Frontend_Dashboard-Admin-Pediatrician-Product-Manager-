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
                  minWidth: 120,
                  maxWidth: 120
                },
                headerStyle: {
                  paddingLeft:30
                } },
              { title: 'Posts', field: 'Posts',width: "25%",hidden:true},
              { title: 'id', field: 'id',width: "25%",hidden:true},
              { title: 'pid', field: 'pid',width: "25%",hidden:true},
              { title: 'Title', field: 'Title',cellStyle: {
                  minWidth: 300,
                  maxWidth: 300,
                  paddingRight:60

                } },
              { title: 'Date', field: 'date',width: "25%" ,type: "date",dateSetting: { locale: "en-GB" },hidden:true},
            ]}


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
            options={{sorting:false, exportAllData:true ,exportButton:true ,actionsColumnIndex: -1,
              paging: true,
              rowStyle: {
                fontSize: 12,
              },
              headerStyle:{
                fontSize: 12,
              },
              // showTitle:false,
              // search:false
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



// import {
//   Avatar,
//   Box,
//   Card,
//   Icon,
//   IconButton,
//   MenuItem,
//   Select,
//   styled,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   useTheme,
// } from '@mui/material';
// import { Paragraph } from 'app/components/Typography';
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import TextField from "@mui/material/TextField";
// import DialogActions from "@mui/material/DialogActions";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import * as React from "react";
// import {useEffect, useState} from "react";
// import {
//   AcceptPost,
//   MotherPendingPostWithCount,
//   RejectPost
// } from "../../../../../services/Admin/Mother/admin_mother_service";
//
// const CardHeader = styled(Box)(() => ({
//   display: 'flex',
//   paddingLeft: '24px',
//   paddingRight: '24px',
//   marginBottom: '12px',
//   alignItems: 'center',
//   justifyContent: 'space-between',
// }));
//
// const Title = styled('span')(() => ({
//   fontSize: '1rem',
//   fontWeight: '500',
//   textTransform: 'capitalize',
// }));
//
// const ProductTable = styled(Table)(() => ({
//   minWidth: 400,
//   whiteSpace: 'pre',
//   '& small': {
//     width: 50,
//     height: 15,
//     borderRadius: 500,
//     boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
//   },
//   '& td': { borderBottom: 'none' },
//   '& td:first-of-type': { paddingLeft: '16px !important' },
// }));
//
// const Small = styled('small')(({ bgcolor }) => ({
//   width: 50,
//   height: 15,
//   color: '#fff',
//   padding: '2px 8px',
//   borderRadius: '4px',
//   overflow: 'hidden',
//   background: bgcolor,
//   boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
// }));
//
//
//
// const LatestCommunityPostRequestTable = () => {
//   const [PostList, setPostList] = useState([]);
//   const [open, setOpen] = React.useState(false);
//   const [mothersList, setmothersList] = React.useState(false);
//   const { palette } = useTheme();
//   const bgError = palette.error.main;
//   const bgPrimary = palette.primary.main;
//   const bgSecondary = palette.secondary.main;
//   useEffect(() => {
//     MotherPendingPostWithCount().then(data => {
//       setPostList(data);
//     }).catch(err => {
//       console.log(err.error)
//     })
//   }, []);
//   useEffect(() => {
//     // console.log("---------------")
//     setmothersList(PostList.data);
//     // console.log(PostList.data);
//     // console.log("------------")
//     // console.log(mothersList)
//   }, [PostList]);
//
//   const handleClose=()=>{
//     setOpen(false);
//   }
//   const accept=(pid)=>{
//     console.log("accept ",pid)
//     // console.log("data - "+pid)
//     // AcceptPost(pid).then(x => {
//     //   MotherPendingPostWithCount().then(data => {
//     //     setPostList(data);
//     //   }).catch(err => {
//     //     console.log(err.error)
//     //   })
//     // }).catch(err => {
//     //   console.log(err.error)
//     // })
//     // return true
//   }
//   const reject=(pid)=>{
//     console.log("reject ",pid)
//     // console.log("data - "+pid)
//     // RejectPost(pid).then(x => {
//     //   MotherPendingPostWithCount().then(data => {
//     //     setPostList(data);
//     //   }).catch(err => {
//     //     console.log(err.error)
//     //   })
//     // }).catch(err => {
//     //   console.log(err.error)
//     // })
//     // return true
//   }
//   const mothersList2=PostList;
//   // const mothersList = [
//   //   {
//   //     id:1,
//   //     name: 'Maduni Tharukshi',
//   //     topic: "How to feed your newborn?",
//   //     available: 15,
//   //   },
//   //   {
//   //     id:2,
//   //     name: 'Lulakshi Naduni',
//   //     topic: "What are the symptoms of baby fever?",
//   //     available: 30,
//   //   },
//   //   {
//   //     id:3,
//   //     name: 'Akila ',
//   //     topic: "Check your baby's hearing",
//   //     available: 35,
//   //   },
//   //   {
//   //     id:4,
//   //     name: 'Yasas',
//   //     topic: "What are the symptoms of baby fever?",
//   //     available: 0,
//   //   },
//   //   {
//   //     id:5,
//   //     name: 'Prasanna',
//   //     topic: "How to take care your toddler?",
//   //     available: 5,
//   //   },
//   // ];
//   return (
//       <div>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Rejecting will permanently remove this from the system.</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             This cannot be undone!
//           </DialogContentText>
//
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={reject}>Reject</Button>
//         </DialogActions>
//       </Dialog>
//     <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
//       <CardHeader>
//         <Title> Community Post Requests </Title>
//
//       </CardHeader>
//
//       <Box overflow="auto">
//         <ProductTable>
//           <TableHead>
//             <TableRow>
//               <TableCell sx={{ px: 3 }} colSpan={3}>
//                 Name
//               </TableCell>
//               <TableCell sx={{ px: 0 }} colSpan={3}>
//                 Topic
//               </TableCell>
//               <TableCell sx={{ px: 0 }} style={{ textAlign: "center" , paddingRight: "8px"}} colSpan={1}>
//                 Action
//               </TableCell>
//             </TableRow>
//           </TableHead>
//
//           <TableBody>
//             {mothersList.map((postItem, index) => (
//               <TableRow key={index} hover>
//                 <TableCell colSpan={3} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
//                   <Box display="flex" alignItems="center">
//                     <Icon className="icon" style={{ color: bgPrimary}} >{"pregnant_woman"}</Icon>
//                     <Paragraph sx={{ m: 0, ml: 4 }}>{postItem.name}</Paragraph>
//                   </Box>
//                 </TableCell>
//
//                 <TableCell align="left" colSpan={3} sx={{ px: 0, textTransform: 'capitalize' }}>
//                   { postItem.topic }
//                 </TableCell>
//
//
//                 <TableCell sx={{ px: 0 }}  style={{ textAlign: "center"}} colSpan={1}>
//                   <IconButton onClick={()=>{accept(2)}}>
//                     <Icon color="primary" >check</Icon>
//                   </IconButton>
//                   <IconButton onClick={()=>{reject(1)}}>
//                     <Icon color="warning" >close</Icon>
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </ProductTable>
//       </Box>
//     </Card>
//       </div>
//   );
// };
//
//
//
// export default LatestCommunityPostRequestTable;
