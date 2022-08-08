import { Link } from "react-router-dom";
import "../admin/shared/pediatrician/CommonStyles.css"
import { Button, Card, styled,IconButton,Icon, Avatar } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PediatricianArticleComments from "../admin/pediatricians/component/PediatricianArticleComments";
import Analytics from "./shared/PediatricianVIewArticleComments";
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";

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
                        <FavoriteIcon /> <span style={{fontSize:20}}>12</span>
                    </IconButton>
                    <IconButton aria-label="share">
                        <MarkunreadRoundedIcon style={{paddingRight:5,fontSize:30}} /> <span style={{fontSize:20}}>32</span>
                    </IconButton>
                </div>
                <p className="singlePostDesc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
                    quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
                    Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
                    eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                    error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
                    impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
                    odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                    iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                    a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                    iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                    a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                    iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                    a odit modi eos!
                    <br />
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
                    quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
                    Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
                    eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                    error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
                    impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
                    odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                    iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                    a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
                </p>
                {/*<PediatricianArticleComments/>*/}
                {/*<StyledCard className="card-footer m-3">*/}
                {/*    <div className="d-flex flex-row">*/}
                {/*        <Button variant="contained">Block the article</Button>*/}
                {/*    </div>*/}
                {/*</StyledCard>*/}
            </div>
            <div id={"comments"}>
                <Analytics/>
            </div>
        </div>
    );
}