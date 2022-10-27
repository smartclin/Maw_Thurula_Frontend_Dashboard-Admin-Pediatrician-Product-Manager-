
import { Card, Grid, styled, useTheme } from '@mui/material';
import {Fragment, useEffect, useState} from 'react';
import AstrologerReportStatCards from "./AstrologerReportStatCards";
import AstrologerReportLineChart from "./AstrologerReportLineChart";
import {Title} from "@mui/icons-material";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import DownloadIcon from '@mui/icons-material/Download';
import OneAstrologerReportStatCards from "./OneAstrologerReportStatCards";
import {useParams} from "react-router-dom";




const OneAstrologerReport  = () => {

    let {a_id}=useParams();
    //console.log(a_id)
    const [AlId, setAlId] = useState([]);

    useEffect(async () => {
        setAlId(a_id)
        // console.log(StatCard1)
    }, []);



    useEffect(async () => {
     // console.log(AlId)
        // console.log(StatCard1)
    }, [AlId]);

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
    return (
        <Fragment>
            <div style={titleDiv}>
                <div style={reportTitle}> Gayan Perera </div>
                <div>

                </div>
            </div>

            <div style={mainDiv}>
                <OneAstrologerReportStatCards

                    AlId={AlId}
                >

                </OneAstrologerReportStatCards>

                <div style ={chartDiv}>
                    <Card sx={{ px: 3, py: 2, mb: 3 }} style={registerdAstrologers}>
                        <Title> Profit </Title>

                        {/*<AstrologerReportLineChart*/}
                        {/*    height="350px"*/}
                        {/*    color={[palette.primary.dark, palette.primary.main, palette.primary.light]}*/}
                        {/*/>*/}
                    </Card>

                </div>
            </div>

        </Fragment>
    );
};

export default OneAstrologerReport ;
