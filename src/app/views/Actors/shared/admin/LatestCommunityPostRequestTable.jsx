import {
  Avatar,
  Box,
  Card,
  Icon,
  IconButton,
  MenuItem,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';
import { Paragraph } from 'app/components/Typography';

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: 'pre',
  '& small': {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  '& td': { borderBottom: 'none' },
  '& td:first-of-type': { paddingLeft: '16px !important' },
}));

const Small = styled('small')(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  overflow: 'hidden',
  background: bgcolor,
  boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}));



const LatestCommunityPostRequestTable = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title> Community Post Requests </Title>

      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 3 }} colSpan={3}>
                Name
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={3}>
                Topic
              </TableCell>
              <TableCell sx={{ px: 0 }} style={{ textAlign: "center" , paddingRight: "8px"}} colSpan={1}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {mothersList.map((postItem, index) => (
              <TableRow key={index} hover>
                <TableCell colSpan={3} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                  <Box display="flex" alignItems="center">
                    <Icon className="icon" style={{ color: bgPrimary}} >{"pregnant_woman"}</Icon>
                    <Paragraph sx={{ m: 0, ml: 4 }}>{postItem.name}</Paragraph>
                  </Box>
                </TableCell>

                <TableCell align="left" colSpan={3} sx={{ px: 0, textTransform: 'capitalize' }}>
                  { postItem.topic }
                </TableCell>


                <TableCell sx={{ px: 0 }}  style={{ textAlign: "center"}} colSpan={1}>
                  <IconButton>
                    <Icon color="primary">check</Icon>
                  </IconButton>
                  <IconButton>
                    <Icon color="warning">close</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  );
};

const mothersList = [
  {
    name: 'Maduni Tharukshi',
    topic: "Assigment denne ne",
    available: 15,
  },
  {
    name: 'Lulakshi Naduni',
    topic: "Prasannage duka ahanna weno",
    available: 30,
  },
  {
    name: 'Akila ',
    topic: "prasannath den bono",
    available: 35,
  },
  {
    name: 'Yasas',
    topic: "Apita bonna thiyena dewal adu weno",
    available: 0,
  },
  {
    name: 'Prasanna',
    topic: 1190,
    available: 5,
  },
];

export default LatestCommunityPostRequestTable;
