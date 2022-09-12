import React, {useEffect, useState} from "react";
import {Box, Card, Grid, Icon, IconButton, styled, TextField, Tooltip, useTheme} from '@mui/material';
import {Small} from 'app/components/Typography';
//import API from "../../../../services/baseURL";
//import {useEffect, useState} from "@types/react";
import {load_stat_card1, load_stat_card2,load_tot_income,load_pending_income} from "../../../../services/Admin/Astrologer/admin_astrologer_report_service";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AstrologerReportLineChart from "./AstrologerReportLineChart";
//import {refresh} from "./AstrologerReportLineChart";
import {render} from "react-dom";
import AstrologerReportLineChart2 from "./AstrologerReportLineChart2";



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

const AstrologerReportStatCards = () => {
    const [value, setValue] = useState();
   const [StatCard1, setStatCard1] = useState([]);

   useEffect(() => {
        load_stat_card1().then(data => {
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
        load_stat_card2().then(data => {
            setStatCard2(data);
        }).catch(err => {
            console.log(err.error)
        })
    }, []);

    useEffect(async () => {

        console.log(StatCard2)
    }, [StatCard2]);


    const [TotIncome, setTotIncome] = useState([]);


    const cardList1 = [
        { name: 'Astrologers', amount:StatCard1 , icon: 'group' },
        { name: 'This month registerd Astrologers', amount: StatCard2, icon: 'fiber_new' },

    ];



   // const [value, setValue] = React.useState([null, null]);

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
//line chart css


    const { palette } = useTheme();

    const Title = styled('span')(() => ({
        fontSize: '1rem',
        fontWeight: '500',
        marginRight: '.5rem',
        textTransform: 'capitalize',
    }));

    let mainDiv={
        marginLeft:'100px',
        marginRight:'100px',

    };
    let reportTitle={

        color:'#81a1c7',
        fontSize:'30px',
        marginTop:'20px',
        marginBottom:'20px'
    };
    let registerdAstrologers={
        margin:"20px 0 20px 0"
    };
    let chartDiv={
        display:'flex',
        flexDirection:'column',
        flexWrap:" nowrap"
    };
    let titleDiv={
        display: 'flex',
        flexDirection:'raw',
        margin: '0 100px 0 100px',
        alignItems:'center',
        justifyContent:'space-between',
    };
    const current = new Date();
    const dateE = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
   // console.log(dateE)

    const dateS=`${(current.getFullYear()-1)}-${current.getMonth()+1}-${current.getDate()}`;
   // console.log(dateS)


      //  const defaultValueS = dateS.toLocaleDateString('en-CA');
       // const defaultValueE = dateE.toLocaleDateString('en-CA');


    const [sDate, setsDate] = useState('');
    const [eDate, seteDate] = useState('');
    const [Tot, setTot] = useState();
    const [Pending, setPending] = useState();

    useEffect(()=>{
    seteDate(dateE);
    setsDate(dateS);
    },[])
    console.log(`sDate: ${sDate}`);
    console.log(`eDate: ${eDate}`);
    //load total income
    load_tot_income(sDate,eDate).then(data => {
        setTot(data);
    })

    //load pending income
    load_pending_income(sDate,eDate).then(data => {
        setPending(data);
    })

    function FilterData(event) {
        //  prevent page refresh
        event.preventDefault();


        //load total income
        load_tot_income(sDate,eDate).then(data => {
            setTot(data);
         })

        //load pending income
        load_pending_income(sDate,eDate).then(data => {
            setPending(data);
        })

        setValue({});
    }

    const cardList2 = [

        { name: 'Total Income', amount:Tot , icon: 'attach_money' },
        { name: 'Pending Income', amount: Pending, icon: 'trending_up' },
    ];
    let chart;
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


          <div style={dateRange}>
              <Box
                  component="form"
                  sx={{
                      '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"

              >

                      <TextField label="Start Date" color="primary" focused type="date"  id={sDate} name='sDate'
                                 defaultValue={sDate}
                                 value={sDate}
                                 onChange={(e) => setsDate(e.target.value)}
                                 selected


                          />

                      <TextField label="End Date" color="primary" focused  type="date" id={eDate} name='eDate'
                                 value={eDate}
                                 onChange={(e) => seteDate(e.target.value)}
                                 defaultValue={eDate}
                          />
                      <Stack spacing={2} direction="row">

                      <Button type="submit" variant="contained" onClick={FilterData} >Generate Report</Button>

                      </Stack>



              </Box>


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
              {/*    initialSettings={{ startDate: '1/1/2022', endDate: '3/12/2022' }}*/}
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
                              </IconButton>
                          </Tooltip>
                      </StyledCard>
                  </Grid>
              ))}
          </Grid>
            <div style ={chartDiv}>
                <Card sx={{ px: 3, py: 2, mb: 3 }} style={registerdAstrologers}>
                    <Title> Registerd Astrologers</Title>

                    <AstrologerReportLineChart

                        height="350px"
                        color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                        sDate={sDate}
                        eDate={eDate}

                    />
                </Card>
                <Card sx={{ px: 3, py: 2, mb: 3 }} style={registerdAstrologers}>
                    <Title> Profit from Astrologers</Title>

                    <AstrologerReportLineChart2
                        height="350px"
                        color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                        sDate={sDate}
                         eDate={eDate}
                    />
                </Card>
            </div>


  </div>


  );
};

export default AstrologerReportStatCards;
