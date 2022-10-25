
import * as React from 'react';
import {  Grid, styled, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";
import PendingRoundedIcon from "@mui/icons-material/PendingRounded";
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import CardHeader from "@mui/material/CardHeader";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {
    AcceptPost,
    getRecentMotherPostByPostIdForAdmin,
    MotherPendingPostWithCount, RejectPost,
    SinglePostDetails
} from "../../../../../services/Admin/Mother/admin_mother_service";
// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const MotherRequestPostacceptcard = () => {

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
    const Title = styled('span')(() => ({
        fontSize: '1rem',
        fontWeight: '500',
        textTransform: 'capitalize',
    }));

    let { uid } = useParams();
    let { pid } = useParams();
    const [MotherPosts, setMotherPosts] = useState([]);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        SinglePostDetails(pid).then(data => {
            setMotherPosts(data.data[0])
            // console.log("------------------")
            // console.log(data.data[0])
        }).catch(err => {
            console.log(err.error)
        })
    }, []);

    const accept=()=>{
        // console.log("data - "+pid)
        AcceptPost(pid).then(x => {
            SinglePostDetails(pid).then(data => {
                setMotherPosts(data.data[0])
                // console.log("------------------")
                // console.log(data.data[0])
            }).catch(err => {
                console.log(err.error)
            })
        }).catch(err => {
            console.log(err.error)
        })
        return true
    }
    const navigate = useNavigate();
    const reject=()=>{
        // console.log("data - "+pid)
        RejectPost(pid).then(x => {
            navigate('/admin/mothers_post_request/', {replace: false});
        }).catch(err => {
            console.log(err.error)
        })
        return true
    }
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
        <div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Rejecting will permanently remove this from the system.
                        This cannot be undone!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus variant="contained" color="secondary">Cancle</Button>
                    <Button onClick={reject} color="error" variant="outlined">
                        Reject
                    </Button>
                </DialogActions>
            </Dialog>

            <Card sx={{ minWidth: 275,paddingBottom:0 ,minHeight:150,maxHeight:165 }}>
                <CardContent>
                    <Title>
                        {MotherPosts.title}
                        {/*How do I know my baby is getting enough breast milk?*/}
                    </Title>
                    <Typography  color="text.secondary">
                        Category - {MotherPosts.Category}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {/*2022/07/06*/}
                        {DateReturn(MotherPosts.Date)}
                    </Typography>


                    <CardActions disableSpacing style={{paddingLeft:-3,maxHeight:30,marginLeft:-15,marginTop:10}}>

                        {/*<ExpandMore>*/}
                        {MotherPosts.status==2?
                            <Button variant="contained" color="success" size="small" startIcon={<DoneRoundedIcon />} style={{marginLeft:10}} onClick={()=>{accept()}}>
                                Accept
                            </Button>
                            :
                            <span></span>
                        }
                        <Button variant="contained" color="warning" size="small" startIcon={<CloseIcon  />} style={{marginLeft:10,}} onClick={()=>{handleClickOpen()}}>
                            Reject
                        </Button>
                        {/*</ExpandMore>*/}
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    );
};

export default MotherRequestPostacceptcard;
