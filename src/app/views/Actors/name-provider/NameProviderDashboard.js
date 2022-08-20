import { Fragment } from 'react';
import {avatarClasses, Card, Grid, Icon, IconButton, styled, useTheme} from '@mui/material';

import Avatar from '@mui/material/Avatar';
import NameProviderDashboardStatCards from "./NameProviderDashboardStatCards";
import NameProviderDashboardTopSellingTable from "./NameProviderDashboardTopSellingTable";
import NameProviderDashboardLineChart from "./NameProviderDashboardLineChart";
import {useNavigate, useParams} from "react-router-dom";
//import {Title} from "@mui/icons-material";

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
}));


const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginRight: '.5rem',
    textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
}));

const H4 = styled('h4')(({ theme }) => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '16px',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
}));

const cardInside={
    display:'flex',
    /*alignItems:'center',
    justifyContent:'center',*/
    margin:'10px',
};

const avatar = {
    height:100,
    width:100,


};
const emailAndPhone= {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start',
    height: '50px'

}
const NameProviderDashboard = () => {
    const { palette } = useTheme();

    const navigate = useNavigate();
    const {id} = useParams();
    const editProfile =()=>navigate({
        pathname:'./edit_Profile',

    })

    let requestTittle={
        color:'#9e9e9e',
        fontSize: '25px',
        paddingLeft:'20px',
        fontWeight:'bold',
    };

    let responseInput={
        width: '50%',

    };

    let sendButton={
        marginLeft: '7px'
    }
    let registerdAstrologers1={
        margin:"20px 25px 20px 2px",
        width:'60%',
        //padding:'10px 2px 10px 2px' ,


    };
    let registerdAstrologers2={
        margin:"20px 2px 20px 0px",
        width:'60%',
        //padding:'10px 2px 10px 2px' ,


    }
    let chartDiv={
        display:'flex',
        flexDirection:'raw',
        flexWrap:" nowrap"
    };
    let titleHeader={
        display:'flex',
        flexDirection:'raw',
        justifyContent: "space-between",
        alignItems: "flex-end",
    };
    return (
        <Fragment>

            <ContentBox className="analytics">

                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <NameProviderDashboardStatCards />
                        <div style={chartDiv}>
                            <Card sx={{ px: 3, py: 2, mb: 3 }} style={registerdAstrologers1}>
                                <Title> Monthly Requests Summary</Title>

                                <NameProviderDashboardLineChart
                                    height="290px"
                                    color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                                />
                            </Card>
                            <Card sx={{ px: 3, py: 2, mb: 3 }} style={registerdAstrologers2}>
                                <Title> Monthly Profits Summary</Title>

                                <NameProviderDashboardLineChart
                                    height="290px"
                                    color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                                />
                            </Card>
                        </div>


                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card  sx={{ px: 3, py: 2, mb: 3 }}>
                            <div style={titleHeader}>
                                <div>
                                    <Title style ={{fontSize:'2em',color:'#56595e'}}>Hi Perera</Title>
                                    <SubTitle>Name Provider</SubTitle>
                                </div>
                                <div>
                                    <IconButton ><Icon onClick={editProfile} >edit</Icon></IconButton>
                                </div>
                            </div>

                            <div style={cardInside}>
                                <Avatar style={avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </div>

                            <p>Astrologer Atlanta. Quality Results in 1 Minute or Less!
                                Search for Astrologer Atlanta. Instant and Personalized
                                Results. Always Facts.Results & Answers. Privacy Friendly.
                                Always Facts.Results & Answers. Privacy Friendly</p>

                            <span style={emailAndPhone}>
               <Icon color="primary">mail</Icon>
                <span style={{paddingLeft:20,fontSize:'17px'}}>perara@gmail.com</span>
                 </span>

                            <span style={emailAndPhone}>
                   <Icon color="primary">local_phone</Icon>
                 <span style={{paddingLeft:20,fontSize:'17px'}} >077 4562389</span>
                  </span>
                            <span style={emailAndPhone}>
                   <Icon color="primary">location_on</Icon>
                 <span style={{paddingLeft:20,fontSize:'17px'}} >No 56/A Senanayake Road,Colombo</span>
                  </span>

                        </Card>



                    </Grid>
                </Grid>
                <NameProviderDashboardTopSellingTable/>

            </ContentBox>
        </Fragment>
    );
};

export default NameProviderDashboard;
