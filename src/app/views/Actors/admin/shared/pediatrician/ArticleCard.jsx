import { Button, Card, styled,IconButton,Icon, Avatar } from '@mui/material';
import { convertHexToRGB } from 'app/utils/utils';
import 'bootstrap/dist/css/bootstrap.min.css'
import ThumbUpAlt from '@mui/icons-material/ThumbUpAlt';
import {Link} from "react-router-dom";

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
    paddingBottom: '24px',
    color: theme.palette.text.secondary,
}));
const ArticleCard = () => {
    return (
        <div className="w-25 card shadow-sm mb-5 bg-white rounded m-5">

                {/*<div className="p-3" >*/}
                {/*    <div  className="w-25 card shadow-sm p-3 mb-5 bg-white rounded"  >*/}
                        {/*<img className="card-img-top" src="..." alt="Card image cap">*/}
                        <div className="card-body">
                            <h5 className="card-title">Family Success Planning</h5>
                            <Heading className="d-flex">Catogery <p><a href="app/views/Actors/admin/shared/pediatrician/ArticleCard#">-Pregnancy</a></p></Heading>
                            <Paragraph className="card-text">This is a longer card with supporting text below as a natural
                                lead-in to
                                additional content. This content is a little bit longer.</Paragraph>
                        </div>
                        <div className="d-flex p-1 ms-2">
                            <StyledAvatar src="/assets/images/face-4.jpg"/>
                            <Heading className="card-text m-1"><small>By Dr.Madhuni Tharukshi</small></Heading>
                        </div>
                        <Heading className="card-footer text-muted text-center"><small>Last updated-2021/09/08</small></Heading>

                        <StyledCard className="card-footer">

                            <small className="text-muted ">
                                <Link to="/admin/pediatrician_full_article" className="link">
                                    View full article
                                </Link>
                            </small>
                        </StyledCard>
                {/*    </div>*/}
                {/*</div>*/}
            </div>


    );
};

export default ArticleCard;