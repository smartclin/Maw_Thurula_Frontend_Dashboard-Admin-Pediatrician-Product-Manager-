//
import { Box, Grid, Icon, styled, Tooltip } from '@mui/material';
import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PendingRoundedIcon from '@mui/icons-material/PendingRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MarkunreadRoundedIcon from '@mui/icons-material/MarkunreadRounded';
import {useNavigate} from "react-router-dom";
import { useParams } from "react-router";
import {
    getRecentMotherPostForAdmin, getTargetMotherListForAdmin
} from "../../../../../services/Admin/Mother/admin_mother_service";
import {Fragment, useEffect, useState} from 'react';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const MotherPosts = () => {
    const navigate = useNavigate();
    const handleOnClick = (id) => navigate('/admin/mother_details/'+id, {replace: false});

    let { id } = useParams();
    let { count } = useParams();
    const [MotherPosts, setMotherPosts] = useState([]);
    const cardList = [
        { category: 'Inconsolable crying', date: "2022/07/02", img: 'pregnant_woman',content:"Parents everywhere can testify to the fact that becoming a parent can be equally thrilling and terrifying—a combination of excitement and joy on the one hand and fear and frustration on the other. ",title:" Listening to Others",likes:12,comments:23 },
        { category: 'Vaccine safety', date: "2022/07/03", img: 'pregnant_woman',content:"Positioning. Latch. Pain. Mastitis. Low milk supply. You name it, we’ve heard about it. The key to survival is knowing that each and every issue is manageable! While making milk is “natural,”",title:"Getting on a Schedule",likes:12,comments:23 },
        { category: 'Weight gain', date: "2022/07/05", img: 'pregnant_woman',content:"Sleepless nights are part of parenthood, but you’ll be surprised how quickly you adjust. It’s true that babies sleep a lot, Many health experts including the American Academy of Pediatrics",title:"",likes:12,comments:23 },
        { category: 'Making milestones', date: "2022/07/01", img: 'pregnant_woman',content:"During the first years of your child’s life, you will likely encounter bouts of sickness including colds and fevers . It’s hard to know when to call the doctor.",title:"Being Perfect",likes:12,comments:23 },
        { category: 'Vaccine safety', date: "2022/07/02", img: 'pregnant_woman',content:"Positioning. Latch. Pain. Mastitis. Low milk supply. You name it, we’ve heard about it. The key to survival is knowing that each and every issue is manageable!",title:"Losing the baby weight",likes:12,comments:23 },
        { category: 'Inconsolable crying', date: "2022/08/02", img: 'pregnant_woman',content:"Positioning. Latch. Pain. Mastitis. Low milk supply. You name it, we’ve heard about it. The key to survival is knowing that each and every issue is manageable! ",title:"Saying No",likes:12,comments:23 },
    ];
    useEffect(() => {
        getRecentMotherPostForAdmin(id).then(data => {
            setMotherPosts(data.Data)
        }).catch(err => {
            console.log(err.error)
        })
    }, []);
    useEffect(async () => {
        // console.log("--------------")
        // console.log(MotherPosts)
        // console.log("--------------")
        // console.log(cardList)
        // console.log("--------------")

    }, [MotherPosts]);

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [Count, setCount] = useState(0);
    getTargetMotherListForAdmin(id).then(data => {
        setCount(count)
    }).catch(err => {
        console.log(err.error)
    })



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


    return (
        <Grid container spacing={3} sx={{ mb: '24px' }}>
            { (Count!=0) ?
                // <h6>Data found{Count}</h6>
                (MotherPosts).map((item, index) => (
                    <Grid item xs={4} md={4} key={index} onClick={()=>{handleOnClick(item.PostId)}}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{padding:0.4 }} aria-label="recipe" src={item.img}>

                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                    </IconButton>
                                }
                                title={item.category}
                                subheader={
                                    DateReturn(item.Date)
                                }
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={item.image}
                                // image="https://i.postimg.cc/Pxng9B9H/1.webp"
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="#576574">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.post_content}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon /> <span style={{fontSize:20}}>{item.no_of_likes}</span>
                                </IconButton>
                                {/*onClick={()=>{alert("️This works on every component!")}}*/}
                                <IconButton aria-label="share" >
                                    <MarkunreadRoundedIcon style={{paddingRight:5,fontSize:30}} /> <span style={{fontSize:20}}>{item.ReplyCount}</span>
                                </IconButton>
                                <ExpandMore>
                                    <PendingRoundedIcon style={{fontSize:25}} />
                                </ExpandMore>
                            </CardActions>

                        </Card>
                    </Grid>
                ))

                :
                <Grid style={{paddingLeft:25,paddingTop:20,}}>
                    <Typography gutterBottom variant="h6" component="div" style={{color:"#34495e"}}>
                        No Posts Yet
                    </Typography>
                </Grid>
            }



        </Grid>
    );
};

export default MotherPosts;


// <Card sx={{ maxWidth: 345 }}>
//   <CardMedia
//       component="img"
//       height="140"
//       image="https://avatars0.githubusercontent.com/u/7895451?s=460&v=4"
//       alt="green iguana"
//   />
//   <CardContent>
//     <Typography gutterBottom variant="h6" component="div" style={{lineHeight:1}}>
//       How do I get my baby to sleep?
//     </Typography>
//     <Typography variant="body2" color="text.secondary">
//       Lizards are a widespread group of squamate reptiles, with over 6,000
//       species,Lizards are a widespread group of squamate reptiles...
//     </Typography>
//
//     <Grid container sx={{ color: 'text.primary' }}>
//       <Grid item xs={2}>
//         <div style={{display:'flex'}}>
//           <div style={{ marginTop:2}}><FavoriteRoundedIcon sx={{ fontSize: "18px", color:'#fc5c65' }} /></div>
//           <Typography > - 4</Typography>
//         </div>
//       </Grid>
//       <Grid item xs={10}>
//         <div style={{display:'flex' }}>
//           <div style={{ marginTop:2}}><InsertCommentRoundedIcon sx={{ fontSize: "18px", color:'#a5b1c2', }} /></div>
//           <Typography style={{marginTop:0}} > - 4</Typography>
//         </div>
//       </Grid>
//       <Grid item xs={12}>
//         <div style={{display:'flex', justifyContent:'space-between'}}>
//           <div style={{}}>
//             <Button size="small" >View More</Button>
//           </div>
//           <div style={{paddingTop:7}}>
//             <Typography variant="body2" color="text.secondary">
//               2022/06/05
//             </Typography>
//           </div>
//         </div>
//       </Grid>
//     </Grid>
//   </CardContent>
// </Card>
