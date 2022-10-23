
import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import AstrologerReportStatCards from "./AstrologerReportStatCards";
import AstrologerReportLineChart from "./AstrologerReportLineChart";
import {Title} from "@mui/icons-material";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import DownloadIcon from '@mui/icons-material/Download';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import API from "../../../../services/baseURL";

//import * as jsPDF from 'jspdf';
import * as ReactDOMServer from "react-dom/server";

const AstrologersReports = () => {



    const { palette } = useTheme();

    const Title = styled('span')(() => ({
        fontSize: '1rem',
        fontWeight: '500',
        marginRight: '.5rem',
        textTransform: 'capitalize',
    }));

    let mainDiv={
        marginLeft:'100px',
        marginRight:'100px',

    };
    let reportTitle={

        color:'#81a1c7',
        fontSize:'30px',
        marginTop:'20px',
        marginBottom:'20px'
    };
    let registerdAstrologers={
        margin:"20px 0 20px 0"
    };
    let chartDiv={
        display:'flex',
        flexDirection:'column',
        flexWrap:" nowrap"
    };
    let titleDiv={
        display: 'flex',
        flexDirection:'raw',
        margin: '0 100px 0 100px',
        alignItems:'center',
        justifyContent:'space-between',
    };
    const Download=()=>{
       /* const doc = new jsPDF();
        doc.fromHTML(ReactDOMServer.renderToStaticMarkup(this.render()));
        doc.save("myDocument.pdf");*/
    }
    return (
        <Fragment>
            <div style={titleDiv}>
                <div style={reportTitle}> Astrologer's Report </div>
                <div>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Button variant="contained" component="label" onClick={Download}>
                            Download as a PDF  <DownloadIcon></DownloadIcon>

                        </Button>

                    </Stack>
                </div>
            </div>

            <div style={mainDiv}>
                <AstrologerReportStatCards  />


            </div>

        </Fragment>
    );
};

export default AstrologersReports;
