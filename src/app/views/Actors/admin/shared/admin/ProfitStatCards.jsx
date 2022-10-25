import {Card, Fab, Grid, Icon, lighten, styled, useTheme} from '@mui/material';
import {useEffect, useState} from "react";
import {Get_NP_Month_Profit} from "../../../../../services/Admin/Name_Provider/admin_np_service";
import {Get_Astrologers_Month_Profit} from "../../../../../services/Admin/Astrologer/admin_astrologer_service";

const ContentBox = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
}));

const FabIcon = styled(Fab)(() => ({
  width: '44px !important',
  height: '44px !important',
  boxShadow: 'none !important',
}));

const H3 = styled('h3')(({textcolor}) => ({
  margin: 0,
  color: textcolor,
  fontWeight: '500',
  marginLeft: '12px',
}));

const H5 = styled('h3')(({textcolor}) => ({
  margin: 0,
  color: textcolor,
  fontWeight: '500',
  marginLeft: '12px',
  fontSize: '1.1em'
}));

const H1 = styled('h1')(({theme}) => ({
  margin: 0,
  flexGrow: 1,
  color: theme.palette.text.secondary,
  fontSize: '1.5em'
}));

const Span = styled('span')(({textcolor}) => ({
  fontSize: '11px',
  color: textcolor,
  marginLeft: '4px',
}));

const IconBox = styled('div')(() => ({
  width: 16,
  height: 16,
  color: '#fff',
  display: 'flex',
  overflow: 'hidden',
  borderRadius: '300px ',
  justifyContent: 'center',
  '& .icon': { fontSize: '14px' },
}));

const ProfitStatCards = () => {
  const [NpmonthProfit, setNpMonthProfit] = useState(0);
  const [monthProfit, setMonthProfit] = useState(0);
  useEffect(() => {
    Get_NP_Month_Profit().then(data => {
      // console.log("-----------------")
      // console.log(data.Data[0].sum)
      setNpMonthProfit(data.Data[0].sum)
    }).catch(err => {
      console.log(err.error)
    })
    Get_Astrologers_Month_Profit().then(data => {
      // console.log("-----------------")
      // console.log()
      setMonthProfit(data.Data[0].sum)
    }).catch(err => {
      console.log(err.error)
    })
  }, []);
  function numberWithCommas(x) {
    if(x){
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    else{
      return "Rs. 0.00";
    }

    // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const { palette } = useTheme();
  const textError = palette.error.main;
  const bgError = lighten(palette.error.main, 0.85);
  const data = new Date();

  return (
    <Grid container spacing={3} sx={{ mb: 3 }}>
      <Grid item xs={12} md={12}>
        <Card elevation={3} sx={{ p: 2 }}>
          <ContentBox>
            <FabIcon size="medium" sx={{background: 'rgba(9, 182, 109, 0.15)'}}>
              <Icon sx={{color: '#08ad6c'}}>trending_up</Icon>
            </FabIcon>
            <H5 textcolor={'#08ad6c'}>Profits</H5>
          </ContentBox>

          <ContentBox sx={{ pt: 2 }}>
            <H1>Rs.{numberWithCommas(monthProfit)}</H1>
            <IconBox sx={{ background: 'rgba(9, 182, 109, 0.15)' }}>
              <Icon className="icon">expand_less</Icon>
            </IconBox>
            <Span textcolor={'#08ad6c'}>From Astrologers</Span>
          </ContentBox>
        </Card>
      </Grid>

      {/*<Grid item xs={12} md={12}>*/}
      {/*  <Card elevation={3} sx={{ p: 2 }}>*/}
      {/*    <ContentBox>*/}
      {/*      <FabIcon size="medium" sx={{background: 'rgba(9, 182, 109, 0.15)'}}>*/}
      {/*        <Icon sx={{color: '#08ad6c'}}>trending_up</Icon>*/}
      {/*      </FabIcon>*/}
      {/*      <H5 textcolor={'#08ad6c'}>Profits</H5>*/}
      {/*    </ContentBox>*/}

      {/*    <ContentBox sx={{ pt: 2 }}>*/}
      {/*      <H1>$2.8M</H1>*/}
      {/*      <IconBox sx={{ background: 'rgba(9, 182, 109, 0.15)' }}>*/}
      {/*        <Icon className="icon">expand_less</Icon>*/}
      {/*      </IconBox>*/}
      {/*      <Span textcolor={'#08ad6c'}> From Ecommerce </Span>*/}
      {/*    </ContentBox>*/}
      {/*  </Card>*/}
      {/*</Grid>*/}

      <Grid item xs={12} md={12}>
        <Card elevation={3} sx={{ p: 2 }}>
          <ContentBox>
            <FabIcon size="medium" sx={{background: 'rgba(9, 182, 109, 0.15)'}}>
              <Icon sx={{color: '#08ad6c'}}>trending_up</Icon>
            </FabIcon>
            <H5 textcolor={'#08ad6c'}>Profits</H5>
          </ContentBox>

          <ContentBox sx={{ pt: 2 }}>
            <H1>Rs.{numberWithCommas(NpmonthProfit)}</H1>
            <IconBox sx={{ background: 'rgba(9, 182, 109, 0.15)' }}>
              <Icon className="icon">expand_less</Icon>
            </IconBox>
            <Span textcolor={'#08ad6c'}> From Name Providers </Span>
          </ContentBox>
        </Card>
      </Grid>


    </Grid>
  );
};

export default ProfitStatCards;
