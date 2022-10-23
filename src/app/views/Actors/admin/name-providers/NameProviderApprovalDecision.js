import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import NameProviderTable from "./NameProviderTable";
import AstrologerTable from "../astrologers/AstrologerTable";
import AstrologerProfilePic from "../astrologers/component/AstrologerProfilePic";
import NpProfilePic from "./component/NpProfilePic";



const NameProviderList = () => {
    const ContentBox = styled('div')(({ theme }) => ({
        margin: '30px',
        [theme.breakpoints.down('sm')]: { margin: '16px' },
    }));
    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid >
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Grid container spacing={2}>

                            <Grid item xs={7}>
                                <NameProviderTable>

                                </NameProviderTable>
                            </Grid>
                            <Grid item xs={5}>
                                <NpProfilePic/>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>

            </ContentBox>
        </Fragment>
    );
};

export default NameProviderList;
