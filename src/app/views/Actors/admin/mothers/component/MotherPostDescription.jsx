
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
import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getRecentMotherPostByPostIdForAdmin} from "../../../../../services/Admin/Mother/admin_mother_service";

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
    let { id } = useParams();
    const [MotherPosts, setMotherPosts] = useState([]);
    useEffect(() => {
        getRecentMotherPostByPostIdForAdmin(id).then(data => {
            setMotherPosts(data.data[0])
        }).catch(err => {
            console.log(err.error)
        })
    }, []);
    useEffect(async () => {
        console.log("-------------------")
        console.log(MotherPosts)
        console.log(MotherPosts.post_content)
    }, [MotherPosts]);
    return (
        <Card sx={{ minWidth: 275,paddingBottom:0 , minHeight:165, }}>
            <CardContent>
                <Title>
                    Special Notes
                    <IconButton aria-label="add to favorites" style={{ padding:0, marginLeft:2,marginBottom:7}}>
                        <ModeEditRoundedIcon style={{fontSize:20}}/>
                    </IconButton>
                </Title>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {MotherPosts.post_content}
                </Typography>

            </CardContent>
        </Card>
    );
};

export default MotherPostDescription;
