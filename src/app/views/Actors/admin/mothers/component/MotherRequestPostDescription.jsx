
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
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {SinglePostDetails} from "../../../../../services/Admin/Mother/admin_mother_service";

const MotherRequestPostDescription = () => {
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
    let { uid } = useParams();
    let { pid } = useParams();
    const [MotherPosts, setMotherPosts] = useState([]);
    useEffect(() => {
        SinglePostDetails(pid).then(data => {
            setMotherPosts(data.data[0])
            // console.log("------------------")
            // console.log(data.data[0])
        }).catch(err => {
            console.log(err.error)
        })
    }, []);

    return (
        <Card sx={{ minWidth: 275,paddingBottom:0 , minHeight:165, }}>
            <CardContent>
                <Title>
                    Description
                </Title>
                <Typography sx={{ fontSize: 14 , marginTop:1 }} color="text.secondary" gutterBottom>
                    {/*Every parent wants to do everything they can to help their child grow healthy and strong. But it doesn’t always go smoothly, especially when you’re just starting out.*/}
                    {MotherPosts.post_content}
                </Typography>

            </CardContent>
        </Card>
    );
};

export default MotherRequestPostDescription;
