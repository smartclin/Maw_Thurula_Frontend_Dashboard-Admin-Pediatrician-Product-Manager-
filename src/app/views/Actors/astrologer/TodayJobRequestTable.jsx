import MaterialTable from "material-table";
import * as React from 'react';
import PendingIcon from '@mui/icons-material/Pending';
import DoneIcon from '@mui/icons-material/Done';
import {useNavigate} from "react-router-dom";
import {green} from "@mui/material/colors";
import {useTheme} from "@mui/material";
import {useEffect, useState} from "react";
import {load_today_req} from "../../../services/Astrologer/al_service";

const TodayJobRequestTable=()=> {
    const navigate = useNavigate();
    const viewRequest=(replyStatus)=>{
        replyStatus ?
            navigate({pathname:'/al/view_request_with_response'})
            :
            navigate({pathname:'/al/view_request'})

    }



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
    let mainDiv={
        margin:'50px',

    };

    let tableStyle={
        padding:'10px 25px '
    };
    const { palette } = useTheme();
    let u_id=localStorage.getItem("id");
//let req_data=[];
    const [req_data, set_req_data] = useState([]);
    //load today requests
    let table_data=[];


    const [Req, setReq] = useState([]);
    const [TableReq, setTableReq] = useState([]);
    useEffect(() => {
        load_today_req(u_id).then(data => {
            setReq(data);
            console.log(Req)
        }).catch(err => {
            console.log(err.error)
        })
    }, [Req]);

    useEffect(async () => {

        if(Req.req){

            set_req_data(Req.req)
            console.log(req_data)

            table_data=req_data.map((x) => ({"name":x.first_name,"Email":x.email,"Date":x.request_date,"Status":x.request_status}))
            setTableReq(table_data);
            console.log(TableReq);

        }
    }, [Req]);



    return (
        <div style={mainDiv}>

{/*
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
        </Dialog>*/}
        <MaterialTable style={tableStyle}
            title="Request List"
            columns={[

                { title: 'Name', field: 'name',width: "20%" },
                { title: 'Email', field: 'Email',width: "20%" },
                { title: 'Date', field: 'Date',width: "10%" },
                { title: 'Status', field: 'Status',lookup:{0:'Waiting for reply',1:'Replied'},width: "10%" ,hidden:true},
            ]}
            data={TableReq}
                      /* icons-material={{
                           Pending: () => <PendingIcon style={{ color: "red" }} />,
                           Done: () => <DoneIcon style={{ color: "orange" }} />
                       }}*/
            onRowClick={(event, rowData) => viewRequest(rowData.Status)}
            actions={[
                (rowData) => {
                    return rowData.Status
                        ? { icon:() =><DoneIcon style={{color:"#32a85c"}}/>,tooltip:'Replied' ,onClick: (rowData) => { /* anythink */ } }
                        : { icon:() =><PendingIcon style={{color:"#f2b13f"}}/>,tooltip:'Waiting for reply' , onClick: (rowData) => { handleClickOpen()} }
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
export default TodayJobRequestTable;