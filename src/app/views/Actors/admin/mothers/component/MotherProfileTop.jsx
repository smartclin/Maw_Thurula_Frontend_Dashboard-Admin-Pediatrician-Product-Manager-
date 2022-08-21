
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

    let Reg_Date=""
    let STATUS=0
    let DP=""
    let first_name=""
    let email=""

    let { id } = useParams();
    // console.log("url "+id)


        getTargetMotherListForAdmin().then(data => {
            first_name=JSON.stringify(data.Data[0].first_name)
            Reg_Date=JSON.stringify(data.Data[0].Reg_Date)
            STATUS=JSON.stringify(data.Data[0].STATUS)
            DP=JSON.stringify(data.Data[0].DP)
            email=JSON.stringify(data.Data[0].DP)
            console.log("name "+first_name)
        }).catch(err => {
            console.log(err.error)
        })


    return (
        <Card sx={{ px: 3, py: 2, mb: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div>
                        <img src={"https://i.postimg.cc/q7jS5mTj/12.jpg"} style={{width:125, height:125,borderRadius:'50%',display: "block"}}/>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <Typography gutterBottom variant="h6" component="div">
                        {first_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {Reg_Date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Posts : 6
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Button variant="contained" color="warning" size="small" style={{height:25 , fontSize:'1em'}}>
                            Block-{STATUS}
                        </Button>
                    </Typography>



                </Grid>

            </Grid>
        </Card>
    );
};

export default MotherProfileTopcard;
