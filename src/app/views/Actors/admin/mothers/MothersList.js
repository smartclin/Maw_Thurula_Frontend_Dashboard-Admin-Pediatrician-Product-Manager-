import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
// import AdminStatCards from "../../shared/admin/AdminStatCards";
// import DateTimePicker from '@mui/x-date-pickers-pro/DateTimePicker';

import Button from '@mui/material/Button';
import MotherList from "../../shared/mother/MotherListTable";
import AdminStatCards from "../../../dashboard/shared/admin/AdminStatCards";
import LatestCommunityPostRequestTable from "../../../dashboard/shared/admin/LatestCommunityPostRequestTable";
import PediatricianRequestTable from "../../../dashboard/shared/admin/PediatricianRequestTable";
import ProfitStatCards from "../../../dashboard/shared/admin/ProfitStatCards";
import LineChart from "../../../charts/echarts/LineChart";
import MotherStatCards from "../../shared/mother/Motherstatcard";
import BestMotherList from "../../shared/mother/BestMothrList";
import DenseTable from "../../shared/mother/BestMothrList";

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

const MothersList = () => {
    const { palette } = useTheme();

    const Container = styled('div')(({ theme }) => ({
        margin: '30px',
        [theme.breakpoints.down('sm')]: {
            margin: '16px',
        },
        '& .breadcrumb': {
            marginBottom: '30px',
            [theme.breakpoints.down('sm')]: {
                marginBottom: '16px',
            },
        },
    }));
    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <MotherStatCards/>

                        <MotherList
                        className
                        />

                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <BestMotherList />

                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    );
};

export default MothersList;
