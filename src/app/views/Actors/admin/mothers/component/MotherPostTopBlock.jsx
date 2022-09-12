
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
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";
import PendingRoundedIcon from "@mui/icons-material/PendingRounded";
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import CardHeader from "@mui/material/CardHeader";
import {useParams} from "react-router";
import {Fragment, useEffect, useState} from 'react';
import {
    BlockMother, getMotherListForAdmin,
    getRecentMotherPostByPostIdForAdmin, HidePost, ShowHidePost
} from "../../../../../services/Admin/Mother/admin_mother_service";


const MotherPostblockcard = () => {
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
        // console.log("-------------------")
        // console.log(MotherPosts)
        // console.log(MotherPosts.title)
    }, [MotherPosts]);
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
    const Title = styled('span')(() => ({
        fontSize: '1rem',
        fontWeight: '500',
        textTransform: 'capitalize',
    }));

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
    const HidePosts = () => {
        HidePost(id).then(x => {
            // console.log("Hide - "+id);
            getRecentMotherPostByPostIdForAdmin(id).then(data => {
                setMotherPosts(data.data[0])
            }).catch(err => {
                console.log(err.error)
            })

        }).catch(err => {
            console.log(err.error)
        })
    }
    const ShowPost = () => {
        ShowHidePost(id).then(x => {
            console.log("unHide - "+id);
            getRecentMotherPostByPostIdForAdmin(id).then(data => {
                setMotherPosts(data.data[0])
            }).catch(err => {
                console.log(err.error)
            })

        }).catch(err => {
            console.log(err.error)
        })
    }

    return (
        <Card sx={{ minWidth: 275,paddingBottom:0 ,minHeight:165,maxHeight:165 }}>
            <CardContent>
                <Title>
                    {MotherPosts.title}
                </Title>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {DateReturn(MotherPosts.Date)}
                </Typography>

                <Typography sx={{ mb: 1 , mt:1}} color="text.secondary">
                    Category - {MotherPosts.category}
                </Typography>
                <CardActions disableSpacing style={{paddingLeft:-3,maxHeight:30,marginLeft:-15}}>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon /> <span style={{fontSize:20}}>{MotherPosts.no_of_likes}</span>
                    </IconButton>
                    <IconButton aria-label="share">
                        <MarkunreadRoundedIcon style={{paddingRight:5,fontSize:30}} /> <span style={{fontSize:20}}>{MotherPosts.ReplyCount}</span>
                    </IconButton>

                    {MotherPosts.status==1 ?
                        <Button variant="outlined" color="warning" startIcon={<VisibilityOffRoundedIcon />} style={{marginLeft:10}} onClick={()=>{ShowPost()}}>
                            Show
                        </Button>
                        :
                        <Button variant="outlined" color="warning" startIcon={<VisibilityOffRoundedIcon />} style={{marginLeft:10}} onClick={()=>{HidePosts()}}>
                            Hide
                        </Button>
                    }
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default MotherPostblockcard;
