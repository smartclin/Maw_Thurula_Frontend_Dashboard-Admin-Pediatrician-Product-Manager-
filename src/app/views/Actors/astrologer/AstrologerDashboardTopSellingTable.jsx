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
import {Routes, Route, useNavigate} from 'react-router-dom';
import {useEffect, useState} from "react";
import {load_line_chart2, load_today_req} from "../../../services/Astrologer/al_dashboard_service";
import {array} from "yup";
//import ViewMessage from "./ViewMessage";
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

const AstrologerDashboardTopSellingTable = () => {

  let u_id=localStorage.getItem("id");
//let req_data=[];
  const [req_data, set_req_data] = useState([]);
  //load today requests



  const [Req, setReq] = useState([]);
  useEffect(() => {
    load_today_req(u_id).then(data => {
      setReq(data);
      console.log(Req)
    }).catch(err => {
      console.log(err.error)
    })
  }, []);

  useEffect(async () => {

    if(Req.today_req){

      set_req_data(Req.today_req)
      console.log(req_data)
     req_data.map((x) => console.log(x.email))


    }
  }, [Req]);


  const { palette } = useTheme();
  const bgError = palette.error.main;
  const bgPrimary = palette.primary.main;
  const bgSecondary = palette.secondary.main;


  const navigate = useNavigate();
  const viewRequest=(replyStatus)=>{

    replyStatus >20 ?
        navigate({pathname:'/al/view_request_with_response'})
        :
        navigate({pathname:'/al/view_request'})

  }
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>Request messages from mothers - Today</Title>
        <div>{date}</div>
      {/*  <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">This Month</MenuItem>
          <MenuItem value="last_month">Last Month</MenuItem>
        </Select>*/}
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 6 }} colSpan={4}>
                Email
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Message
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Status
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={1}>
                Send reply
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {req_data.map((product, index) => (

              <TableRow key={index} hover  onClick={viewRequest}>
                <TableCell colSpan={4} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                  <Box display="flex" alignItems="center">



                    <Paragraph sx={{ m: 0, ml: 4 }}>{product.email}</Paragraph>
                  </Box>
                </TableCell>

                <TableCell align="left" colSpan={2} sx={{ px: 0, textTransform: 'capitalize' }}>
                  {product.message}
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                  {product.request_status ? (
                    product.request_status >0? (
                        <Small bgcolor={bgPrimary}>replied</Small>
                    ) : (
                        <Small bgcolor={bgError}>waiting for reply</Small>
                    )
                  ) : (
                    <Small bgcolor={bgError}>waiting for reply</Small>
                  )}
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={1}>
                  {product.request_status ? (
                      product.request_status =1 ? (
                          <IconButton>
                            <Icon color="success">done</Icon>
                          </IconButton>
                      ) : (
                          <IconButton>
                            <Icon color="primary">sms</Icon>
                          </IconButton>
                      )
                  ) : (
                      <IconButton>
                        <Icon color="primary">sms</Icon>
                      </IconButton>
                  )}

                </TableCell>
              </TableRow>
            )

            )}
          </TableBody>

        </ProductTable>

      </Box>
    </Card>
  );
};

const productList = [
  {

    name: 'maneesha@gmail.com',
    msg: 'request name leters',
    available: 15,
  },
  {

    name: 'amali@gmail.com',
    msg: 'request name leters',
    available: 30,
  },
  {

    name: 'acd@gmail.com',
    msg: 'request name leters',
    available: 35,
  },
  {

    name: 'sara@gmail.com',
    msg: 'request name leters',
    available: 30,
  },

];

export default AstrologerDashboardTopSellingTable;
