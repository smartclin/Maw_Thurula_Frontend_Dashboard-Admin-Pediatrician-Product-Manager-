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



import Button from '@mui/material/Button';
import * as React from "react";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {useNavigate} from "react-router-dom";

import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import {AcceptNP, RejectNP, View_Target_NP} from "../../../../services/Admin/Name_Provider/admin_np_service";

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



const AstrologerTable = () => {
    const [open, setOpen] = React.useState(false);
    const [npList, setnpList] = useState([]);
    const { palette } = useTheme();
    const bgError = palette.error.main;
    const bgPrimary = palette.primary.main;
    const bgSecondary = palette.secondary.main;

    let { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        View_Target_NP(id).then(data => {
            setnpList(data.np[0]);
        }).catch(err => {
            console.log(err.error)
        })
    }, []);

    useEffect(async () => {
        // console.log(npList);
        // console.log(npList.name);
    }, [npList]);
    const mothersList = [
        {
            name: 'Name',
            topic: npList.name,

        },
        {
            name: 'NIC',
            topic: npList.NIC,
        },
        {
            name: 'Address ',
            topic: npList.address,
        },
        {
            name: 'Contact No',
            topic: npList.phone_number,
        },
        {
            name: 'Email',
            topic: npList.email,
        },

        {
            name: 'Years of experience',
            topic: npList.Years_of_experience
            ,
        },
        {
            name: 'Service charge',
            topic: npList.service_charge
            ,
        }


    ];
    const handleClose = () => {
        setOpen(false);
    };
    const Accept = () => {

        AcceptNP(id).then(data => {
            // console.log("data -- "+data);
            navigate(-1);
        }).catch(err => {
            console.log(err.error)
        })
    };
    const handleRejectClick= () => {
        setOpen(true);
    };
    const Reject= () => {

        RejectNP(id).then(data => {
            // console.log("data -- "+data);
            navigate(-1);
        }).catch(err => {
            console.log(err.error)
        })
    };

    return (
        <div>
            <Dialog  open={open} onClose={handleClose}>
                <DialogTitle>Reject Name Provider</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure about this action?
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={Reject}>Yes</Button>
                    <Button onClick={handleClose}>No</Button>
                </DialogActions>
            </Dialog>
            <Card elevation={3} sx={{ pt: '20px', mb: 3,mt:2,ml:2}}>
                <CardHeader sx={{  ml: 3 }}>
                    <Title sx={{fontSize: 34}}> User Details </Title>
                </CardHeader>


                <Box overflow="auto">
                    <ProductTable>


                        <TableBody>
                            {mothersList.map((postItem, index) => (
                                <TableRow key={index} hover>
                                    <TableCell colSpan={3} align="left" sx={{ px: 0, textTransform: 'capitalize' }}>
                                        <Box display="flex" alignItems="center">
                                            <Paragraph sx={{ m: 0, ml: 4 }}>{postItem.name}</Paragraph>
                                        </Box>
                                    </TableCell>

                                    <TableCell align="left" colSpan={3} sx={{ px: 0, textTransform: 'capitalize' }}>
                                        { postItem.topic }
                                    </TableCell>



                                </TableRow>
                            ))}
                        </TableBody>
                    </ProductTable>
                    <div style={{display:"flex",marginLeft:43,marginBottom:30, marginTop:10}} >

                        <div className='m-1'>
                            <Button variant="contained" color="success" onClick={Accept} >Accept</Button>
                        </div>

                        <div className='m-1'>
                            <Button variant="contained" color="error" onClick={handleRejectClick} >Reject</Button>
                        </div>

                    </div>
                </Box>
            </Card>
        </div>


    );
};

const mothersList = [
    {
        name: 'Name',
        topic: "Hansana Ranaweera",

    },
    {
        name: 'NIC',
        topic: "199910923456",
    },
    {
        name: 'Birth Date',
        topic: "1999/10/23",
    },
    {
        name: 'Address ',
        topic: "No.53 Akuressa",
    },
    {
        name: 'Contact No',
        topic: "0713805999",
    },
    {
        name: 'Email',
        topic: "hansna@gmail.com",
    },
    {
        name: 'Currently working at',
        topic: "Home",
    },
    {
        name: 'Qualifications',
        topic: "Empty",
    },

];

export default AstrologerTable;

