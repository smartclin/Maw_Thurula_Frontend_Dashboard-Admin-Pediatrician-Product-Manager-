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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router-dom";


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



const PediatricianStatCards = () => {
  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;

  return (
      <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
        <CardHeader>
          <Title> Pediatrician Requests </Title>

        </CardHeader>

        <Box overflow="auto">
          <ProductTable>


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

                      <Link to="/admin/PediatricianApprovalDecision" className="link">
                        View Profile
                      </Link>



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

  },
  {
    name: 'Lulakshi Naduni',

  },
  {
    name: 'Akila ',

  },
  {
    name: 'Yasas',

  },
  {
    name: 'Prasanna',

  },
];

export default PediatricianStatCards;
