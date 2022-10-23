

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

import {useParams} from "react-router";
import {load_one_req} from "../../../services/NameProvider/np_service";
import {useEffect, useState} from "react";

const NameProviderViewRequest = ( ) =>  {
    const [Req, setReq] = useState([]);

    let { request_id } = useParams();

    useEffect(() => {
        load_one_req(request_id).then(data => {
            setReq(data.req[0])
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
                            <MessageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Message" secondary={Req.message} />
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
                <TextField style={responseInput} id="outlined-basic" label="Type response here ..." variant="outlined" />

            </Box>
            <Button  style ={sendButton} variant="contained">Send</Button>
        </div>
    );



}





export default NameProviderViewRequest;
