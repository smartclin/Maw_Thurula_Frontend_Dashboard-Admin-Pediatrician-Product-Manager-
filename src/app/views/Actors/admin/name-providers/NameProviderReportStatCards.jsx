import React from "react";
import {Box, Card, Grid, Icon, IconButton, styled, Tooltip} from '@mui/material';
import {Small} from 'app/components/Typography';


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
const NameProviderReportStatCards = () => {
  const cardList1 = [
    { name: 'Name Providers', amount: 3050, icon: 'group' },
    { name: 'This month registerd Name Providers', amount: '20', icon: 'fiber_new' },

  ];
    const cardList2 = [

        { name: 'Total Income', amount: 'Rs 50 000', icon: 'attach_money' },
        { name: 'Pending Income', amount: 'Rs 10 000', icon: 'trending_up' },
    ];

    const [value, setValue] = React.useState([null, null]);

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
                      <Icon>arrow_right_alt</Icon>
                    </IconButton>
                  </Tooltip>
                </StyledCard>
              </Grid>
          ))}
        </Grid>
          <div style={dateRange}>
              {/*<LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  localeText={{ start: 'Start date', end: 'End date' }}
              >
                  <DateRangePicker
                      value={value}
                      onChange={(newValue) => {
                          setValue(newValue);
                      }}
                      renderInput={(startProps, endProps) => (
                          <React.Fragment>
                              <TextField {...startProps} />
                              <Box sx={{ mx: 2 }}> to </Box>
                              <TextField {...endProps} />
                          </React.Fragment>
                      )}
                  />
              </LocalizationProvider>*/}
              {/*<DateRangePicker*/}
              {/*    initialSettings={{ startDate: '1/1/2022', endDate: '3/08/2022' }}*/}
              {/*>*/}
              {/*    <button style={dateRangeButton}>Select Date Range </button>*/}
              {/*</DateRangePicker>*/}
          </div>

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
                                  <Icon>arrow_right_alt</Icon>
                              </IconButton>
                          </Tooltip>
                      </StyledCard>
                  </Grid>
              ))}
          </Grid>
  </div>


  );
};

export default NameProviderReportStatCards;
