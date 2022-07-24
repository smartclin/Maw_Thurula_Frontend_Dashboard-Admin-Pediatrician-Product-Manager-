import { Fragment } from 'react';
import {avatarClasses, Card, Grid, Icon, styled, useTheme} from '@mui/material';

import Avatar from '@mui/material/Avatar';

import NameProviderDashboardStatCards from "./NameProviderDashboardStatCards";
import NameProviderDashboardTopSellingTable from "./NameProviderDashboardTopSellingTable";


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

    return (
        <Fragment>

            <ContentBox className="analytics">

                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <NameProviderDashboardStatCards />
                        <NameProviderDashboardTopSellingTable/>
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card  sx={{ px: 3, py: 2, mb: 3 }}>
                            <Title style ={{fontSize:'2em' ,color:'#56595e'}}>Hi Perera</Title>
                            <SubTitle>Name provider</SubTitle>
                            <div style={cardInside}>
                                <Avatar style={avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </div>

                            <p>Name provider Atlanta. Quality Results in 1 Minute or Less!
                                Search for  Atlanta. Instant and Personalized
                                Results. Always Facts.Results & Answers. Privacy Friendly.</p>

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
            </ContentBox>
        </Fragment>
    );
};

export default NameProviderDashboard;
