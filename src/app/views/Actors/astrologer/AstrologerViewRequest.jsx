

import Button from '@mui/material/Button';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import MailIcon from '@mui/icons-material/Mail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MessageIcon from '@mui/icons-material/Message';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import { useParams } from "react-router";

import {insert_response, load_one_req} from "../../../services/Astrologer/al_service";
import {useEffect, useState} from "react";
import {load_pending_income, load_tot_income} from "../../../services/Admin/Astrologer/admin_astrologer_report_service";
import {useNavigate} from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

const AstrologerViewRequest = () =>  {
    const [Msg,setMsg]=useState([]);
    const [Req, setReq] = useState([]);
    const [Letters, setLetters] = useState([]);
    const [open, setOpen] = React.useState(false);

    const {request_id} = useParams();
    //setReq_id(request_id);

   useEffect(() => {
        load_one_req(request_id).then(data => {
            setReq(data.req[0])
          // console.log(Req.req)
        }).catch(err => {
            console.log(err.error)
        })
    }, []);
    const navigate = useNavigate();

    function FilterData(event) {
        //  prevent page refresh
        event.preventDefault();
        // console.log(Msg)
        //console.log(Letters)
       // console.log(request_id)

        //close pop up
      setOpen(false);

        //load total income
        insert_response(request_id,Msg,Letters).then(data => {
           // console.log(data);
            navigate({pathname:'/al/view_request_with_response/'+request_id})
        })
    }

    const BackPage = () => {
        setOpen(false);

    };

    const OpenPopUp = () => {
        setOpen(true);

    };

    let requestTittle={
        color:'#9e9e9e',
        fontSize: '20px',
        marginTop:'100px',
       //paddingLeft:'10px',
        fontWeight:'bold',
        //backgroundColor:'yellow'
    };

    let responseInput={
        width: '50%',

    };

    let sendButton={
        marginLeft: '7px'
    }

    let mainDiv={
        margin:' 30px 300px 0px 280px',
        display:'flex',
        flexDirection:'raw',
        justifyContent:'space-between'
    };

  //setCardData(CardDataDefault);
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
        <div style={mainDiv}>

            <Dialog open={open} /*onClose={handleClose}*/>
                <DialogTitle>Are you sure want to send this response?</DialogTitle>

                <DialogActions>
                    <Button onClick={FilterData}>Yes</Button>
                    <Button onClick={BackPage}>No</Button>
                </DialogActions>
            </Dialog>


           <div>
               <div style={requestTittle}>Request message</div>
               <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',borderRadius:'10px' ,marginTop:'10px' }}>
                   <ListItem>
                       <ListItemAvatar>
                           <Avatar>
                               <MailIcon />
                           </Avatar>
                       </ListItemAvatar>
                       <ListItemText primary="Email" secondary={Req.email}/>
                   </ListItem>
                   <ListItem>
                       <ListItemAvatar>
                           <Avatar>
                               <CalendarMonthIcon />
                           </Avatar>
                       </ListItemAvatar>
                       <ListItemText primary="Birth Date" secondary={DateReturn(Req.birth_date)} />
                   </ListItem>
                   <ListItem>
                       <ListItemAvatar>
                           <Avatar>
                               <AccessTimeIcon  />
                           </Avatar>
                       </ListItemAvatar>
                       <ListItemText primary="Birth Time" secondary={Req.birth_time} />
                   </ListItem>
                   <ListItem>
                       <ListItemAvatar>
                           <Avatar>
                               <MessageIcon />
                           </Avatar>
                       </ListItemAvatar>
                       <ListItemText primary="Message" secondary={Req.message}/>
                   </ListItem>
               </List>
           </div>
            <div>
                <div style={requestTittle}>Response message</div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField style={responseInput} id="outlined-basic" label="Type letters here ..." variant="outlined"
                               value={Letters}
                               onChange={(e) => setLetters(e.target.value)}
                               multiline={true}
                               rows={1}
                               required={true}/>

                    <TextField style={responseInput} id="outlined-basic" label="Type response here ..." variant="outlined"
                               value={Msg}
                               onChange={(e) => setMsg(e.target.value)}
                               multiline={true}
                               rows={7}
                               required={true}/>

                </Box>
                <Button  style ={sendButton} variant="contained" onClick={OpenPopUp}>Send</Button>
            </div>
        </div>
    );



}





export default AstrologerViewRequest;
