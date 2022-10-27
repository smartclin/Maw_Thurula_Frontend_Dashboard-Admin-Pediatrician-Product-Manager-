import { useTheme } from '@emotion/react';
import { LoadingButton } from '@mui/lab';
import {Card, Checkbox, Grid, Radio, TextField} from '@mui/material';
import { Box, styled } from '@mui/system';
import { Paragraph } from 'app/components/Typography';
import useAuth from 'app/hooks/useAuth';
import { Formik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import {RadioButtonChecked} from "@material-ui/icons";

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }));

const JustifyBox = styled(FlexBox)(() => ({ justifyContent: 'center' }));

const ContentBox = styled(JustifyBox)(() => ({
  height: '100%',
  padding: '32px',
  background: 'rgba(0, 0, 0, 0.01)',
}));

const JWTRegister = styled(JustifyBox)(() => ({
  background: '#1A2038',
  minHeight: '100vh !important',
  '& .card': {
    maxWidth: 800,
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
  },
}));

// inital login credentials
const initialValues = {
  email: '',
  password: '',
  username: '',
  nic:'',
  address:'',
  contact_no:'',
  currently_working_at:'',
  years_of_experience:'',
  user_type: true,
  service_charge:''
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be 6 character length')
    .required('Password is required!'),
  email: Yup.string().email('Invalid Email address').required('Email is required!'),
});

const JwtRegister = () => {
  const theme = useTheme();
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (values) => {
    setLoading(true);

    try {
      register(values.email, values.username, values.password, values.user_type,values.service_charge,values.nic,values.address,values.contact_no,values.currently_working_at,values.years_of_experience);

      //alert(values.username)
      navigate('/');
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <JWTRegister>
      <Card className="card"  style={{ display: "flex", alignContent: "center", justifyContent: "center"}}>
        <Grid container >
          <Grid item sm={6} xs={12}>
            <ContentBox>
              <img
                width="100%"
                alt="Register"
                src="/assets/images/illustrations/posting_photo.svg"
              />
            </ContentBox>
          </Grid>

          <Grid item sm={6} xs={12}>
            <Box p={4} height="100%">
              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>

                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      name="username"
                      label="Username"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.username}
                      onChange={handleChange}
                      helperText={touched.username && errors.username}
                      error={Boolean(errors.username && touched.username)}
                      sx={{ mb: 3 }}
                    />

                    <TextField
                      fullWidth
                      size="small"
                      type="email"
                      name="email"
                      label="Email"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      helperText={touched.email && errors.email}
                      error={Boolean(errors.email && touched.email)}
                      sx={{ mb: 3 }}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      name="password"
                      type="password"
                      label="Password"
                      variant="outlined"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        size="small"
                        name="nic"
                        type="nic"
                        label="NIC"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.nic}
                        onChange={handleChange}
                        helperText={touched.nic && errors.nic}
                        error={Boolean(errors.nic && touched.nic)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        size="small"
                        name="address"
                        type="address"
                        label="Address"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.address}
                        onChange={handleChange}
                        helperText={touched.address && errors.address}
                        error={Boolean(errors.address && touched.address)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        size="small"
                        name="contact_no"
                        type="contact_no"
                        label="Contact Number"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.contact_no}
                        onChange={handleChange}
                        helperText={touched.contact_no && errors.contact_no}
                        error={Boolean(errors.contact_no && touched.contact_no)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        size="small"
                        name="currently_working_at"
                        type="currently_working_at"
                        label="Currently Working At"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.currently_working_at}
                        onChange={handleChange}
                        helperText={touched.currently_working_at && errors.currently_working_at}
                        error={Boolean(errors.currently_working_at && touched.currently_working_at)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        size="small"
                        name="years_of_experience"
                        type="years_of_experience"
                        label="Years of experience"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.years_of_experience}
                        onChange={handleChange}
                        helperText={touched.years_of_experience && errors.years_of_experience}
                        error={Boolean(errors.years_of_experience && touched.years_of_experience)}
                        sx={{ mb: 2 }}
                    />

                    <FlexBox style={{display:"flex" ,marginBottom:'10px'}} gap={2}>
                      <FlexBox gap={0.5} alignItems="center">
                        <input
                            type='radio'
                            size="small"
                            name="user_type"
                            onChange={handleChange}
                            //  checked={values.user_type}
                            value={1}
                            sx={{ padding: 0 }}
                            // required
                            error={errors.user_type}
                        />

                        <Paragraph fontSize={13}>
                          Pediatrician
                        </Paragraph>
                      </FlexBox>
                      <FlexBox gap={0.5} alignItems="center">
                        <input
                            type='radio'
                            size="small"
                            name="user_type"
                            onChange={handleChange}
                            // checked={values.user_type}
                            value={2}
                            sx={{ padding: 0 }}
                            //  required
                            error={errors.user_type}
                        />

                        <Paragraph fontSize={13}>
                          Astrologer
                        </Paragraph>
                      </FlexBox>
                      <FlexBox gap={0.5} alignItems="center">
                        <input
                            type='radio'
                            size="small"
                            name="user_type"
                            onChange={handleChange}
                            //  checked={values.user_type}
                            value={3}
                            sx={{ padding: 0 }}
                            // required
                            error={errors.user_type}
                        />

                        <Paragraph fontSize={13}>
                          Name Provider
                        </Paragraph>
                      </FlexBox>
                    </FlexBox>

                    { ((values.user_type)==2 || (values.user_type ==3))?
                    <TextField
                        fullWidth
                        size="small"
                        name="service_charge"
                        type="service_charge"
                        label="Service charge (Rs)"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.service_charge}
                        onChange={handleChange}
                       // helperText={touched.password && errors.password}
                        //error={Boolean(errors.password && touched.password)}
                        sx={{ mb: 2 }}
                    />
                    :<div></div>
                  }

                    <LoadingButton
                      type="submit"
                      color="primary"
                      loading={loading}
                      variant="contained"
                      sx={{ mb: 2, mt: 3 }}
                    >
                      Register
                    </LoadingButton>

                    <Paragraph>
                      Already have an account?
                      <NavLink
                        to="/session/signin"
                        style={{ color: theme.palette.primary.main, marginLeft: 5 }}
                      >
                        Login
                      </NavLink>
                    </Paragraph>
                  </form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </JWTRegister>
  );
};

export default JwtRegister;
