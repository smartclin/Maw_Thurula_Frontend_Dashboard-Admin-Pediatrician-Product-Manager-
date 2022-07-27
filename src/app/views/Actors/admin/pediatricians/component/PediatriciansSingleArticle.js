

import { Card, Grid, styled, useTheme ,IconButton,Button} from '@mui/material';
import CommentView from "./CommentView";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../../shared/pediatrician/CommonStyles.css"
import ShareIcon from "@mui/icons-material/Share";

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
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
                    <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
                </div>
                <span className="postTitle">
          <Link to="/pt/PediatricianViewFullArticles" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
            <div>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    <small>454</small>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                    <small>45</small>
                </IconButton>
            </div>
        </div>
    );
};

export default PediatricianSingleArticle;