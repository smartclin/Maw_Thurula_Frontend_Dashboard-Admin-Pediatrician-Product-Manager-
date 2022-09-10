
import {Card, Grid, styled, useTheme, IconButton, Button, Icon} from '@mui/material';
import CommentView from "./CommentView";
import {Link, useNavigate} from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../../shared/pediatrician/CommonStyles.css"
import ShareIcon from "@mui/icons-material/Share";
import Analytics from "../../../Pediatrician/shared/PediatricianVIewArticleComments";
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";
import {Fragment, useEffect, useState} from 'react';
// import * as React from "@types/react";


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

const PediatricianSingleArticle = (props) => {
    const navigate = useNavigate();
    const handleOnClick = (id) => navigate('/admin/mother_details/'+id, {replace: false});

    const { palette } = useTheme();
    console.log("props")
    console.log(props)

    return (
        <div className="post" onClick={()=>{handleOnClick()}}>
            <img
                className="postImg"
                src={props.posts.image_1}
                alt="image goes here"
            />
            <div className="postInfo">

                <div className="postCats">
                       <span className="postCat">
                        {/*<Link className="link" to="/posts?cat=Music">*/}
                          Category -
                        {/*</Link>*/}
                        </span>
          <span className="postCat">
            {/*<Link className="link" to="/posts?cat=Music">*/}
              {props.posts.category_name}

            {/*</Link>*/}
          </span>
                </div>
                <span className="postTitle">
          <Link to="/pt/PediatricianViewFullArticles" className="link" >
            {props.posts.title}
          </Link>
        </span>
                <hr />
                <span className="postDate">{DateReturn(props.posts.date)}</span>
            </div>
            <p className="postDesc">
                Most newborns need eight to 12 feedings a day — about one feeding every two to three hours.
                Look for early signs of readiness to feed. Signs include
                moving the hands to the mouth, sucking on fists and
                fingers, and lip smacking. Fussing and crying are
                later cues. The sooner you begin each feeding,
                the less likely you'll need to soothe a frantic baby.
            </p>
            <div>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon /> <span style={{fontSize:20}}>{props.posts.no_of_likes}</span>
                </IconButton>
                <IconButton aria-label="share">
                    <MarkunreadRoundedIcon style={{paddingRight:5,fontSize:30}} /> <span style={{fontSize:20}}></span>
                </IconButton>
            </div>

        </div>
    );
};

export default PediatricianSingleArticle;