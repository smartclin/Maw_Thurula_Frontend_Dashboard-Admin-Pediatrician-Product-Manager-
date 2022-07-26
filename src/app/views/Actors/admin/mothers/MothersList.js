import {Grid, styled, useTheme} from '@mui/material';
import {Fragment} from 'react';
import MotherStatCards from "./component/Motherstatcard";
import MotherListTable from "./component/MotherListTable";



const ContentBox = styled('div')(({theme}) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {margin: '16px'},
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
                      <Grid item lg={12} md={8} sm={12} xs={12}>
                          <MotherStatCards/>
                          <MotherListTable/>
                      </Grid>
                    </Grid>
                  </ContentBox>
        </Fragment>
    );
};

export default MothersList;
