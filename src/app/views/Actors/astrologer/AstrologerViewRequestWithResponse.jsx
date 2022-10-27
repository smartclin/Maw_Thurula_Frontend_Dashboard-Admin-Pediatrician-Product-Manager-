

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
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import { useParams } from "react-router";

import {load_one_req, load_one_res} from "../../../services/Astrologer/al_service";
import {useEffect, useState} from "react";

const AstrologerViewRequestWithResponse = () =>  {
    const [Res, setRes]=useState([]);
    const [Req, setReq] = useState([]);

    let { request_id } = useParams();

    //load request data
    useEffect(() => {
        load_one_req(request_id).then(data => {

            setReq(data.req[0])
            // console.log(Req.req)
        }).catch(err => {
            console.log(err.error)
        })
    }, []);

    //load response
    useEffect(() => {
        load_one_res(request_id).then(data => {

            setRes(data.req[0])
            // console.log(Req.req)
        }).catch(err => {
            console.log(err.error)
        })
    }, []);
    //

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





    let requestTittle={
        color:'#9e9e9e',
        fontSize: '20px',
        marginTop:'100px',
        //paddingLeft:'10px',
        fontWeight:'bold',
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

    return (
        <div style={mainDiv}>
            <div><div style={requestTittle}>Request message</div>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',borderRadius:'10px' ,marginTop:'10px',paddingRight:'50px' }}>
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
               <List  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' ,borderRadius:'10px' ,marginTop:'10px',paddingRight:'150px'}} >
                   <ListItem>
                       <ListItemAvatar>
                           <Avatar>
                               <HdrAutoIcon/>
                           </Avatar>
                       </ListItemAvatar>
                       <ListItemText primary="Letters"  secondary={Res.letters} />
                   </ListItem>
                   <ListItem>
                       <ListItemAvatar>
                           <Avatar>
                               <MessageIcon />
                           </Avatar>
                       </ListItemAvatar>
                       <ListItemText primary="Message" secondary={Res.message} />
                   </ListItem>

               </List>
           </div>
        </div>
    );



}





export default AstrologerViewRequestWithResponse;
