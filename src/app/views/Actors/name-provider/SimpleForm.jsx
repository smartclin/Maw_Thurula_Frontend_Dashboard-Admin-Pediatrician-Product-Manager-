import {
  Button,
  Checkbox, Fab,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled,
} from "@mui/material";
import { Span } from "app/components/Typography";
import React, { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import {Image} from "react-bootstrap";
import AddRemoveFormField from "./AddRemoveFormfield"
// import {editptProfileastrologer,addQulificationsAs} from "../../../services/Astrologer/al_dashboard_service";
import {addQulificationsNP,editptProfileNameprovider} from "../../../services/NameProvider/np_dashboard_service";


const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));



const EditForm = () => {
  const [state, setState] = useState({ date: new Date() });

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [state.password]);

  const handleSubmit = (event) => {
    handleChange(event)
    console.log("submitted");
    console.log(event.target);
    Senddata()
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
    console.log(state)


  };
  const [ArticlePosts, setArticlePosts] = useState([]);
  const [qulifications, setQulifications] = useState([]);
  const Senddata=()=>{
    let dataobject={
      "description":state.description,
      "twitterUrl":state.twitterUrl,
      "serviceCharge":state.serviceCharge,
      "mobile":state.mobile,
      "linkedinUrl":state.linkedinUrl,
      "fbUrl":state.fbUrl,
      "Address":state.Address,
      "firstName":state.firstName,
      "email":state.email,

    }
    editptProfileNameprovider(1,dataobject).then(data => {
      setArticlePosts(data)
    }).catch(err => {
      console.log(err.error)
    })
    console.log("dataobject",dataobject)
    Handlereset()
  }

  const check=(event)=>{
    event.map((item,index)=>{
      console.log("item",item.Qualifications)
      addQulificationsNP(1,item.Qualifications).then(data => {
        setQulifications(data)
      }).catch(err => {
        console.log(err.error)
      })
    })
    // addQulifications(1,dataobject).then(data => {
    //     setArticlePosts(data)
    // }).catch(err => {
    //     console.log(err.error)
    // })
  }
  const Handlereset=()=>{
    setState([])
  }
  const handleSelectedFile = (event) => {
    //setState({ ...state, [event.target.name]: event.target.value });


    document.getElementById("fileInput").innerHTML='done';
    document.getElementById("fileInput").style.color='#2edb8a';
  };
  const handleDateChange = (date) => setState({ ...state, date });

  const {
    profilePic,
    Address,
    firstName,
    mobile,
    description,
    email,
    serviceCharge,
    linkedinUrl,
    fbUrl,
    twitterUrl
  } = state;


  let imgDiv={
    width: "100%",
    marginBottom: "45px",
    display:"flex",
    justifyContent:"space-between",

  };
  let labelDiv={
    color:"#d82edb",
    fontWeight:"600",

  };
  let hideFile={

  };
  let iconDiv={
    color:"#82b9d1",
    cursor:"pointer"
  };
  let addRemove={
    marginBottom:"20px",
  };
  return (
      <div style={{padding:'25px'}}>
        <ValidatorForm onSubmit={handleSubmit} onError={() => null} >
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <div style={imgDiv}>

                <small style={labelDiv} >Upload Profile Picture</small>

                <Icon
                    id="fileInput"
                    variant="contained"
                    component="label"
                    style={iconDiv}
                >
                  add_a_photo

                  <input

                      type="file"
                      onChange={handleSelectedFile}
                      value={profilePic|| ""}

                  />
                </Icon>

              </div>






              <TextField
                  type="text"
                  name="firstName"
                  label="First Name"
                  onChange={handleChange}
                  value={firstName || ""}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
              />
              <TextField
                  type="text"
                  name="Address"
                  label="Address"
                  onChange={handleChange}
                  value={Address || ""}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
              />

              <TextField
                  type="email"
                  name="email"
                  label="Email"
                  value={email || ""}
                  onChange={handleChange}
                  validators={["required", "isEmail"]}
                  errorMessages={["this field is required", "email is not valid"]}
              />
              <TextField
                  type="text"
                  name="description"
                  label="Description"
                  onChange={handleChange}
                  value={description || ""}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
              />
              {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={date}
                onChange={handleDateChange}
                renderInput={(props) => (
                  <TextField
                    {...props}
                    label="Date picker"
                    id="mui-pickers-date"
                    sx={{ mb: 2, width: "100%" }}
                  />
                )}
              />
            </LocalizationProvider>*/}

              {/* <TextField
              sx={{ mb: 4 }}
              type="number"
              name="creditCard"
              label="Credit Card"
              onChange={handleChange}
              value={creditCard || ""}
              errorMessages={["this field is required"]}
              validators={["required", "minStringLength:16", "maxStringLength: 16"]}
            />*/}

            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <TextField
                  type="text"
                  name="mobile"
                  value={mobile || ""}
                  label="Mobile Nubmer"
                  onChange={handleChange}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
              />
              <TextField
                  type="text"
                  name="serviceCharge"
                  value={serviceCharge || ""}
                  label="Service Charge (Rs.)"
                  onChange={handleChange}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
              />
              <TextField
                  type="url"
                  name="linkedinUrl"
                  value={linkedinUrl || ""}
                  label="LinkedIn url"
                  onChange={handleChange}
                  //validators={["required"]}
                  // errorMessages={["this field is required"]}
              />
              <TextField
                  type="url"
                  name="fbUrl"
                  value={fbUrl || ""}
                  label="Facebook url"
                  onChange={handleChange}
                  //validators={["required"]}
                  // errorMessages={["this field is required"]}
              />
              <TextField
                  type="url"
                  name="twitterUrl"
                  value={twitterUrl || ""}
                  label="Twitter url"
                  onChange={handleChange}
                  //validators={["required"]}
                  // errorMessages={["this field is required"]}
              />

            </Grid>

          </Grid>
          <div style={addRemove}>
            <AddRemoveFormField check={check} />
          </div>
          <Button color="primary" style={{width:'100%',height:'30px',display:'flex',marginTop:'10px'}} variant="contained" type="submit">
            {/*<Icon>send</Icon>*/}
            <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
          </Button>
          {/*<div>*/}
          {/*    <Button variant="contained" onClick={Pass} style={{width:'100%',display:'flex',marginTop:'10px'}}>PUBLISH</Button>*/}
          {/*</div>*/}
        </ValidatorForm>
      </div>
  );
};

export default EditForm;