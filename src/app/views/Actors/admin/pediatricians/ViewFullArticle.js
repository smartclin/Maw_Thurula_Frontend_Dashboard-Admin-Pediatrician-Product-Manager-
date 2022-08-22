import { Link } from "react-router-dom";
import "../shared/pediatrician/CommonStyles.css"
import { Button, Card, styled,IconButton,Icon, Avatar } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PediatricianArticleComments from "./component/PediatricianArticleComments";
import ArticleComments from "../shared/admin/ArticleComments";

const StyledCard = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    position: 'relative',
    padding: '24px !important',
    // background: `rgb(${convertHexToRGB(theme.palette.primary.main)}, 0.15) !important`,
    [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

export default function ViewFullArticle() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                />
                <h1 className="singlePostTitle">
                    A Healthy Life With Environment
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="admin/pediatrician_articles">
               <small> Dr. Madhuni Tharukshi</small>
              </Link>
            </b>
          </span>
                    <span>Last update :1 day ago</span>
                </div>

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
                <p className="singlePostDesc">
                    Sleep is healing. If you are chronically short on sleep,
                    your health and most areas of your life suffer. Adequate
                    sleep helps learning and memory. Lack of it increases
                    your risk of disease by lowering your immunity,
                    increases hypertension and irregular heartbeat and can
                    lead to accidents. When you’re tired, you can become
                    irritable and impatient, affecting your personal
                    and professional relationships. Finally, chronic lack
                    of sleep affects metabolism and can result in weight gain.
                    <br />
                    <br />
                    Aim for at least 30 minutes of aerobic exercise most
                    days of the week, along with a couple strength-training workouts.
                    Exercise can lower blood pressure and cholesterol,
                    make bones stronger, help with weight control
                    and relieve stress. Physical exercise even benefits
                    the brain by increasing circulation. In addition,
                    exercise your mind by reading, doing crosswords or
                    learning something new. Doing something that involves
                    both your brain and your hands, such as knitting or woodworking,
                    can also be a great stress reliever.
                </p>
                <ArticleComments/>
                <StyledCard className="card-footer m-3">
                    <div className="d-flex flex-row">
                        <Button variant="contained">Block the article</Button>
                    </div>
                </StyledCard>
            </div>
        </div>
    );
}