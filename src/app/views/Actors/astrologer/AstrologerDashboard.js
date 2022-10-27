import {Fragment, useEffect, useState} from 'react';
import {avatarClasses, Card, Grid, Icon, IconButton, styled, useTheme} from '@mui/material';

import Avatar from '@mui/material/Avatar';
import AstrologerDashboardStatCards from "./AstrologerDashboardStatCards";
import AstrologerDashboardLineChart from "./AstrologerDashboardLineChart";
import {useNavigate, useParams} from "react-router-dom";

import {load_profile_card} from "../../../services/Astrologer/al_dashboard_service";
import AstrologerDashboardLineChart2 from "./AstrologerDashboardLineChart2";
import TodayJobRequest from "./TodayJobRequest";


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

const AstrologerDashboard = () => {
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
    let u_id=localStorage.getItem("id");
    const [ProfileCard, setProfileCard] = useState([]);
    useEffect(() => {
        load_profile_card(u_id).then(data => {
            setProfileCard(data);
        }).catch(err => {
            console.log(err.error)
        })
    }, []);

    useEffect(async () => {

        console.log(ProfileCard)
    }, [ProfileCard]);

    return (
        <Fragment>

            <ContentBox className="analytics">

                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <AstrologerDashboardStatCards />
                        <div style={chartDiv}>

                            <Card sx={{ px: 1, py: 2, mb: 3 }} style={registerdAstrologers1}>
                                <Title> Monthly Requests Summary</Title>

                                 <AstrologerDashboardLineChart
                                    height="290px"
                                    width="300px"
                                    color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                                />
                            </Card>
                            <Card sx={{ px: 1, py: 2, mb: 3 }} style={registerdAstrologers2}>
                                <Title> Monthly Profits Summary</Title>

                                  <AstrologerDashboardLineChart2
                                    height="290px"
                                    width="300px"
                                    color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                                />
                            </Card>
                        </div>


                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12} >
                        <Card  sx={{ px: 3, py: 2, }} style={{paddingBottom:85}}>
                            <div style={titleHeader}>
                                <div>
                                    <Title style ={{fontSize:'2em',color:'#56595e'}}>Hi {ProfileCard.name}</Title>
                                    <SubTitle>Astrologer</SubTitle>
                                </div>
                                <div>
                                    <IconButton onClick={editProfile} ><Icon>edit</Icon></IconButton>
                                </div>
                            </div>
                            <div style={cardInside}>
                                <Avatar style={avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </div>

                            <p>{ProfileCard.description}</p>

                            <span style={emailAndPhone}>
                            <Icon color="primary">mail</Icon>
                            <span style={{paddingLeft:20,fontSize:'17px'}}>{ProfileCard.email}</span>
                             </span>

                                        <span style={emailAndPhone}>
                               <Icon color="primary">local_phone</Icon>
                             <span style={{paddingLeft:20,fontSize:'17px'}} >{ProfileCard.phone_number}</span>
                              </span>
                                        <span style={emailAndPhone}>
                               <Icon color="primary">location_on</Icon>
                             <span style={{paddingLeft:20,fontSize:'17px'}} >{ProfileCard.address}</span>
                                        </span>

                        </Card>



                    </Grid>
                </Grid>
                <TodayJobRequest/>

            </ContentBox>

        </Fragment>
    );
};
export default AstrologerDashboard;
