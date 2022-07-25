
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

const MotherPostblockcard = () => {

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
    return (
        <Card sx={{ minWidth: 275,paddingBottom:0 ,minHeight:165,maxHeight:165 }}>
            <CardContent>
                <Title>
                    How do I know my baby is getting enough breast milk?
                </Title>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    2022/07/06
                </Typography>

                <Typography sx={{ mb: 1 , mt:1}} color="text.secondary">
                    Category - Baby Helth
                </Typography>
                <CardActions disableSpacing style={{paddingLeft:-3,maxHeight:30,marginLeft:-15}}>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon /> <span style={{fontSize:20}}>12</span>
                    </IconButton>
                    <IconButton aria-label="share">
                        <MarkunreadRoundedIcon style={{paddingRight:5,fontSize:30}} /> <span style={{fontSize:20}}>32</span>
                    </IconButton>
                    <ExpandMore>
                        <Button variant="outlined" color="warning" startIcon={<VisibilityOffRoundedIcon />}>
                            Hide
                        </Button>
                    </ExpandMore>
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default MotherPostblockcard;
