import { Button, Card, styled,IconButton,Icon, Avatar } from '@mui/material';
import { convertHexToRGB } from 'app/utils/utils';
import 'bootstrap/dist/css/bootstrap.min.css'
import ThumbUpAlt from '@mui/icons-material/ThumbUpAlt';
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCommentCount} from "../../../../../services/Pediatrician/pt_service";


const CardRoot = styled(Card)(({ theme }) => ({
    marginBottom: '24px',
    padding: '24px !important',
    [theme.breakpoints.down('sm')]: { paddingLeft: '16px !important' },
}));
const StyledAvatar = styled(Avatar)(() => ({
    width: '32px !important',
    height: '32px !important',
}));
const StyledCard = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    position: 'relative',
    // padding: '24px !important',
    background: `rgb(${convertHexToRGB(theme.palette.primary.main)}, 0.15) !important`,
    [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));
const Heading = styled('h6')(({ theme }) => ({
    margin: 0,
    marginTop: '4px',
    fontSize: '14px',
    fontWeight: '500',
    color: theme.palette.primary.main,
}));
const Paragraph = styled('p')(({ theme }) => ({
    margin: 0,
    paddingTop: '24px',
    // paddingBottom: '24px',
    color: theme.palette.text.secondary,
}));
const ArticleCard = (userData) => {
    const navigate = useNavigate();
    const handleOnClick = (id,id1,id2) => navigate('/pt/PediatricianViewFullArticles/'+id+'/'+id1+'/'+id2, {replace: false});
    const [ArticleComments, setArticleComments] = useState([]);
    // const date=userData.date.split('T')[0]
    // console.log(date)
    useEffect(() => {
        getCommentCount(userData.userData.article_id).then(data => {
            setArticleComments(data.count[0])
        }).catch(err => {
            console.log(err.error)
        })
    }, []);
    return (
        <div className="w-30 card shadow-sm mb-5 bg-white rounded m-5">

                {/*<div className="p-3" >*/}
                {/*    <div  className="w-25 card shadow-sm p-3 mb-5 bg-white rounded"  >*/}
                        {/*<img className="card-img-top" src="..." alt="Card image cap">*/}
                        <div className="card-body">
                            <h5 className="card-title">{userData.userData.title}</h5>
                            <Heading className="d-flex">Catogery <p><a href="app/views/Actors/admin/shared/pediatrician/ArticleCard#">-{userData.userData.category_name}</a></p></Heading>
                            <Paragraph className="card-text">{userData.userData.des.slice(0,250)}....</Paragraph>
                        </div>
                        <div className="d-flex p-1 ms-2">
                            <StyledAvatar src="/assets/images/face-4.jpg"/>
                            <Heading className="card-text m-1"><small>By {userData.userData.name}</small></Heading>
                        </div>
                        <Heading className="card-footer text-muted text-center"><small>Published date-{userData.userData.date.split('T')[0]}</small></Heading>

                        <StyledCard className="card-footer" onClick={()=>handleOnClick(userData.userData.article_id,userData.userData.doctor_id,ArticleComments.count)}>

                            <small className="link" >
                                {/*<Link className="link">*/}
                                    <a>View full article</a>
                                {/*</Link>*/}
                            </small>
                        </StyledCard>
                {/*    </div>*/}
                {/*</div>*/}
            </div>


    );
};

export default ArticleCard;