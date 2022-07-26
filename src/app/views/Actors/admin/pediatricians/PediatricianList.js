import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import NamePorividerstatcard from "../name-providers/component/NameProviderstatcard";
import NameProviderListTable from "../name-providers/component/NameProviderListTable";
import PediatricianListTable from "./component/pediatricianListTable";
import Pediatricianstatcard from "./component/pediatricianstatcard";


const PediatricianList = () => {


    const ContentBox = styled('div')(({ theme }) => ({
        margin: '30px',
        [theme.breakpoints.down('sm')]: { margin: '16px' },
    }));
    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid container spacing={3}>
                    <Grid item lg={12} md={8} sm={12} xs={12}>
                        <Pediatricianstatcard/>
                        <PediatricianListTable/>
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    );
};

export default PediatricianList;
