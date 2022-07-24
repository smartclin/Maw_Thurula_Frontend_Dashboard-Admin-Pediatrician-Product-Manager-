
import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import AstrologerReportStatCards from "./NameProviderReportStatCards";
import AstrologerReportLineChart from "./NameProviderReportLineChart";
import {Title} from "@mui/icons-material";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import DownloadIcon from '@mui/icons-material/Download';
import NameProviderReportStatCards from "./NameProviderReportStatCards";
import NameProviderReportLineChart from "./NameProviderReportLineChart";

const NameProvidersReports = () => {
    const { palette } = useTheme();

    const Title = styled('span')(() => ({
        fontSize: '1rem',
        fontWeight: '500',
        marginRight: '.5rem',
        textTransform: 'capitalize',
    }));

    let mainDiv={
        marginLeft:'200px',
        marginRight:'200px',

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
        margin: '0 200px 0 200px',
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

                <div style ={chartDiv}>
                    <Card sx={{ px: 3, py: 2, mb: 3 }} style={registerdAstrologers}>
                        <Title> Registerd Name Providers</Title>

                        <NameProviderReportLineChart
                            height="350px"
                            color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                        />
                    </Card>
                    <Card sx={{ px: 3, py: 2, mb: 3 }} style={registerdAstrologers}>
                        <Title> Profit from Name Providers</Title>

                        <NameProviderReportLineChart
                            height="350px"
                            color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
                        />
                    </Card>
                </div>
            </div>

        </Fragment>
    );
};

export default NameProvidersReports;
