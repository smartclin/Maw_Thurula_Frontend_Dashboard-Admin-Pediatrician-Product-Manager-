import {Button, Card, Grid, styled, useTheme} from '@mui/material';
import { Fragment } from 'react';
import Astrologerstatcard from "./component/Astrologerstatcard";
import AstrologerListTable from "./component/AstrologerListTable";


const Astrologers = () => {

    const ContentBox = styled('div')(({ theme }) => ({
        margin: '30px',
        [theme.breakpoints.down('sm')]: { margin: '16px' },
    }));
    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid container spacing={3}>
                    <Grid item lg={12} md={8} sm={12} xs={12}>
                        <Astrologerstatcard/>
                        <AstrologerListTable/>
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    );
};

export default Astrologers;
