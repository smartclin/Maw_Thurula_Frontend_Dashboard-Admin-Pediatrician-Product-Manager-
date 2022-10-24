import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Link } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {IconButton} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";
import {Fragment, useEffect, useState} from 'react';
import {getMostLiked} from "../../../../services/Pediatrician/pt_service";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
);
let chartDiv={
    display:'flex',
    flexDirection:'raw',
    flexWrap:" nowrap"
};

export default function BasicCard() {
    const [ArticlePosts, setArticlePosts] = useState([]);
    useEffect(() => {
        getMostLiked(1).then(data => {
            setArticlePosts(data.article)
        }).catch(err => {
            console.log(err.error)
        })
    }, []);
    useEffect(async () => {
        console.log("gghh")
        console.log(ArticlePosts)
    }, [ArticlePosts]);
  return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
            {
                ArticlePosts?ArticlePosts.map((item,index)=>{
                    return(
                        <div>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Most Liked article!
                            </Typography>
                            <Typography variant="h5" component="div" sx={{ fontSize: 20 }}>
                                {item.title}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Category-{item.category_name}
                            </Typography>
                            {/*<Typography variant="body2">*/}
                            {/*    well meaning and kindly.*/}
                            {/*    <br />*/}
                            {/*    {'"a benevolent smile"'}*/}
                            {/*</Typography>*/}
                            <div>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon /> <span style={{fontSize:20}}>{item.no_of_likes}</span>
                                </IconButton>
                                {/*<IconButton aria-label="share">*/}
                                {/*    <MarkunreadRoundedIcon style={{paddingRight:5,fontSize:30}} /> <span style={{fontSize:20}}></span>*/}
                                {/*</IconButton>*/}
                                <Button size="small">
                                    <Link className="link" to="/pt/PediatricianEditProfile">View full article</Link>
                                </Button>
                            </div>
                        </div>
                    )
                }):console.log("yes")
            }
        </CardContent>
        <CardActions>


        </CardActions>
      </Card>
  );
}
