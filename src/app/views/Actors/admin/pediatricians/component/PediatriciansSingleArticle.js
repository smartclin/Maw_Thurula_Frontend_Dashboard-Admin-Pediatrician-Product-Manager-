
import {Card, Grid, styled, useTheme, IconButton, Button, Icon} from '@mui/material';
import CommentView from "./CommentView";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../../shared/pediatrician/CommonStyles.css"
import ShareIcon from "@mui/icons-material/Share";
import Analytics from "../../../Pediatrician/shared/PediatricianVIewArticleComments";
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";
// import * as React from "@types/react";

const PediatricianSingleArticle = ({img}) => {
    const { palette } = useTheme();

    return (
        <div className="post">
            <img
                className="postImg"
                src={img}
                alt=""
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
              Health
            {/*</Link>*/}
          </span>
                </div>
                <span className="postTitle">
          <Link to="/pt/PediatricianViewFullArticles" className="link">
            Health and baby care
          </Link>
        </span>
                <hr />
                <span className="postDate">2022/09/07</span>
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
                    <FavoriteIcon /> <span style={{fontSize:20}}>12</span>
                </IconButton>
                <IconButton aria-label="share">
                    <MarkunreadRoundedIcon style={{paddingRight:5,fontSize:30}} /> <span style={{fontSize:20}}>32</span>
                </IconButton>
            </div>

        </div>
    );
};

export default PediatricianSingleArticle;