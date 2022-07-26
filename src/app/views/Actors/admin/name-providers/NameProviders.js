import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import NamePorividerstatcard from "./component/NameProviderstatcard";
import NameProviderListTable from "./component/NameProviderListTable";



const NameProviders = () => {

    const ContentBox = styled('div')(({ theme }) => ({
        margin: '30px',
        [theme.breakpoints.down('sm')]: { margin: '16px' },
    }));
    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid container spacing={3}>
                    <Grid item lg={12} md={8} sm={12} xs={12}>
                        <NamePorividerstatcard/>
                        <NameProviderListTable/>
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    );
};

export default NameProviders;
