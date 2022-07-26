

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

const NameProviderViewRequestWithRequest = ( ) =>  {


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
                    <ListItemText primary="Email" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <CalendarMonthIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Birth Date" secondary="2020/10/02" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <AccessTimeIcon  />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Birth Time" secondary="10:14:23" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <MessageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Message" secondary="Here I am include my babies birthday and time.
I would like to get proper letters for my baby name
" />
                </ListItem>
            </List>
            <div style={requestTittle}>Response message</div>
            <List  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <MessageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Message" secondary="Here I am include baby names for your baby with a meaning.

            " />
                </ListItem>
            </List>
        </div>
    );



}





export default NameProviderViewRequestWithRequest;
