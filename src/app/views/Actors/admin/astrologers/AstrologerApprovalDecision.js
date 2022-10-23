import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
// import Astrologerstatcard from "../name-providers/component/NameProviderstatcard";
// import AstrologerListTable from "../name-providers/component/NameProviderListTable";
// import AstrologerListTable from "./component/ListTable";
// import Astrologerstatcard from "./component/Astrologerstatcard";
//  import AstrologerTable from "./component/AstrologerTable";
import AstrologerTable from "./AstrologerTable";
import PediatricianProfilePic from "../pediatricians/component/PediatricianProfilePic";
import AstrologerProfilePic from "./component/AstrologerProfilePic";


const AstrologerList = () => {


    const ContentBox = styled('div')(({ theme }) => ({
        margin: '30px',
        [theme.breakpoints.down('sm')]: { margin: '16px' },
    }));
    return (
        <Fragment>
            <ContentBox >
                <Grid >
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Grid container spacing={2}>

                        <Grid item xs={7}>
                            <AstrologerTable>

                            </AstrologerTable>
                        </Grid>
                        <Grid item xs={5}>
                            <AstrologerProfilePic/>
                        </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    );
};

export default AstrologerList;
