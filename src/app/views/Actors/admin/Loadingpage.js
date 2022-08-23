import {Card, Grid, styled, useTheme} from '@mui/material';
import {Fragment} from 'react';
import ProfitStatCards from './shared/admin/ProfitStatCards';
import AdminStatCards from "./shared/admin/AdminStatCards";
import LatestCommunityPostRequestTable from "./shared/admin/LatestCommunityPostRequestTable";
import PediatricianRequestTable from "./shared/admin/PediatricianRequestTable";
import LineChart from "../shared/LineChart";
import Button from 'react-bootstrap/Button';


const ContentBox = styled('div')(({theme}) => ({
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

const Loadingpage = () => {
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
    const cardList = [
        { name: 'Registered Mothers', amount: 305, icon: 'pregnant_woman' },
        { name: 'Pediatricians', amount: 100, icon: 'local_hospital' },
        { name: 'Astrologers', amount: 52, icon: 'recent_actors' },
        { name: 'Name Providers', amount: 37, icon: 'rate_review' },
    ];
    return (
        <Fragment>

        </Fragment>
    );
};

export default Loadingpage;
