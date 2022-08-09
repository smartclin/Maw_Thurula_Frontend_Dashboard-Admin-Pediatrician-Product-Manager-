import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { Link } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {IconButton} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MarkunreadRoundedIcon from "@mui/icons-material/MarkunreadRounded";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
);
let chartDiv={
    display:'flex',
    flexDirection:'raw',
    flexWrap:" nowrap"
};

export default function BasicCard() {
  return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           Most tending article of the Day
          </Typography>
          <Typography variant="h5" component="div" sx={{ fontSize: 20 }}>
            Happy Family
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Category-Health
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>

            <div>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon /> <span style={{fontSize:20}}>12</span>
                </IconButton>
                <IconButton aria-label="share">
                    <MarkunreadRoundedIcon style={{paddingRight:5,fontSize:30}} /> <span style={{fontSize:20}}>32</span>
                </IconButton>
                <Button size="small">
                    <Link className="link" to="/pt/PediatricianViewFullArticles">View full article</Link>
                    </Button>
            </div>
        </CardActions>
      </Card>
  );
}
