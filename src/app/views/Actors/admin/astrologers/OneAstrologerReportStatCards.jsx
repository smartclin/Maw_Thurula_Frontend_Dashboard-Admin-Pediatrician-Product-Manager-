import React from "react";
import { Box, Card, Grid, Icon, IconButton, styled, Tooltip } from '@mui/material';
import { Small } from 'app/components/Typography';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';




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

const dateRange={
    margin:"20px 0px 20px 0"
};

const OneAstrologerReportStatCards = () => {

    const cardList1 = [
        { name: 'Requests', amount: 200, icon: 'call_received' },
        { name: 'Responses', amount: '190', icon: 'call_made' },

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
              <LocalizationProvider
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
              </LocalizationProvider>
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

export default OneAstrologerReportStatCards;
