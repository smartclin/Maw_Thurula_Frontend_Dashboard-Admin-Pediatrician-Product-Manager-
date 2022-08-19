import {Button, Card, Grid, styled, useTheme} from '@mui/material';
import { Fragment } from 'react';
import AstrologerRequestStatCards from  "./component/Astrologerrequeststatcard";
import AstrologerRequestListTable from  "./component/AstrologerRequestListTable";





const Astrologers = () => {

    const ContentBox = styled('div')(({ theme }) => ({
        margin: '30px',
        [theme.breakpoints.down('md')]: { margin: '16px' },
    }));
    return (
        <Fragment>
            <ContentBox className="analytics" >
                <Grid container item lg={12} spacing={3} >
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <AstrologerRequestStatCards/>
                        <AstrologerRequestListTable/>
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    );
};

export default Astrologers;
