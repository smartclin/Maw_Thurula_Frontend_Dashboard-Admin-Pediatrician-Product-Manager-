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

const MotherPostListTable=()=> {

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
            title="Recent Community Post"
            columns={[

                { title: 'Name', field: 'name',width: "20%",
                    cellStyle: {
                        paddingLeft:30
                    },
                    headerStyle: {
                        paddingLeft:30
                    } },
                { title: 'Posts', field: 'Posts',width: "1%"},
                { title: 'Title', field: 'Title',width: "30%" },
                { title: 'Date', field: 'date',width: "30%" },
            ]}
            data={[
                {
                    id:'1',
                    name: 'Akila Anjana',
                    Posts: 1987,
                    date:'2022/08/10',
                    Title: 'demo title demo title demo title demo title demo title demo title'
                },
                {
                    id:'1',
                    name: 'Akila Anjana',
                    Posts: 1987,
                    date:'2022/08/10',
                    Title: 'demo title'
                },
                {
                    id:'1',
                    name: 'Akila Anjana',
                    Posts: 1987,
                    date:'2022/08/10',
                    Title: 'demo title'
                },
                {
                    id:'1',
                    name: 'Akila Anjana',
                    Posts: 1987,
                    date:'2022/08/10',
                    Title: 'demo title'
                },
                {
                    id:'1',
                    name: 'Akila Anjana',
                    Posts: 1987,
                    date:'2022/08/10',
                    Title: 'demo title'
                },


            ]}
            onRowClick={(event, rowData) => handleOnClick()}
            actions={[
                {
                    icon: CheckCircleIcon,
                    tooltip: 'Accept',
                    onClick: (event, rowData) => alert("You saved " + rowData.name),
                },
                {
                    icon: CancelIcon,
                    tooltip: 'Reject',
                    onClick: (event, rowData) => alert("You saved " + rowData.name),
                    iconProps: { color:  'primary' },
                }
            ]}
            options={{sorting:true, exportAllData:true ,exportButton:true ,actionsColumnIndex: -1,
                paging: true,
            }}
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
export default MotherPostListTable;
