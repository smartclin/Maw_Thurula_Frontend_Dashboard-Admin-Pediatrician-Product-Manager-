import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import MaterialTable from 'material-table';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Delete} from "@mui/icons-material";
const MothersList = () => {


    let tableDiv={

        margin : '10px',
        padding:'10px',

    };
    let matTable={
        padding: '20px'
    };

    return (
        <Fragment>
            <h1> Mother's List</h1>
            <div style={tableDiv}>
                <MaterialTable style={matTable}
                    title="Mothers"
                    columns={[
                        { title: 'Mother Email', field: 'MotherEmail' },
                        { title: 'View Report', field: 'ViewReport'},
                        { title: 'Block/Unblock', field: 'BlockUnblock'},


                    ]}
                    data={[
                        {MotherEmail: 'Mehmet@gmail.com',BlockUnblock: ''},
                         {MotherEmail: 'MAmeesha@gmai.com', BlockUnblock: ''},
                    ]}
                    options={{
                        search: true
                    }}

                />
            </div>

        </Fragment>
    );
};

export default MothersList;
