import {
    Avatar,
    Box,
    Card, Grid,
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
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {View_Target_Pediatrician} from "../../../../../services/Admin/Pediatrician/admin_pediatrician_service";

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



const PediatricianProfilePic = () => {
    const [pediatritionList, setpediatritionList] = useState([]);
    let { id } = useParams();
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
    const { palette } = useTheme();
    const bgError = palette.error.main;
    const bgPrimary = palette.primary.main;
    const bgSecondary = palette.secondary.main;

    return (
        <Card elevation={3} sx={{ pt: '20px', height: 476,mt:2, mr:2 }}>

            <Grid
                container
                justifyContent="center"
                // alignItems={"center"}
                spacing={3}
                my={5}
            >
                <CardHeader sx={{  ml: 3 }}>
                    <Box
                        component="img"
                        sx={{
                            height: 350,
                            width: 350,
                            maxHeight: { xs: 350 },
                            maxWidth: { xs: 350 },
                            borderRadius: '3%',
                            borderColor: 'secondary.main'
                        }}
                        alt="The house from the offer."
                        src={pediatritionList.profile_picture}
                    />
                </CardHeader>
            </Grid>


        </Card>



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
        topic: "Akuressa Hospital",
    },
    {
        name: 'Qualifications',
        topic: "Empty",
    },

];

export default PediatricianProfilePic;

