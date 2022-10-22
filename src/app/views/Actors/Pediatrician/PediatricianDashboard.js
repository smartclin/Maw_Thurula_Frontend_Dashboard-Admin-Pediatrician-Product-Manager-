import { Fragment } from 'react';
import {avatarClasses, Card, Grid, Icon, styled, useTheme} from '@mui/material';

import Avatar from '@mui/material/Avatar';

import NameProviderDashboardStatCards from "../name-provider/NameProviderDashboardStatCards";
import NameProviderDashboardTopSellingTable from "../name-provider/NameProviderDashboardTopSellingTable";
import PediatricianDashboardStatCards from "./shared/PediatricianDashboardStatCards";
import PediatricianDashboardTopSellingTable from "./shared/PediatricianDashboardTopSellingTable";
import PediatricianSingleArticle from "../admin/pediatricians/component/PediatriciansSingleArticle";
import ArticleCard from "../admin/shared/pediatrician/ArticleCard";
import BasicCard from "./shared/PediatricianDashboardTrendingArticle";
import PediatricianDashboardWritePostCard from "./shared/PediatricianDashboardWritePostCard";
import PediatricianDashboardLineChart from "./shared/PediatricianDashboardLineChart";
import NameProviderDashboardLineChart from "../name-provider/NameProviderDashboardLineChart";
import FlowersListTable from "./shared/PediatricianVIewArticleComments";
import CommentListTable from "./shared/PediatricianVIewArticleComments";
import TodayCommentListTable from "./shared/PediatricianVIewTodayArticleComments";


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
let chartDiv={
    display:'flex',
    flexDirection:'raw',
    flexWrap:" nowrap"
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
    const { palette } = useTheme();
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
    let registerdAstrologers={
        margin:"20px 2px 20px 2px",
        width:'100%',
        padding:'10px 2 10px 2px' ,

    };

    let rightCard={
       display:'flex',
        flexDirection:'column',
        justifyContent:'space_around'

    };
    let marginstyle={
        marginBottom:'28px'
    };
    return (
        <Fragment>

            <ContentBox className="analytics">

                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <PediatricianDashboardStatCards />
                        <TodayCommentListTable/>
                        {/*<PediatricianDashboardTopSellingTable/>*/}
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>


                        <div  style={rightCard}>
                           <div style={marginstyle}>
                               <PediatricianDashboardWritePostCard/>
                           </div>
                            <BasicCard/>

                        </div>



                    </Grid>
                </Grid>

                <div style={chartDiv}>
                    <Card sx={{ px: 3, py: 2, mb: 3 }} style={registerdAstrologers}>
                        <Title> Monthly Followers </Title>

                        <PediatricianDashboardLineChart
                            height="350px"
                            color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                        />
                    </Card>
                    <Card sx={{ px: 3, py: 2, mb: 3 }} style={registerdAstrologers}>
                        <Title> Monthly Article count</Title>

                        <PediatricianDashboardLineChart
                            height="350px"
                            color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                        />
                    </Card>
                </div>
            </ContentBox>
        </Fragment>
    );
};

export default PediatricianDashboard;
