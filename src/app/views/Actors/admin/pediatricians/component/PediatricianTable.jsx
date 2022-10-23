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
import { useParams } from "react-router";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';




import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMotherListForAdmin} from "../../../../../services/Admin/Mother/admin_mother_service";
import {
    AcceptPediatrician,
    getPListForAdmin, RejectPediatrician,
    UnBlockPediatrician,
    View_Target_Pediatrician
} from "../../../../../services/Admin/Pediatrician/admin_pediatrician_service";
import * as React from "react";




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
    const [pediatritionList, setpediatritionList] = useState([]);
    const [pid, setPid] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    let { id } = useParams();
    // let history = useHistory();
    const navigate = useNavigate();
    useEffect(() => {
        View_Target_Pediatrician(id).then(data => {
            setpediatritionList(data.pediatricians[0]);
        }).catch(err => {
            console.log(err.error)
        })
    }, []);

    useEffect(async () => {
        // console.log(pediatritionList);
        // console.log(pediatritionList.description);/
    }, [pediatritionList]);



    const Accept = () => {

        AcceptPediatrician(id).then(data => {
            // console.log("data -- "+data);
            navigate(-1);
        }).catch(err => {
            console.log(err.error)
        })
    };
    const Reject= () => {

        RejectPediatrician(id).then(data => {
            // console.log("data -- "+data);
            navigate(-1);
        }).catch(err => {
            console.log(err.error)
        })
    };




    const { palette } = useTheme();
    const bgError = palette.error.main;
    const bgPrimary = palette.primary.main;
    const bgSecondary = palette.secondary.main;

    const mothersList = [
        {
            name: 'Name',
            topic: pediatritionList.name,

        },
        {
            name: 'NIC',
            topic: pediatritionList.NIC,
        },
        {
            name: 'Address ',
            topic: pediatritionList.Address,
        },
        {
            name: 'Contact No',
            topic: pediatritionList.phone_number,
        },
        {
            name: 'Email',
            topic: pediatritionList.email,
        },
        {
            name: 'Currently working at',
            topic: pediatritionList.WorkingAt,
        },
        {
            name: 'Years of experience',
            topic: pediatritionList.experience,
        }


    ];
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Dialog  open={open} onClose={handleClose}>
            <DialogTitle>Reject Pediatrician</DialogTitle>
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
                        <Button variant="contained" color="error" onClick={Reject} >Reject</Button>
                    </div>

                </div>
            </Box>
        </Card>
        </div>



    );
};



export default AstrologerTable;

