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

                { title: 'Title', field: 'Title',width: "30%",
                    cellStyle: {
                        paddingLeft:30
                    },
                    headerStyle: {
                        paddingLeft:30
                    } },
                { title: 'comments', field: 'comments',width: "1%"},
                { title: 'like', field: 'like',width: "1%" },
                { title: 'Date', field: 'date',width: "10%" },
            ]}
            data={[
                {
                    id:'1',
                    like: 123,
                    comments: 198,
                    date:'2022/08/10',
                    Title: 'demo title demo title demo title demo title demo title demo title'
                },
                {
                    id:'1',
                    like: 123,
                    comments: 198,
                    date:'2022/08/10',
                    Title: 'demo title demo title demo title demo title demo title demo title'
                },
                {
                    id:'1',
                    like: 123,
                    comments: 198,
                    date:'2022/08/10',
                    Title: 'demo title demo title demo title demo title demo title demo title'
                },
                {
                    id:'1',
                    like: 123,
                    comments: 198,
                    date:'2022/08/10',
                    Title: 'demo title demo title demo title demo title demo title demo title'
                },
                {
                    id:'1',
                    like: 123,
                    comments: 198,
                    date:'2022/08/10',
                    Title: 'demo title demo title demo title demo title demo title demo title'
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
