import { Box, Card, Grid, Icon, IconButton, styled, Tooltip } from '@mui/material';
import { Small } from 'app/components/Typography';
import {useEffect, useState} from "react";
import {getMotherListForAdmin} from "../../../../../services/Admin/Mother/admin_mother_service";
import {getNPListForAdmin} from "../../../../../services/Admin/Name_Provider/admin_np_service";
import {getPListForAdmin} from "../../../../../services/Admin/Pediatrician/admin_pediatrician_service";
import {getAListForAdmin} from "../../../../../services/Admin/Astrologer/admin_astrologer_service";

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

const AdminStatCards = (  ) => {
    const [motherList, setMotherList] = useState([]);
    const [NPList, setNPList] = useState([]);
    const [AList, setAList] = useState([]);
    const [PList, setPList] = useState([]);

    const [Mall, setMAll] = useState(0);
    const [Astroall, setAstroall] = useState(0);
    const [NPall, setNPAll] = useState(0);
    const [Pall, setPAll] = useState(0);
    useEffect(() => {
      getMotherListForAdmin().then(data => {
        setMotherList(data);
      }).catch(err => {
        console.log(err.error)
      })
      getNPListForAdmin().then(data => {
        setNPList(data);
      }).catch(err => {
        console.log(err.error)
      })
      getPListForAdmin().then(data => {
        setPList(data);
      }).catch(err => {
        console.log(err.error)
      })
      getAListForAdmin().then(data => {
        setAList(data);
      }).catch(err => {
        console.log(err.error)
      })
    }, []);
    useEffect(async () => {

      let tall=0;
      motherList.students ? motherList.students.map((mother, index) => {
        tall++;
      }) : console.log("")
      // console.log(tall);
      setMAll(tall)
    }, [motherList]);
    useEffect(async () => {
      // console.log("NP",NPList)
      let tall=0;
      NPList.np ? NPList.np.map((p, index) => {
        tall++;
      }) : console.log("")
      // console.log(tall);
      setNPAll(tall)
    }, [NPList]);
    useEffect(async () => {
      let tall=0;
      PList.paediatrician ? PList.paediatrician.map((p, index) => {
        tall++;
      }) : console.log("")
      // console.log(tall);
      setPAll(tall)
    }, [PList]);
    useEffect(async () => {
      let tall=0;
      AList.astrologers ? AList.astrologers.map((p, index) => {
        tall++;
      }) : console.log("")
      // console.log(tall);
      setAstroall(tall)
    }, [AList]);

  const cardList = [
    { name: 'Registered Mothers', amount: Mall, icon: 'pregnant_woman' },
    { name: 'Pediatricians', amount: Pall, icon: 'local_hospital' },
    { name: 'Astrologers', amount: Astroall, icon: 'recent_actors' },
    { name: 'Name Providers', amount: NPall, icon: 'rate_review' },
  ];
  return (
    <Grid container spacing={3} sx={{ mb: '24px' }}>
      {cardList.map((item, index) => (
        <Grid item xs={12} md={6} key={index}>
          <StyledCard elevation={6}>
            <ContentBox>
              <Icon className="icon">{item.icon}</Icon>
              <Box ml="12px">
                <Small>{item.name}</Small>
                <Heading>{item.amount}</Heading>
              </Box>
            </ContentBox>

            <Tooltip title="View Details" placement="top">
              <IconButton>
                <Icon>arrow_right_alt</Icon>
              </IconButton>
            </Tooltip>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default AdminStatCards;
