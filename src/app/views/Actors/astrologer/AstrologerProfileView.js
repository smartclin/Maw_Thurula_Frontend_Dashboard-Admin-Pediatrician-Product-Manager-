import { Fragment } from 'react';
import {avatarClasses, Button, Card, Grid, Icon, styled, useTheme} from '@mui/material';

import Avatar from '@mui/material/Avatar';
import AstrologerProfileViewStatCards from "./AstrologerProfileViewStatCards";
import {Span} from "../../../../components/Typography";


//import {Title} from "@mui/icons-material";

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
}));


const Title = styled('span')(() => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginRight: '.5rem',
    textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
}));

const H4 = styled('h4')(({ theme }) => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '16px',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
}));

const cardInside={
    display:'flex',
    /*alignItems:'center',
    justifyContent:'center',*/
    margin:'10px',
};

const avatar = {
    height:100,
    width:100,


};
const emailAndPhone= {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-start',
    height: '50px'

}
const AstrologerProfileView = () => {
    const { palette } = useTheme();
    let requestTittle={
        color:'#9e9e9e',
        fontSize: '25px',
        paddingLeft:'20px',
        fontWeight:'bold',
    };

    let responseInput={
        width: '50%',

    };

    let sendButton={
        marginLeft: '7px'
    }
    let registerdAstrologers={
        margin:"20px 2px 20px 2px",
        width:'100%',
        padding:'10px 2 10px 2px' ,

    };
    let chartDiv={
        display:'flex',
        flexDirection:'raw',
        flexWrap:" nowrap"
    };
    return (
        <Fragment>

            <ContentBox className="analytics">

                <Grid container spacing={3}>


                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card  sx={{ px: 3, py: 2, mb: 3 }}>
                            <Title style ={{fontSize:'2em',color:'#56595e'}}>User</Title>
                            <SubTitle>Astrologer</SubTitle>
                            <div style={cardInside}>
                                <Avatar style={avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">About</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <Button color="primary" variant="contained" type="submit">
                                <Icon>send</Icon>
                                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Save</Span>
                            </Button>



                            <p>Astrologer Atlanta. Quality Results in 1 Minute or Less!
                                Search for Astrologer Atlanta. Instant and Personalized
                                Results. Always Facts.Results & Answers. Privacy Friendly.</p>

                            <span style={emailAndPhone}>
                   <span style={{paddingLeft:20,fontSize:'17px'}} >Date of Birth :</span>
                 <span style={{paddingLeft:20,fontSize:'17px'}} >31/03/1997</span>
                  </span>
                            <span style={emailAndPhone}>
               <span style={{paddingLeft:20,fontSize:'17px'}} >Email :</span>
                <span style={{paddingLeft:20,fontSize:'17px'}}>perara@gmail.com</span>
                 </span>

                            <span style={emailAndPhone}>
                                <span style={{paddingLeft:20,fontSize:'17px'}} >Contact No :</span>
                 <span style={{paddingLeft:20,fontSize:'17px'}} >077 4562389</span>
                  </span>
                            <span style={emailAndPhone}>
                   <span style={{paddingLeft:20,fontSize:'17px'}} >Address :</span>
                 <span style={{paddingLeft:20,fontSize:'17px'}} >No 56/A Senanayake Road,Colombo</span>
                  </span>
                            <span style={emailAndPhone}>
                   <span style={{paddingLeft:20,fontSize:'17px'}} >NIC :</span>
                 <span style={{paddingLeft:20,fontSize:'17px'}} >970911863V</span>
                  </span>
                            <span style={emailAndPhone}>
                   <span style={{paddingLeft:20,fontSize:'17px'}} >Working at :</span>
                 <span style={{paddingLeft:20,fontSize:'17px'}} >Matara General Hospital</span>
                  </span>
                            <span style={emailAndPhone}>
                   <span style={{paddingLeft:20,fontSize:'17px'}} >Qualifications :</span>
                 <span style={{paddingLeft:20,fontSize:'17px'}} >Astrologer Atlanta.
                   </span>
                  </span>
                            <span style={emailAndPhone}>
                   <span style={{paddingLeft:20,fontSize:'17px'}} >Other :</span>
                 <span style={{paddingLeft:50,fontSize:'17px'}} ><div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                            </div></span>
                  </span>
                            <Button color="primary" variant="contained" type="submit">
                                <Icon>send</Icon>
                                <Span sx={{ pl: 1, textTransform: "capitalize" }}>Save</Span>
                            </Button>

                        </Card>



                    </Grid>
                </Grid>

            </ContentBox>
        </Fragment>
    );
};

export default AstrologerProfileView;
