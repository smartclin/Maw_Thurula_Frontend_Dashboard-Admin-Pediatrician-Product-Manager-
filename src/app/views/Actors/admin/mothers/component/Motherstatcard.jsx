import { Box, Grid, Icon, IconButton, styled, Tooltip } from '@mui/material';
import { Small } from 'app/components/Typography';
import * as React from 'react';
import Card from '@mui/material/Card';
import {Fragment, useEffect, useState} from 'react';
import {getMotherListForAdmin} from "../../../../../services/Admin/Mother/admin_mother_service";
// import {getMotherList, getnofComments} from "../../../../../services/Admin/Mother/";

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px !important',
    background: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}));

const ContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    '& small': { color: theme.palette.text.secondary },
    '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
}));

const Heading = styled('h6')(({ theme }) => ({
    margin: 0,
    marginTop: '4px',
    fontSize: '14px',
    fontWeight: '500',
    color: theme.palette.primary.main,
}));

const MotherStatCards = () => {

    const [motherList, setMotherList] = useState([]);
    const [all, setAll] = useState(0);
    const [block, setBlock] = useState(0);
    const [active, setActive] = useState(0);


    const mlist=[]




    useEffect(() => {
        getMotherListForAdmin().then(data => {
            setMotherList(data);
        }).catch(err => {
            console.log(err.error)
        })
    }, []);

    useEffect(async () => {
        let tall=0;
        let tblock=0;
        let tactive=0;
        motherList.students ? motherList.students.map((mother, index) => {
            tall++;
            if(mother.STATUS == 1){
                tblock++;
            }
            if(mother.login_status==1){
                tactive++;
            }
        }) : console.log("")

        setAll(tall)
        setActive(tactive)
        setBlock(tblock)
    }, [motherList]);

    const cardList = [
        { name: 'Registered Mothers', amount: all, icon: 'pregnant_woman' },
        { name: 'Active Mothers', amount: active, icon: 'woman' },
        { name: 'Blocked Mothers', amount: block, icon: 'person_offIcon' },
    ];

    return (
        <Grid container spacing={3} sx={{ mb: '24px' }}>
            {cardList.map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                    <StyledCard elevation={6}>
                        <ContentBox>
                            <Icon className="icon">{item.icon}</Icon>
                            <Box ml="12px">
                                <Small>{item.name}</Small>
                                <Heading>{item.amount}</Heading>
                            </Box>
                        </ContentBox>


                    </StyledCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default MotherStatCards;
