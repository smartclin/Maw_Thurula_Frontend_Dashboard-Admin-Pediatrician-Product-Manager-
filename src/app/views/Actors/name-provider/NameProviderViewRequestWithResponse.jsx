
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
                    <ListItemText primary="Email" secondary={Req.email} />
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
            <div style={requestTittle}>Response message</div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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
    );



}





export default NameProviderViewRequestWithResponse;
