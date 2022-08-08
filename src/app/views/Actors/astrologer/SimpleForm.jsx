import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import {Image} from "react-bootstrap";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const SimpleForm = () => {
  const [state, setState] = useState({ date: new Date() });

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [state.password]);

  const handleSubmit = (event) => {
    // console.log("submitted");
    // console.log(event);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => setState({ ...state, date });

  const {
    profilePic,
    lastName,
    firstName,
    mobile,
    description,
    email,
    serviceCharge,
    linkedinUrl,
    fbUrl,
    twitterUrl
  } = state;

  return (
      <div>
        <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
          <Grid container spacing={6}>
            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
              <TextField
                  type="file"
                  name="profilePic"
                  value={profilePic || ""}
                  label="Profile Picture"
                  onChange={handleChange}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
              />

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
                  name="lastName"
                  label="Last Name"
                  onChange={handleChange}
                  value={lastName || ""}
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

          <Button color="primary" variant="contained" type="submit">
            <Icon>send</Icon>
            <Span sx={{ pl: 1, textTransform: "capitalize" }}>Submit</Span>
          </Button>
        </ValidatorForm>
      </div>
  );
};

export default SimpleForm;
