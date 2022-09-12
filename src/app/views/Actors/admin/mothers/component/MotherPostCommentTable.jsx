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
    Button,
    TableHead,
    TableRow,
    useTheme,
} from '@mui/material';
import { Paragraph } from 'app/components/Typography';
import {Fragment, useEffect, useState,useRef} from 'react';
import {
    BlockMother,
    delete_Comment, getMotherListForAdmin,
    getMotherPostsReplyListForAdmin,
    getRecentMotherPostForAdmin, warningForComments
} from "../../../../../services/Admin/Mother/admin_mother_service";
import {useParams} from "react-router";

import * as React from 'react';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";



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

const AdminPostCommentMother = () => {
    const { palette } = useTheme();
    let { id } = useParams();
    const [MotherPostsReplyList, setMotherPostsReplyList] = useState([]);
    useEffect(() => {
        getMotherPostsReplyListForAdmin(id).then(data => {
            setMotherPostsReplyList(data.data)
            // console.log("Data ------------")
            // console.log(MotherPostsReplyList)
            // console.log(data.data)
        }).catch(err => {
            console.log(err.error)
        })
    }, []);
    function DateReturn(date){
        const today = new Date(date);
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedToday = dd + '/' + mm + '/' + yyyy;
        return formattedToday
    }
    function DeleteComment(cid){
        delete_Comment(cid).then(x => {
            getMotherPostsReplyListForAdmin(id).then(data => {
                setMotherPostsReplyList(data.data)
            }).catch(err => {
                console.log(err.error)
            })
        }).catch(err => {
            console.log(err.error)
        })

    }
    const [open, setOpen] = React.useState(false);
    const [warning, setwarning] = React.useState("");
    const [uid, setUid] = React.useState(0);


    const SendWarn = (uid,comment,date) => {

        // console.log("Id : "+uid)
        // console.log("comment : "+comment)
        // console.log("date : "+date)
        let mg="You have this warning message for commenting "+"\""+ comment+"\""+ " on "+date
        // console.log("mg "+mg)
        setwarning(mg)
        setUid(uid)
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const valueRef = useRef('')
    const sendValue = (cid) => {
        // console.log(valueRef.current.value)
        // console.log("Id : "+uid)
        // console.log("mg : "+warning)
        let warn=valueRef.current.value + "\n"+warning
        // console.log(warn)
        warningForComments(uid,warn).then(data => {
            // console.log("Succesfully added ")

        }).catch(err => {
            console.log(err.error)
        })
        setOpen(false);
    }
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Let's just send a warning message for now, shall we?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Notification message
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="reason"
                        type="text"
                        fullWidth
                        variant="standard"
                        inputRef={valueRef}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={sendValue}>Send</Button>
                </DialogActions>
            </Dialog>
            <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
                <CardHeader style={{ paddingLeft: 15}}>
                    <Title style={{marginLeft:0}}>Comments Section</Title>

                    {/*<Select size="small" defaultValue="this_month">*/}
                    {/*  <MenuItem value="this_month">This Month</MenuItem>*/}
                    {/*  <MenuItem value="last_month">Last Month</MenuItem>*/}
                    {/*</Select>*/}
                </CardHeader>

                <Box overflow="auto">
                    <ProductTable>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ px: 2 }} colSpan={2}>
                                    Email
                                </TableCell>
                                <TableCell sx={{ px: 4 }} colSpan={4}>
                                    Comments
                                </TableCell>
                                <TableCell sx={{ px: 3 }} colSpan={2}>
                                    Date
                                </TableCell>

                                <TableCell sx={{ px: 2 }} colSpan={2}>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {MotherPostsReplyList.map((product, index) => (
                                <TableRow key={index} hover>
                                    <TableCell align="left" colSpan={2} sx={{ px: 0,  }}>
                                        {product.email}
                                    </TableCell>
                                    <TableCell colSpan={4} align="left" sx={{ px: 0,  }}>
                                        <Box display="flex" justifyContent="flex-start" alignItems="flex-start" >
                                            <Paragraph sx={{ m: 0, ml: 4 }}>{product.reply_content}</Paragraph>
                                        </Box>
                                    </TableCell>

                                    <TableCell sx={{ px: 3 }} align="left" colSpan={2}>
                                        {DateReturn(product.date)}
                                    </TableCell>

                                    <TableCell sx={{ px: 0 }} colSpan={2}>
                                        <IconButton onClick={()=>{DeleteComment(product.reply_id)}}>
                                            <Icon color="warning"  >delete_forever</Icon>
                                        </IconButton>
                                        <IconButton onClick={()=>{SendWarn(product.user_id,product.reply_content,DateReturn(product.date))}}>
                                            <Icon color="primary">message</Icon>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </ProductTable>
                </Box>
            </Card>
        </div>


    );
};

const productList = [
    {
        email:'maduni12@gmail.com',
        comment: 'Baby is swallowing during feeding',
        date:'2022/06/05',
        price: 100,
        available: 15,
    },
    {
        email:'wikramanayake@gmail.com',
        comment: 'If your baby seems satisfied after breastfeeding',
        price: 1500,
        available: 30,
        date:'2022/06/04',
    },
    {
        email:'maduni12@gmail.com',
        comment: 'Your breasts should feel softer at the end of a feeding',
        price: 1900,
        available: 35,
        date:'2022/06/03',
    },
    {
        email:'wikramanayake@gmail.com',
        comment: 'It’s normal for a newborn’s weight to fluctuate during the first few days of their life',
        price: 100,
        available: 0,
        date:'2022/06/02',
    }
];

export default AdminPostCommentMother;
