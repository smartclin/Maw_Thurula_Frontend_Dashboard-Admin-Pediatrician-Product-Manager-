import {IconButton} from "@mui/material";
import {Fragment, useEffect, useState} from 'react';
import FavoriteIcon from "@mui/icons-material/Favorite";
import {getCommentCount} from "../../../../services/Pediatrician/pt_service";
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";
import {Link, useNavigate} from "react-router-dom";
import parse from "html-react-parser"

const SocialCard = ({ userData }) => {
    const navigate = useNavigate();
    const handleOnClick = (id,id1,id2) => navigate('/pt/PediatricianViewFullArticles/'+id+'/'+id1+'/'+id2, {replace: false});
    const [ArticleComments, setArticleComments] = useState([]);
    const date=userData.date.split('T')[0]
    console.log(date)
    useEffect(() => {
        getCommentCount(userData.article_id).then(data => {
            setArticleComments(data.count[0])
        }).catch(err => {
            console.log(err.error)
        })
    }, []);
    return (
        <div className="post" >
            {/*<div className="post" style={{width:'50%',backgroundColor:'red'}}>*/}
                <img
                    className="postImg"
                    src={userData.image_1}
                    alt="image goes here"
                    onClick={()=>{handleOnClick(userData.article_id,userData.doctor_id,ArticleComments.count)}}
                />
                <div className="postInfo">

                    <div className="postCats">
                       <span className="postCat">
                        {/*<Link className="link" to="/posts?cat=Music">*/}
                           Category -
                           {/*</Link>*/}
                        </span>
                        <span className="postCat">
                            {userData.category_name}

                         </span>
                    </div>
                    <div>
                        <span className="postCat">{userData.date.split('T')[0]}</span>

                    </div>
                    <span className="postTitle">
          {/*<Link to="/pt/PediatricianViewFullArticles" className="link" >*/}
                        {userData.title}
                        {/*</Link>*/}
        </span>
                    <hr />
                    {/*<span className="postDate">{DateReturn(props.posts.date)}</span>*/}
                </div>
                <p className="postDesc">
                    {parse(userData.des)}
                </p>

                <div>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon /> <span style={{fontSize:20}}>{userData.no_of_likes}</span>
                    </IconButton>
                    <IconButton aria-label="share">
                        <MarkunreadRoundedIcon style={{paddingRight:5,fontSize:30}} /><span style={{fontSize:20}}>{ArticleComments.count}</span>
                    </IconButton>
                </div>

            {/*</div>*/}

        </div>
    )
};

export default SocialCard;