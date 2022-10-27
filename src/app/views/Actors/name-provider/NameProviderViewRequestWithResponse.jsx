
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
import WcIcon from '@mui/icons-material/Wc';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {useParams} from "react-router";
import {load_one_req} from "../../../services/NameProvider/np_service";
import {useEffect, useState} from "react";
import {load_one_res} from "../../../services/NameProvider/np_service";

const NameProviderViewRequestWithResponse = ( ) =>  {
    const [Req, setReq] = useState([]);
    const [Res, setRes] = useState([]);

    let { request_id } = useParams();

    useEffect(() => {
        load_one_req(request_id).then(data => {
            setReq(data.req[0])
        }).catch(err => {
            console.log(err.error)
        })
    }, []);

    useEffect(() => {
        load_one_res(request_id).then(data => {
            setRes(data.req[0])
        }).catch(err => {
            console.log(err.error)
        })
    }, []);


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
       // backgroundColor:'red',
        margin:' 30px 300px 0px 280px',
        display:'flex',
        flexDirection:'raw',
        justifyContent:'space-between'
    };
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
           <div>
               <div style={requestTittle}>Request message</div>
               <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',borderRadius:'10px' ,marginTop:'10px',paddingRight:'130px' }}>
                   <ListItem>
                       <ListItemAvatar>
                           <Avatar>
                               <MailIcon />
                           </Avatar>
                       </ListItemAvatar>
                       <ListItemText primary="Email" secondary={Req.email} />
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
                       <ListItemText primary="Letters" secondary={Req.letters} />
                   </ListItem>
                   <ListItem>
                       <ListItemAvatar>
                           <Avatar>
                               <WcIcon />
                           </Avatar>
                       </ListItemAvatar>
                       <ListItemText primary="Gender" secondary={Req.gender} />
                   </ListItem>
                   <ListItem>
                       <ListItemAvatar>
                           <Avatar>
                               <MessageIcon />
                           </Avatar>
                       </ListItemAvatar>
                       <ListItemText primary="Message" secondary={Req.message} />
                   </ListItem>
               </List>
           </div>
          <div>
              <div style={requestTittle}>Response message</div>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',borderRadius:'10px' ,marginTop:'10px' ,paddingRight:'150px'}}>
                  <ListItem>
                      <ListItemAvatar>
                          <Avatar>
                              <DriveFileRenameOutlineIcon/>
                          </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Names"  secondary={Res.names} />
                  </ListItem>

                  <ListItem>
                      <ListItemAvatar>
                          <Avatar>
                              <MessageIcon />
                          </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Message"  secondary={Res.message} />
                  </ListItem>
              </List>
          </div>
        </div>
    );



}





export default NameProviderViewRequestWithResponse;
