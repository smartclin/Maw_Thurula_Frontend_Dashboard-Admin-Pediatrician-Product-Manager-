import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
    Button,
    Checkbox, Fab,
    FormControlLabel,
    Grid,
    Icon,
    Radio,
    RadioGroup,
    styled,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import {Image} from "react-bootstrap";
import AddRemoveFormField from "../../../astrologer/AddRemoveFormfield";
import TextField from "@mui/material/TextField";
import {TextValidator} from "react-material-ui-form-validator";
import {useNavigate} from "react-router-dom";






const ContactUs = () => {
    const [state, setState] = useState({ date: new Date() });
    const form = useRef();
    const navigate = useNavigate();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_531lcof', 'template_44olkws', form.current, 'ukmiDflWZglXksW5H')
            .then((result) => {
                console.log(result.text);
                navigate(-1);
            }, (error) => {
                console.log(error.text);
            });

    };

    let imgDiv={
        width: "100%",
        marginBottom: "45px",
        display:"flex",
        justifyContent:"space-between",
        fontSize:45

    };
    let labelDiv={
        color:"#d82edb",
        fontWeight:"600",

    };
    let hideFile={

    };
    let iconDiv={
        color:"#82b9d1",
        cursor:"pointer"
    };
    let addRemove={
        marginBottom:"20px"
    };
    const TextFieldstyle = {
        width: "100%",
        marginBottom: "16px",
    };




    return (
        <div style={{display:"flex",justifyContent:"center"}}>
        <div  style={{width:"60%"}}>
            {/*<form ref={form} onSubmit={sendEmail}>*/}
            {/*    <label>Name</label>*/}
            {/*    <input type="text" name="user_name" />*/}
            {/*    <label>Email</label>*/}
            {/*    <input type="email" name="user_email" />*/}
            {/*    <label>Message</label>*/}
            {/*    <textarea name="message" />*/}
            {/*    <input type="submit" value="Send" />*/}
            {/*</form>*/}
            <form ref={form} onSubmit={sendEmail}>
                <Grid container spacing={6}  >
                    <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2, width:"100%" }}>
                        <div style={imgDiv}>

                            <small style={labelDiv} >Contact us</small>

                        </div>

                        <div style={{width:"100%"}}>
                        <TextField
                            type="text"
                            name="user_name"
                            label="Full Name"
                            style={TextFieldstyle}
                        />
                            </div>
                        <div>
                            <TextField
                                type="text"
                                name="mobile"
                                label="Mobile Nubmer"
                                style={TextFieldstyle}
                            />
                        </div>

                        <div>
                        <TextField
                            type="email"
                            name="user_email"
                            label="Email"
                            style={TextFieldstyle}

                        />
                            </div>
                                <div>
                        <TextField
                            type="text"
                            name="message"
                            label="How can we help?"
                            style={TextFieldstyle}


                        />
                                    </div>
                    </Grid>
                </Grid>

                <Button color="primary" variant="contained" type="submit" >
                    <Icon>send</Icon>
                    <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
                </Button>
            </form>
        </div>
        </div>
    );
};

export default ContactUs;
