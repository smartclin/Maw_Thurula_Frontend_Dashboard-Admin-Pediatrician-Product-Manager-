
import * as React from 'react';
import { Card, Grid, styled, useTheme } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const MotherProfileTopcard = () => {
    return (
        <Card sx={{ px: 3, py: 2, mb: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <div>
                        <img src={"https://avatars0.githubusercontent.com/u/7895451?s=460&v=4"} style={{width:125, height:125,borderRadius:'50%',display: "block"}}/>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <Typography gutterBottom variant="h6" component="div">
                        Akila Anjnana
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        akilaanjanadissanayaka@gmail.com
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        07/25/2022
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Posts : 5
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Button variant="contained" color="warning" size="small" style={{height:25 , fontSize:'1em'}}>
                            Block
                        </Button>
                    </Typography>



                </Grid>

            </Grid>
        </Card>
    );
};

export default MotherProfileTopcard;
