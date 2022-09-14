
import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DownloadIcon from '@mui/icons-material/Download';
import NameProviderReportStatCards from "./NameProviderReportStatCards";


const NameProvidersReports = () => {
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
                <div style={reportTitle}> Name Provider's Report </div>
                <div>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Button variant="contained" component="label">
                            Download as a PDF  <DownloadIcon></DownloadIcon>
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>

                    </Stack>
                </div>
            </div>

            <div style={mainDiv}>
                <NameProviderReportStatCards>

                </NameProviderReportStatCards>


            </div>

        </Fragment>
    );
};

export default NameProvidersReports;
