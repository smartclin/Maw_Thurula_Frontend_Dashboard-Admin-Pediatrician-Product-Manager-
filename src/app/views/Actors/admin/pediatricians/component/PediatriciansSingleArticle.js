

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
            Lorem ipsum dolor sit amet
          </Link>
        </span>
                <hr />
                <span className="postDate">2022/09/07</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
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