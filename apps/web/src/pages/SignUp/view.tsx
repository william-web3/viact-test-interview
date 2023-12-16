import React, { useState } from 'react';
import { Box, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Typography } from '@mui/material';

import * as yup from 'yup';
import { Formik, FormikHelpers } from 'formik';

import 'react-phone-input-2/lib/style.css';

import {
  SignUpPaperStyled,
  SignUpButton,
  LoginLogo,
  SignUpForm,
  StyledLink,
  TypographyStyled,
  TextHeader,
  FormGridLeft,
} from './styles';
import { MediumText, SmallText } from '../../styles';
import AppInput from '../../components/AppInput';
import signUpSchemaValidation from './signUpSchemaValidation';
import { useSignUpHook } from '../../hooks';
import { routerPaths } from '../../routerPaths';
import AppPhoneInput from '../../components/AppPhoneInput';
import TermAndCondition from './components/TermAndCondition';
import SignUpSuccess from './components/SignUpSuccess';

interface LoginFormValues {
  username: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

const initialValues: LoginFormValues = {
  username: '',
  email: '',
  phone: '',
  firstName: '',
  lastName: '',
  password: '',
  confirmPassword: '',
};

function SignUpPageView() {
  const { signUp } = useSignUpHook();
  const [showPass, setShowPass] = useState(false);
  const [openSignUpNotify, setSignUpNotify] = useState(false);

  const onSignUp = async (values: LoginFormValues, formikHelpers: FormikHelpers<LoginFormValues>): Promise<void> => {
    await signUp(values, () => {
      formikHelpers.setSubmitting(false);
      setSignUpNotify(true);
    });
  };

  return (
    <Container
      component="main"
      sx={{ minHeight: '100vh', alignItems: 'center', justifyContent: 'center', padding: 0, display: 'flex' }}
    >
      <CssBaseline />
      <SignUpPaperStyled>
        <Grid container spacing={3}>
          <Grid item lg={6} className="left-form">
            <FormGridLeft sx={{ height: '100%' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <LoginLogo>
                  <img src="/viact-logo.svg" alt="viact-logo" loading="lazy" />
                </LoginLogo>
                <Box
                  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}
                >
                  <TextHeader color="text.secondary">Automate</TextHeader>
                  <TextHeader color="text.secondary">Construction</TextHeader>
                  <TextHeader color="text.secondary">Monitoring</TextHeader>
                </Box>
              </Box>
              <Box sx={{ textAlign: 'center', width: '100%', mt: '10px' }}>
                <Typography component="h1" variant="h5" sx={{ textTransform: 'uppercase', fontSize: '16px' }}>
                  Create new account
                </Typography>
                <Typography sx={{ marginBottom: '30px', fontSize: '20px', fontWeight: '700' }} color="text.secondary">
                  Build smart risk free
                </Typography>
              </Box>
              <Box sx={{ padding: '0px 5px' }}>
                <TypographyStyled>
                  Understand why Viact is being used on millions of customers everyday
                </TypographyStyled>
                <TypographyStyled>Find out if Viact is the right fit for your business</TypographyStyled>
                <TypographyStyled>Get all your questions answered (personally)</TypographyStyled>
                <TypographyStyled>
                  Completely risk-free with 14-day free trial and a 30-day money back guarantee!
                </TypographyStyled>
              </Box>
            </FormGridLeft>
          </Grid>
          <Grid item lg={6}>
            <SignUpForm>
              <Box sx={{ width: '100%', paddingBottom: '0' }}>
                {/* {apiError && <AppAlert text={apiError} alertProps={{ severity: 'error', icon: false }} />} */}
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSignUp}
                  validationSchema={yup.object().shape(signUpSchemaValidation)}
                >
                  {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form onSubmit={handleSubmit} noValidate autoComplete="off" style={{ padding: '20px 0px' }}>
                      <AppInput
                        required
                        margin="normal"
                        fullWidth
                        id="firstName"
                        label="First name"
                        name="firstName"
                        color="primary"
                        sx={{ marginBottom: '20px !important' }}
                        onChange={handleChange}
                        helperText={errors.firstName && touched.firstName ? errors.firstName : ''}
                      />
                      <AppInput
                        required
                        margin="normal"
                        fullWidth
                        id="lastName"
                        label="Last name"
                        name="lastName"
                        color="primary"
                        sx={{ marginBottom: '20px !important' }}
                        onChange={handleChange}
                        helperText={errors.lastName && touched.lastName ? errors.lastName : ''}
                      />
                      <AppInput
                        required
                        margin="normal"
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        color="primary"
                        sx={{ marginBottom: '20px !important' }}
                        onChange={handleChange}
                        helperText={errors.username && touched.username ? errors.username : ''}
                      />
                      <AppInput
                        required
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        color="primary"
                        sx={{ marginBottom: '20px !important' }}
                        onChange={handleChange}
                        helperText={errors.email && touched.email ? errors.email : ''}
                      />
                      <AppPhoneInput
                        required
                        margin="normal"
                        fullWidth
                        id="phone"
                        label="Phone"
                        name="phone"
                        color="primary"
                        sx={{ marginBottom: '20px !important' }}
                        onChange={handleChange}
                        helperText={errors.phone && touched.phone ? errors.phone : ''}
                      />
                      <AppInput
                        required
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Password"
                        type={showPass ? 'text' : 'password'}
                        id="password"
                        sx={{ marginBottom: '20px !important' }}
                        onChange={handleChange}
                        helperText={errors.password && touched.password ? errors.password : ''}
                      />
                      <AppInput
                        required
                        margin="normal"
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type={showPass ? 'text' : 'password'}
                        id="confirmPassword"
                        sx={{ marginBottom: '20px !important' }}
                        onChange={handleChange}
                        helperText={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : ''}
                      />
                      <Grid container>
                        <Grid item lg={6} xs={6}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                value="show-pass"
                                color="primary"
                                onChange={(e, checked) => setShowPass(checked)}
                              />
                            }
                            label={
                              <Typography component="span" sx={{ fontSize: '13px' }}>
                                Show password
                              </Typography>
                            }
                            sx={{ color: '#252525' }}
                          />
                        </Grid>
                      </Grid>
                      <Box sx={{ mt: '20px' }}>
                        <SignUpButton type="submit" fullWidth variant="contained" loading={isSubmitting}>
                          Sign up
                        </SignUpButton>
                      </Box>
                    </form>
                  )}
                </Formik>
              </Box>
              <Box sx={{ justifyContent: 'center', mt: 2, mb: 2, padding: '0 20px' }}>
                <SmallText sx={{ fontSize: '12px', textAlign: 'center' }}>
                  By clicking Sign up or Continue with Google, you agree to viAct’s <TermAndCondition />
                </SmallText>
                {/* </Box>
              <Box sx={{ justifyContent: 'center' }}> */}
                <SmallText sx={{ fontSize: '12px', textAlign: 'center', display: 'block', mt: '10px' }}>
                  Already have an account?{' '}
                  <StyledLink href={routerPaths.Login} variant="body2" color="text.secondary">
                    Log In
                  </StyledLink>
                </SmallText>
              </Box>
            </SignUpForm>
          </Grid>
        </Grid>
        <SignUpSuccess open={openSignUpNotify} />
      </SignUpPaperStyled>
    </Container>
  );
}

export default SignUpPageView;
