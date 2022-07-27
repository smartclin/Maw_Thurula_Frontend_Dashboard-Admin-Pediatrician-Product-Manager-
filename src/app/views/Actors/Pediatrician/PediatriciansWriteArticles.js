import * as React from 'react';
import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import PediatricianSingleArticle from "../admin/pediatricians/component/PediatriciansSingleArticle";
import Posts from "../admin/pediatricians/component/PostList";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Analytics = () => {
    const { palette } = useTheme();

    return (
        <Fragment>
            <ContentBox className="analytics">

            </ContentBox>
               <ContentBox className="analytics">
                   {/*<Grid container spacing={3}>*/}
                   <Grid>

                       <Posts/>

                   </Grid>

               </ContentBox>

        </Fragment>
    );
};

export default Analytics;
