
import * as React from 'react';
import { Card, Grid, styled, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";

import { useParams } from "react-router";
import {
    BlockMother,
    getMotherListForAdmin,
    getTargetMotherListForAdmin, UnBlockMother
} from "../../../../../services/Admin/Mother/admin_mother_service";
import {Fragment, useEffect, useState,useRef} from 'react';

const MotherProfileTopcard = () => {

    const [MotherName, setMotherName] = useState("");
    const [Reg_Date, setReg_Date] = useState("");
    const [STATUS, setSTATUS] = useState(0);
    const [email, setemail] = useState("");
    const [DP, setDP] = useState("");
    const [Count, setCount] = useState(0);
    const [Reason, setReason] = useState(0);


    let { id } = useParams();
    let { count } = useParams();
    // console.log("count "+count)

        getTargetMotherListForAdmin(id).then(data => {
            const today = new Date(data.Data[0].Reg_Date);
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1; // Months start at 0!
            let dd = today.getDate();

            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;

            const formattedToday = dd + '/' + mm + '/' + yyyy;

            setReg_Date(formattedToday)

            setSTATUS(data.Data[0].STATUS)
            setDP(data.Data[0].DP)
            setemail(data.Data[0].email)
            setMotherName(data.Data[0].first_name)
            setReason(data.Data[0].Block_reason)
            setCount(count)
        }).catch(err => {
            console.log(err.error)
        })

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const valueRef = useRef('')
    const sendValue = () => {
        // console.log(valueRef.current.value)
        // console.log("Id : "+id)
        BlockMother(id,valueRef.current.value).then(data => {
            console.log("Succesfully blocked id-"+id+"  reason- "+valueRef.current.value)
            setSTATUS(1)
        }).catch(err => {
            console.log(err.error)
        })
        setOpen(false);
    }
    const handleBlockClickOpen = () => {
        // setId(uid);
        // console.log("Id : "+id)
        setOpen(true);
    };
    const handleUnBlockClickOpen= () => {
        UnBlockMother(id).then(data => {
            // console.log("Succesfully Unblocked id-"+uid)
            setSTATUS(0)
        }).catch(err => {
            console.log(err.error)
        })
    };
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Reason for this action</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Maybe she did it because of pregnancy stress...
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="reason"
                        label="Reason for Block"
                        type="text"
                        fullWidth
                        variant="standard"
                        inputRef={valueRef}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={sendValue}>Block</Button>
                </DialogActions>
            </Dialog>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <div style={{height:"100%" ,display:"flex" , justifyContent:"center",alignItems:"center"}}>
                            <img src={DP} style={{width:125, height:125,borderRadius:'50%',margin:"auto"}}/>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography gutterBottom variant="h6" component="div">
                            {MotherName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {Reg_Date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Posts : {Count}
                        </Typography>
                        <Grid item xs={12}>
                            <Grid item xs={12}>
                                {STATUS ?
                                    <Typography variant="body2" color="text.secondary">
                                        Reason : {Reason}
                                    </Typography>
                                    :
                                    <span></span>
                                }
                            </Grid>
                            <Grid item xs={4} style={{marginTop:10}}>
                                <Typography variant="body2" color="text.secondary">
                                    {STATUS ?
                                        <Button variant="contained" color="warning" size="small" style={{height:25 , fontSize:'1em'}} onClick={handleUnBlockClickOpen}>
                                            Unblock
                                        </Button>
                                        :
                                        <Button variant="contained" color="warning" size="small" style={{height:25 , fontSize:'1em'}} onClick={handleBlockClickOpen}>
                                            Block
                                        </Button>
                                    }
                                </Typography>
                            </Grid>

                        </Grid>
                        {/*<Typography variant="body2" color="text.secondary">*/}
                        {/*    {STATUS ?*/}
                        {/*        <Button variant="contained" color="warning" size="small" style={{height:25 , fontSize:'1em'}}>*/}
                        {/*            Block*/}
                        {/*        </Button>*/}
                        {/*    :*/}
                        {/*        <Button variant="contained" color="warning" size="small" style={{height:25 , fontSize:'1em'}}>*/}
                        {/*            Unblock*/}
                        {/*        </Button>*/}
                        {/*    }*/}
                        {/*</Typography>*/}



                    </Grid>

                </Grid>
            </Card>
        </div>
    );
};

export default MotherProfileTopcard;
