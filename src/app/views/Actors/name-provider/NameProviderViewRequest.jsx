

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
import {useNavigate} from "react-router-dom";
import {insert_response} from "../../../services/NameProvider/np_service";
import WcIcon from "@mui/icons-material/Wc";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import {createTheme} from "@mui/material/styles";
//import {MuiThemeProvider} from "@material-ui/core";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

const NameProviderViewRequest = ( ) =>  {
    const [Req, setReq] = useState([]);
    const [Msg,setMsg]=useState([]);
    const [Names, setNames] = useState([]);
    const [open, setOpen] = React.useState(false);

    let { request_id } = useParams();

    useEffect(() => {
        load_one_req(request_id).then(data => {
            setReq(data.req[0])
        }).catch(err => {
            console.log(err.error)
        })
    }, []);
    const navigate = useNavigate();

    function FilterData(event) {
        //  prevent page refresh
        event.preventDefault();
        //console.log(Msg)
       // console.log(Names)
        //console.log(request_id)

        setOpen(false);
        //insert data into np response table
        insert_response(request_id,Msg,Names).then(data => {
            console.log(data);
            navigate({pathname:'/np/view_request_with_response/'+request_id})
        })
    }
    //go to back when pop up ->click no
    const BackPage = () => {
        setOpen(false);

    };

    //open pop up
    const OpenPopUp = () => {
        setOpen(true);

    };

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
       // backgroundColor:'yellow',
        margin:' 30px 300px 0px 280px',
        display:'flex',
        flexDirection:'raw',
        justifyContent:'space-between'

    };

    //date formating
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

    //change star color
    const formLabelsTheme = createTheme({
        overrides: {
            MuiFormLabel: {
                asterisk: {
                    color: "#db3131",
                    "&$error": {
                        color: "#db3131"
                    }
                }
            }
        }
    });


    return (
        <div style={mainDiv}>
            <Dialog open={open} /*onClose={handleClose}*/>
                <DialogTitle>Are you sure want to send this response?</DialogTitle>

                <DialogActions>
                    <Button onClick={FilterData}>Yes</Button>
                    <Button onClick={BackPage}>No</Button>
                </DialogActions>
            </Dialog>

            <div><div style={requestTittle}>Request message</div>
                <List sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper' ,borderRadius:'10px' ,marginTop:'10px'}}>
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
                </List></div>
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


                        <TextField style={responseInput} id="outlined-basic" label="Type names for baby" variant="outlined"
                                   value={Names}
                                   onChange={(e) => setNames(e.target.value)}
                                   multiline={true}
                                   required={true}
                                   rows={3}
                                   />

                        <TextField style={responseInput} id="outlined-basic" label="Type response here ..." variant="outlined"
                                   value={Msg}
                                   onChange={(e) => setMsg(e.target.value)}
                                   multiline={true}
                                   required={true}
                                   rows={9}

                        />




                </Box>

                <Button  style ={sendButton} variant="contained" onClick={OpenPopUp}>Send</Button>

            </div>

        </div>
    );



}





export default NameProviderViewRequest;
