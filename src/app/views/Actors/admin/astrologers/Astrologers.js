import {Button, Card, Grid, styled, useTheme} from '@mui/material';
import { Fragment } from 'react';


const Astrologers = () => {

    const ContentBox = styled('div')(({ theme }) => ({
        margin: '30px',
        [theme.breakpoints.down('sm')]: { margin: '16px' },
    }));
    return (
        <Fragment>
            <h1>astrologer</h1>
            {/*<Example/>*/}

        </Fragment>
    );
};

export default Astrologers;
