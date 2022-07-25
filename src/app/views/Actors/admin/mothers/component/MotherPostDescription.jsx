
import * as React from 'react';
import {  Grid, styled, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';

const MotherPostDescription = () => {
    const Title = styled('span')(() => ({
        fontSize: '1rem',
        fontWeight: '500',
        marginTop:-10
    }));
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    return (
        <Card sx={{ minWidth: 275,paddingBottom:0 , minHeight:165,maxHeight:165 }}>
            <CardContent>
                <Title>
                    Special Notes
                    <IconButton aria-label="add to favorites" style={{ padding:0, marginLeft:2,marginBottom:7}}>
                        <ModeEditRoundedIcon style={{fontSize:20}}/>
                    </IconButton>
                </Title>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000
                    species
                </Typography>

            </CardContent>
        </Card>
    );
};

export default MotherPostDescription;
