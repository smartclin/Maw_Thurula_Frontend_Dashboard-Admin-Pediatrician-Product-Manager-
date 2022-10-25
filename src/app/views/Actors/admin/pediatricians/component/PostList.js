//
import { Box, Grid, Icon, styled, Tooltip } from '@mui/material';
import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PendingRoundedIcon from '@mui/icons-material/PendingRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MarkunreadRoundedIcon from '@mui/icons-material/MarkunreadRounded';
import {useNavigate} from "react-router-dom";
import { useParams } from "react-router";
import {
    getRecentMotherPostForAdmin
} from "../../../../../services/Admin/Mother/admin_mother_service";
import {Fragment, useEffect, useState} from 'react';
import {getPostList,getCommentCount} from "../../../../../services/Pediatrician/pt_service";
import mothersList from "../../mothers/MothersList";
import PediatricianSingleArticle from "./PediatriciansSingleArticle";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

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

const Posts1 = () => {

    // const navigate = useNavigate();
    // const handleOnClick = (id) => navigate('/admin/mother_details/'+id, {replace: false});

    // let { id } = useParams();
    const [ArticlePosts, setArticlePosts] = useState([]);
    const [ArticleComments, setArticleComments] = useState([]);
    //
    // useEffect(() => {
    //     getCommentCount().then(data => {
    //         setArticleComments(data.count)
    //     }).catch(err => {
    //         console.log(err.error)
    //     })
    // }, []);
    // useEffect(async () => {
    //     console.log("gghh")
    //     console.log(ArticleComments)
    // }, [ArticleComments]);


    const cardList = [
        { category: 'Inconsolable crying', date: "2022/07/02", img: 'pregnant_woman',content:"Parents everywhere can testify to the fact that becoming a parent can be equally thrilling and terrifying—a combination of excitement and joy on the one hand and fear and frustration on the other. ",title:" Listening to Others",likes:12,comments:23 },
        { category: 'Vaccine safety', date: "2022/07/03", img: 'pregnant_woman',content:"Positioning. Latch. Pain. Mastitis. Low milk supply. You name it, we’ve heard about it. The key to survival is knowing that each and every issue is manageable! While making milk is “natural,”",title:"Getting on a Schedule",likes:12,comments:23 },
        { category: 'Weight gain', date: "2022/07/05", img: 'pregnant_woman',content:"Sleepless nights are part of parenthood, but you’ll be surprised how quickly you adjust. It’s true that babies sleep a lot, Many health experts including the American Academy of Pediatrics",title:"",likes:12,comments:23 },
        { category: 'Making milestones', date: "2022/07/01", img: 'pregnant_woman',content:"During the first years of your child’s life, you will likely encounter bouts of sickness including colds and fevers . It’s hard to know when to call the doctor.",title:"Being Perfect",likes:12,comments:23 },
        { category: 'Vaccine safety', date: "2022/07/02", img: 'pregnant_woman',content:"Positioning. Latch. Pain. Mastitis. Low milk supply. You name it, we’ve heard about it. The key to survival is knowing that each and every issue is manageable!",title:"Losing the baby weight",likes:12,comments:23 },
        { category: 'Inconsolable crying', date: "2022/08/02", img: 'pregnant_woman',content:"Positioning. Latch. Pain. Mastitis. Low milk supply. You name it, we’ve heard about it. The key to survival is knowing that each and every issue is manageable! ",title:"Saying No",likes:12,comments:23 },
    ];
    useEffect(() => {
        getPostList(1).then(data => {
            setArticlePosts(data.article)
        }).catch(err => {
            console.log(err.error)
        })
    }, []);
    useEffect(async () => {
        console.log("ff")
        console.log(ArticlePosts)

    }, [ArticlePosts]);

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid container spacing={3} sx={{ mb: '24px' }}>
            {/*<div className="ms-5">*/}
            {/*    <Autocomplete*/}
            {/*        disablePortal*/}
            {/*        options={top100Films}*/}
            {/*        id="combo-box-demo"*/}
            {/*        sx={{ width: 300 }}*/}
            {/*        renderInput={(params) => <TextField {...params} label="Search with Category" />}*/}
            {/*    />*/}
            {/*</div>*/}
            {(ArticlePosts).map((item, index) => (
                <div className="posts">
                    <PediatricianSingleArticle posts= {item}/>
                </div>
            ))}
        </Grid>
    );
};

export default Posts1;
