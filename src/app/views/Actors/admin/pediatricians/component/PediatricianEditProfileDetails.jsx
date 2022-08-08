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

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
  marginLeft: "40px"
}));

const PediatricianEditProfileDetails = () => {
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
    username,
    firstName,
    creditCard,
    mobile,
    password,
    confirmPassword,
    gender,
    date,
    email,
  } = state;

  let workingplace;
  let address;
  let contactNo;
  let qualifications;
  let other;
  return (

    <div>
      <h1>Edit Profile</h1>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="username"
              id="standard-basic"
              value={username || ""}
              onChange={handleChange}
              errorMessages={["this field is required"]}
              label="Username (Min length 4, Max length 9)"
              validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
            />

            <TextField
              type="text"
              name="NIC"
              label="NIC"
              onChange={handleChange}
              value={firstName || ""}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
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
            </LocalizationProvider>

            <TextField
                type="text"
                name="address"
                id="standard-basic"
                value={address || ""}
                onChange={handleChange}
                errorMessages={["this field is required"]}
                label="Address (Min length 4, Max length 9)"
                validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
            />

            <TextField
                sx={{ mb: 4 }}
                type="number"
                name="contactNo"
                label="Contact No"
                onChange={handleChange}
                value={contactNo || ""}
                errorMessages={["this field is required"]}
                validators={["required", "minStringLength:16", "maxStringLength: 16"]}
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
                name="workingplace"
                id="standard-basic"
                value={workingplace || ""}
                onChange={handleChange}
                errorMessages={["this field is required"]}
                label="Working Place (Min length 4, Max length 20)"
                validators={["required", "minStringLength: 4", "maxStringLength: 20"]}
            />

            <TextField
                type="text"
                name="qualifications"
                id="standard-basic"
                value={qualifications || ""}
                onChange={handleChange}
                errorMessages={["this field is required"]}
                label="Qualifications (Min length 4, Max length 400)"
                validators={["required", "minStringLength: 4", "maxStringLength: 400"]}
            />

            <TextField
                type="text"
                name="other"
                id="standard-basic"
                value={other || ""}
                onChange={handleChange}
                errorMessages={["this field is required"]}
                label="Other (Min length 4, Max length 9)"
                validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
            />


            <TextField
              name="password"
              type="password"
              label="Password"
              value={password || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />
            <TextField
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              label="Confirm Password"
              value={confirmPassword || ""}
              validators={["required", "isPasswordMatch"]}
              errorMessages={["this field is required", "password didn't match"]}
            />
            <RadioGroup
              row
              name="gender"
              sx={{ mb: 2 }}
              value={gender || ""}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Male"
                label="Male"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />

              <FormControlLabel
                value="Female"
                label="Female"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />

              <FormControlLabel
                value="Others"
                label="Others"
                labelPlacement="end"
                control={<Radio color="secondary" />}
              />
            </RadioGroup>

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

export default PediatricianEditProfileDetails;
