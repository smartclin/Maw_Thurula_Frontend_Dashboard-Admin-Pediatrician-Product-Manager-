import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import NamePorividerstatcard from "../name-providers/component/NameProviderstatcard";
import NameProviderListTable from "../name-providers/component/NameProviderListTable";
import PediatricianListTable from "./component/pediatricianListTable";
import Pediatricianstatcard from "./component/pediatricianstatcard";
import PediatricianTable from "./component/PediatricianTable";
import PediatricianProfilePic from "./component/PediatricianProfilePic";


const PediatricianList = () => {


    const ContentBox = styled('div')(({ theme }) => ({
        // marginTop : '20px',
        [theme.breakpoints.down('sm')]: { margin: '16px' },
    }));
    return (
        <Fragment>
            <ContentBox >
                <Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={7}>
                                <PediatricianTable>

                                </PediatricianTable>
                            </Grid>
                            <Grid item xs={5}>
                                <PediatricianProfilePic/>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    );
};

export default PediatricianList;
