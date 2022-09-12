import { Box, Card, Grid, Icon, IconButton, styled, Tooltip,Link } from '@mui/material';
import { Small } from 'app/components/Typography';
import {useEffect,useState} from "react";
import {getFollowerListForPediatrician, getPostList} from "../../../../services/Pediatrician/pt_service";

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

const PediatricianDashboardStatCards = () => {

  const [articleList, setArticleList] = useState([]);
  const [all, setAll] = useState(0);

  const [followerList, setFollowerList] = useState([]);
  const [fall, setFall] = useState(0);

  useEffect((id=1) => {
    getPostList(id).then(data => {
      setArticleList(data);
    }).catch(err => {
      console.log(err.error)
    })
  }, []);

  useEffect(async () => {
    let tall=0;
    articleList.article ? articleList.article.map((mother, index) => {
      tall++;
    }) : console.log(tall)

    setAll(tall)
  }, [articleList]);

  useEffect((id=1) => {
    getFollowerListForPediatrician(id=1).then(data => {
      setFollowerList(data);
    }).catch(err => {
      console.log(err.error)
    })
  }, []);

  useEffect(async () => {
    let fall=0;
    followerList.followers ? followerList.followers.map((mother, index) => {
      fall++;
    }) : console.log(followerList)

    setFall(fall)
  }, [followerList]);
  const cardList = [
    { name: 'Followers', amount: fall, icon: 'group' },
    { name: 'No of articles', amount: all, icon: 'check_circle' },

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

export default PediatricianDashboardStatCards;
