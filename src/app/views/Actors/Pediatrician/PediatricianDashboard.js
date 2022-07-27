import { Fragment } from 'react';
import {avatarClasses, Card, Grid, Icon, styled, useTheme} from '@mui/material';

import Avatar from '@mui/material/Avatar';

import NameProviderDashboardStatCards from "../name-provider/NameProviderDashboardStatCards";
import NameProviderDashboardTopSellingTable from "../name-provider/NameProviderDashboardTopSellingTable";
import PediatricianDashboardStatCards from "./PediatricianDashboardStatCards";
import PediatricianDashboardTopSellingTable from "./PediatricianDashboardTopSellingTable";
import PediatricianSingleArticle from "../admin/pediatricians/PediatriciansSingleArticle";
import ArticleCard from "../admin/shared/pediatrician/ArticleCard";
import BasicCard from "./PediatricianDashboardTrendingArticle";
import PediatricianDashboardWritePostCard from "./PediatricianDashboardWritePostCard";
import AstrologerDashboardLineChart from "../astrologer/AstrologerDashboardLineChart";


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

    return (
        <Fragment>

            <ContentBox className="analytics">

                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <PediatricianDashboardStatCards />
                        <PediatricianDashboardTopSellingTable/>
                        <div style={chartDiv}>
                            <Card sx={{ px: 3, py: 2, mb: 3 }} style={registerdAstrologers}>
                                <Title> Monthly Requests Summary</Title>

                                <AstrologerDashboardLineChart
                                    height="350px"
                                    color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                                />
                            </Card>
                            <Card sx={{ px: 3, py: 2, mb: 3 }} style={registerdAstrologers}>
                                <Title> Monthly Profits Summary</Title>

                                <AstrologerDashboardLineChart
                                    height="350px"
                                    color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                                />
                            </Card>
                        </div>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                       <div sx={{ px: 3, py: 2, mb: 3 }} >
                           <div>
                               <PediatricianDashboardWritePostCard/>

                           </div>
                           <div>
                               <BasicCard/>
                           </div>
                       </div>
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    );
};

export default PediatricianDashboard;
