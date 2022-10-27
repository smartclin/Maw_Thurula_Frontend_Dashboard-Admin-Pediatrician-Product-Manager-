import React, {useEffect, useState} from "react";
import {Box, Card, Grid, Icon, IconButton, styled, TextField, Tooltip} from '@mui/material';
import {Small} from 'app/components/Typography';

import {load_stat_card2_one_al} from "../../../../services/Admin/Astrologer/admin_astrologer_report_service";


const StyledCard = styled(Card)(({theme}) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px !important',
    background: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {padding: '16px !important'},
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

const dateRange={
    margin:"20px 0px 20px 0"
};

const OneAstrologerReportStatCards = ({AlId}) => {
   // console.log(AlId)

    //number of response
    const [StatCard2, setStatCard2] = useState([]);
    const [Al, setAl] = useState([]);


    useEffect(async () => {
        setAl(AlId)
        console.log(AlId)
    }, []);


    useEffect(() => {
        console.log('********')
        console.log(Al)
        console.log('********')
      load_stat_card2_one_al(Al).then(data => {
            setStatCard2(data);
        }).catch(err => {
            console.log(err.error)
        })
    }, [Al]);


    useEffect(async () => {

        // console.log(StatCard2)
    }, [StatCard2]);

    const cardList1 = [
        { name: 'Total Requests', amount: "StatCard1", icon: 'call_received' },
        { name: 'Total Responses', amount: StatCard2, icon: 'call_made' },

    ];
    const cardList2 = [

        { name: 'Total Income', amount: 'Rs 50 000', icon: 'attach_money' },
        { name: 'Pending Income', amount: 'Rs 10 000', icon: 'trending_up' },
    ];
    const [value, setValue] = React.useState([null, null]);

    let dateRangeButton={
        backgroundColor: '#2b62d9',
        border: '0',
        borderRadius: '4px',
        boxShadow: 'rgba(0, 0, 0, .3) 0 5px 15px',
        boxSizing: 'border-box',
        color: '#fff',
        cursor: 'pointer',
        fontFamily:'Montserrat,sans-serif',
        fontSize: '.9em',
        margin: '5px',
        padding: '10px 15px',
        textAlign: 'center',
        userSelect: 'none',
        touchAction: 'manipulation',
    };
  return (<div>
        <Grid container spacing={3} sx={{ mb: '24px' }}>
          {cardList1.map((item, index) => (
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


          <Grid container spacing={3} sx={{ mb: '24px' }}>
              {cardList2.map((item, index) => (
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
  </div>


  );
};

export default OneAstrologerReportStatCards;
