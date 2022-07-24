import { Button, Card, styled,IconButton,Icon, Avatar } from '@mui/material';
import { convertHexToRGB } from 'app/utils/utils';
import 'bootstrap/dist/css/bootstrap.min.css'
import ThumbUpAlt from '@mui/icons-material/ThumbUpAlt';

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
        <div>
            <div className="d-flex p-2"  >
                <div className="w-50 p-3">
                    <div className="card">
                        {/*<img className="card-img-top" src="..." alt="Card image cap">*/}
                        <div className="card-body">
                            <h4 className="card-title">Family Success Planning</h4>
                            <Heading className="d-flex">Catogery <p><a href="#">-Pregnancy</a></p></Heading>
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

                            <small className="text-muted "><a href="#">view full article</a></small>
                        </StyledCard>
                    </div>
                </div>
                <div className="w-50 p-3">
                    <div className="card">
                        {/*<img className="card-img-top" src="..." alt="Card image cap">*/}
                        <div className="card-body">
                            <h4 className="card-title">Family Success Planning</h4>
                            <Heading className="d-flex">Catogery <p><a href="#">-Pregnancy</a></p></Heading>
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

                            <small className="text-muted "><a href="#">view full article</a></small>
                        </StyledCard>
                    </div>
                </div>
                <div className="w-50 p-3">
                    <div className="card">
                        {/*<img className="card-img-top" src="..." alt="Card image cap">*/}
                        <div className="card-body">
                            <h4 className="card-title">Family Success Planning</h4>
                            <Heading className="d-flex">Catogery <p><a href="#">-Pregnancy</a></p></Heading>
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

                            <small className="text-muted "><a href="#">view full article</a></small>
                        </StyledCard>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ArticleCard;