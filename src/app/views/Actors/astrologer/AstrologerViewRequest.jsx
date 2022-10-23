

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

const AstrologerViewRequest = () =>  {
    const [Msg,setMsg]=useState([]);
    const [Req, setReq] = useState([]);
    const [Letters, setLetters] = useState([]);

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
        console.log(Msg)
        console.log(Letters)
        console.log(request_id)
        //load total income
        insert_response(request_id,Msg,Letters).then(data => {
            console.log(data);
            navigate({pathname:'/al/view_request_with_response/'+request_id})
        })
    }

    let requestTittle={
        color:'#9e9e9e',
        fontSize: '25px',
        paddingLeft:'20px',
        fontWeight:'bold',
    };

    let responseInput={
        width: '50%',

    };

    let sendButton={
        marginLeft: '7px'
    }

    let mainDiv={
        margin:' 30px 400px 0px 300px'
    };

  //setCardData(CardDataDefault);
    return (
        <div style={mainDiv}>
            <div style={requestTittle}>Request message</div>
           <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
                    <ListItemText primary="Birth Date" secondary={Req.birth_date} />
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
                           onChange={(e) => setLetters(e.target.value)}/>

                <TextField style={responseInput} id="outlined-basic" label="Type response here ..." variant="outlined"
                           value={Msg}
                           onChange={(e) => setMsg(e.target.value)}/>

            </Box>
            <Button  style ={sendButton} variant="contained" onClick={FilterData}>Send</Button>
        </div>
    );



}





export default AstrologerViewRequest;
