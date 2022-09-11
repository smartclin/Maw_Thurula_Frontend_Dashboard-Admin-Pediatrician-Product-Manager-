import { Box, Grid, Icon, IconButton, styled, Tooltip } from '@mui/material';
import { Small } from 'app/components/Typography';
import * as React from 'react';
import Card from '@mui/material/Card';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PendingIcon from '@mui/icons-material/Pending';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

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

const PediatriciansRequestStatCards = () => {
    const cardList = [

        { name: 'Pending Requests', amount: 30, icon: 'pending_actions', size:45},
        { name: 'Registered Pediatricians', amount: 600, icon: 'person_rounded',size:57 },
        { name: 'Blocked Pediatricians', amount: 40, icon: 'person_offIcon', size:45},
    ];

    return (
        <Grid container spacing={3} sx={{ mb: '24px' }}>
            {cardList.map((item, index) => (
                <Grid item xs={12} md={4} key={index} >
                    <StyledCard elevation={6} style={{maxHeight:100 ,minHeight:100}}>
                        <ContentBox>
                            <Icon className="icon" style={{fontSize:item.size}}>{item.icon}</Icon>
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

export default PediatriciansRequestStatCards;
