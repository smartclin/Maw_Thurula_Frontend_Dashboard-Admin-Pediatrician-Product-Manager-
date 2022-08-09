import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
// import Astrologerstatcard from "../name-providers/component/NameProviderstatcard";
// import AstrologerListTable from "../name-providers/component/NameProviderListTable";
// import AstrologerListTable from "./component/ListTable";
// import Astrologerstatcard from "./component/Astrologerstatcard";
//  import AstrologerTable from "./component/AstrologerTable";
import AstrologerTable from "./AstrologerTable";


const AstrologerList = () => {


    const ContentBox = styled('div')(({ theme }) => ({
        margin: '30px',
        [theme.breakpoints.down('sm')]: { margin: '16px' },
    }));
    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid container spacing={3}>
                    <Grid item lg={12} md={8} sm={12} xs={12}>
                        <AstrologerTable>

                        </AstrologerTable>
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    );
};

export default AstrologerList;
