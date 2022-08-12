import MaterialTable from "material-table";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import VisibilityIcon from '@mui/icons-material/Visibility';

import * as React from 'react';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import {useNavigate} from 'react-router-dom';

const SingleMotherPostListTable=()=> {

    const navigate = useNavigate();
    // const handleOnClick = () => navigate('/admin/mother_details/2', {replace: false});
    const handleOnClick = () => navigate('/admin/target_mothers_full_post_list/2', {replace: false});

    // const handleOnClick = () => navigate('/admin/mother_details', {replace: false});

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const checkStatus=(data)=>{
        console.log("data - "+data)
        return true
    }

    return (
        <div>


        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Reason for this action</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    This message will show on this users window
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="reason"
                    label="Reason for Block"
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Submit</Button>
            </DialogActions>
        </Dialog>
        <MaterialTable
            title="Previous posts"
            columns={[

                { title: 'Title', field: 'Title',width: "20%",
                    cellStyle: {
                        paddingLeft:30
                    },
                    headerStyle: {
                        paddingLeft:30
                    } },
                { title: 'comments', field: 'comments',width: "5%"},
                { title: 'like', field: 'like',width: "5%" },
                { title: 'Date', field: 'date',width: "20%" },
            ]}
            data={[
                {
                    id:'1',
                    like: 40,
                    comments: 23,
                    date:'2022/08/10',
                    Title: 'Baby\'s constant crying '
                },
                {
                    id:'1',
                    like: 12,
                    comments: 3,
                    date:'2022/08/10',
                    Title: 'You bring your little one home from the hospital and suddenly he starts sneezing.'
                },
                {
                    id:'1',
                    like: 34,
                    comments: 5,
                    date:'2022/08/10',
                    Title: 'New moms put a lot of pressure on themselves to breastfeed like a pro right after giving birth'
                },
                {
                    id:'1',
                    like: 23,
                    comments: 7,
                    date:'2022/08/10',
                    Title: 'After hours of labor you might just look at your newborn and feel more tired than in love. '
                },
                {
                    id:'1',
                    like: 67,
                    comments: 3,
                    date:'2022/08/10',
                    Title: 'Hitting Milestones'
                },
                {
                    id:'1',
                    like: 87,
                    comments: 9,
                    date:'2022/08/10',
                    Title: ' creating an eating and sleeping schedule for your baby is important '
                },
                {
                    id:'1',
                    like: 12,
                    comments: 0,
                    date:'2022/08/10',
                    Title: 'Once your baby arrives, it might feel as though everyone you know wants to swing by to sneak a peek at the new addition'
                },


            ]}
            onRowClick={(event, rowData) => handleOnClick()}

            options={{sorting:true, exportAllData:true ,paging: true,}}
            localization={{
                pagination: {
                    labelDisplayedRows: '',
                    labelRowsPerPage:''
                },
            }}
        />
        </div>
    )
}
export default SingleMotherPostListTable;
