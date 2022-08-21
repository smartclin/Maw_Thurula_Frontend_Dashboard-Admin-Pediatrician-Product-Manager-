
import * as React from 'react';
import { Card, Grid, styled, useTheme } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useParams } from "react-router";
import {
    getMotherListForAdmin,
    getTargetMotherListForAdmin
} from "../../../../../services/Admin/Mother/admin_mother_service";
import {Fragment, useEffect, useState} from 'react';

const MotherProfileTopcard = () => {

    const [MotherName, setMotherName] = useState("");
    const [Reg_Date, setReg_Date] = useState("");
    const [STATUS, setSTATUS] = useState(0);
    const [email, setemail] = useState("");
    const [DP, setDP] = useState("");
    const [Count, setCount] = useState(0);


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
            setCount(count)
        }).catch(err => {
            console.log(err.error)
        })


    return (
        <Card sx={{ px: 3, py: 2, mb: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div>
                        <img src={DP} style={{width:125, height:125,borderRadius:'50%',display: "block"}}/>
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
                    <Typography variant="body2" color="text.secondary">
                        {STATUS ?
                            <Button variant="contained" color="warning" size="small" style={{height:25 , fontSize:'1em'}}>
                                Block
                            </Button>
                        :
                            <Button variant="contained" color="warning" size="small" style={{height:25 , fontSize:'1em'}}>
                                Unblock
                            </Button>
                        }
                    </Typography>



                </Grid>

            </Grid>
        </Card>
    );
};

export default MotherProfileTopcard;
