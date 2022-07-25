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


const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px !important',
    background: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

const ContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    '& small': { color: theme.palette.text.secondary },
    '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
}));

const Heading = styled('h6')(({ theme }) => ({
    margin: 0,
    marginTop: '4px',
    fontSize: '14px',
    fontWeight: '500',
    color: theme.palette.primary.main,
}));

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

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const cardList = [
        { name: 'Registered Mothers', amount: 100, icon: 'pregnant_woman' },
        { name: 'Active Mothers', amount: 200, icon: 'woman' },
        { name: 'Blocked Mothers', amount: 300, icon: 'person_offIcon' },
        { name: 'Registered Mothers', amount: 400, icon: 'pregnant_woman' },
        { name: 'Active Mothers', amount: 500, icon: 'woman' },
        { name: 'Blocked Mothers', amount: 600, icon: 'person_offIcon' },
    ];

    return (
        <Grid container spacing={3} sx={{ mb: '24px' }}>
            {cardList.map((item, index) => (
                <Grid item xs={4} md={4} key={index}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src="https://avatars0.githubusercontent.com/u/7895451?s=460&v=4">

                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                </IconButton>
                            }
                            title="CAtogary name"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://picsum.photos/id/870/200/300?grayscale&blur=2"
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="#576574">
                                How do I get my baby to sleep through the night?
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like...
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon /> <span style={{fontSize:20}}>12</span>
                            </IconButton>
                            <IconButton aria-label="share">
                                <MarkunreadRoundedIcon style={{paddingRight:5,fontSize:30}} /> <span style={{fontSize:20}}>32</span>
                            </IconButton>
                            <ExpandMore>
                                <PendingRoundedIcon style={{fontSize:25}} />
                            </ExpandMore>
                        </CardActions>

                    </Card>
                </Grid>
            ))}
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