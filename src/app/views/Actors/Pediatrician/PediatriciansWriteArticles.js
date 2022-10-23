import * as React from 'react';
import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment ,useState} from 'react';
import Write from "./shared/PediatricianDashboardWritePost";
import App from "./shared/TextEditor";

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Analytics = () => {
    const { palette } = useTheme();
    return (
        <Fragment>
                   <Grid style={{margin:'10px'}}>
                       <Write/>
                       <div className="form-row">
                             <App></App>
                       </div>
                   </Grid>
        </Fragment>
    );
};

export default Analytics;
