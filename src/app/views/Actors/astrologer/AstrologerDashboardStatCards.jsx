import { Box, Card, Grid, Icon, IconButton, styled, Tooltip } from '@mui/material';
import { Small } from 'app/components/Typography';
import {useEffect, useState} from "react";

import {load_stat_card1, load_stat_card2} from "../../../services/Astrologer/al_dashboard_service";

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

const AstrologerDashboardStatCards = () => {
  let u_id=localStorage.getItem("id");
  console.log(u_id)
  const [StatCard1, setStatCard1] = useState([]);

  useEffect(() => {
    load_stat_card1(u_id).then(data => {
      setStatCard1(data);
    }).catch(err => {
      console.log(err.error)
    })
  }, []);

  useEffect(async () => {

    console.log(StatCard1)
  }, [StatCard1]);

  const [StatCard2, setStatCard2] = useState([]);
  useEffect(() => {
    load_stat_card2(u_id).then(data => {
      setStatCard2(data);
    }).catch(err => {
      console.log(err.error)
    })
  }, []);

  useEffect(async () => {

  //  console.log(StatCard2)
  }, [StatCard2]);


  const cardList = [
    { name: 'Request messages-waiting for reply', amount: StatCard1, icon: 'message' },
    { name: 'Responded messages', amount: StatCard2, icon: 'check_circle' },

  ];

  return (
    <Grid container spacing={3} sx={{ mb: '24px' }}>
      {cardList.map((item, index) => (
        <Grid item xs={12} md={6} key={index}>
          <StyledCard elevation={6}>
            <ContentBox>
              <Icon className="icon">{item.icon}</Icon>
              <Box ml="12px">
                <Small>{item.name}</Small>
                <Heading>{item.amount}</Heading>
              </Box>
            </ContentBox>

            <Tooltip title="View Details" placement="top">
              <IconButton>
              </IconButton>
            </Tooltip>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default AstrologerDashboardStatCards;
