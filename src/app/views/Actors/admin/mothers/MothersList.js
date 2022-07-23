import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import AdminStatCards from "../../shared/admin/AdminStatCards";
import DateTimePicker from '@mui/x-date-pickers-pro/DateTimePicker';

import Button from '@mui/material/Button';

const MothersList = () => {

    const cardList = [
        { name: 'Registered Mothers', amount: 3050, icon: 'home' },
        { name: 'Current Active Mothers', amount: 3050, icon: 'local_hospital' },
        { name: 'Astrologers', amount: 3050, icon: 'recent_actors' },
        { name: 'Name Providers', amount: 3050, icon: 'rate_review' },
    ];
    return (
        <Fragment>
            <h1> Mother's List HI Akhila</h1>

            <AdminStatCards cardList={cardList} />
            <Button variant="contained">Hello World</Button>;
            <DateTimePicker></DateTimePicker>
        </Fragment>
    );
};

export default MothersList;
