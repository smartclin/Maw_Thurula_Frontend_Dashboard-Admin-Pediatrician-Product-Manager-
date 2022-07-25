import { Fragment } from 'react';
import {avatarClasses, Card, Grid, Icon, styled, useTheme} from '@mui/material';

import Avatar from '@mui/material/Avatar';

import NameProviderDashboardStatCards from "../name-provider/NameProviderDashboardStatCards";
import NameProviderDashboardTopSellingTable from "../name-provider/NameProviderDashboardTopSellingTable";
import PediatricianDashboardStatCards from "./PediatricianDashboardStatCards";
import PediatricianDashboardTopSellingTable from "./PediatricianDashboardTopSellingTable";
import PediatricianSingleArticle from "../admin/pediatricians/PediatriciansSingleArticle";
import ArticleCard from "../admin/shared/pediatrician/ArticleCard";


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
const PediatricianDashboard = () => {
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
                        <PediatricianDashboardStatCards />
                        <PediatricianDashboardTopSellingTable/>
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                       <div>
                           {/*<ArticleCard/>*/}
                       </div>

                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    );
};

export default PediatricianDashboard;
