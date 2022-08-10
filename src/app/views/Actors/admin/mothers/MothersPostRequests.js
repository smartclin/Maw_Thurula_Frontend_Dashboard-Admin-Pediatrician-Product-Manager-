import {Grid, styled, useTheme} from '@mui/material';
import {Fragment} from 'react';
import MotherStatCards from "./component/Motherstatcard";
import MotherListTable from "./component/MotherListTable";
import MotherPostListTable from "./component/MotherPostsListTable";



const MothersPostRequests = () => {


    const ContentBox = styled('div')(({ theme }) => ({
        margin: '30px',
        [theme.breakpoints.down('md')]: { margin: '16px' },
    }));
    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>

                        <MotherPostListTable/>
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    );
};

export default MothersPostRequests;
