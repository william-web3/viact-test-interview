import React, { useState } from 'react';
import { Box, Checkbox, CssBaseline, FormControlLabel, Grid, Typography } from '@mui/material';

import * as yup from 'yup';
import { Formik, FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';

import { ContainerStyled, LoginButton, LoginLogo, SignInForm } from './styles';
import { PaperStyled, StyledLink, TypographyStyled, BoxStyled, SmallText } from '../../styles';

import AppInput from '../../components/AppInput';
import loginSchemaValidation from './loginSchemaValidation';
import { useSignInHook } from '../../hooks';
import AppAlert from '../../components/AppAlert';
import { routerPaths } from '../../routerPaths';
import GoogleLoginButton from '../../components/GoogleLoginButton';

interface LoginFormValues {
  username: string;
  password: string;
}

const initialValues: LoginFormValues = {
  username: '',
  password: '',
};

function SignInPageView() {
  const { signIn, error: apiError } = useSignInHook();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

  const onSignIn = async (values: LoginFormValues, formikHelpers: FormikHelpers<LoginFormValues>): Promise<void> => {
    await signIn(values, () => {
      formikHelpers.setSubmitting(false);
      setTimeout(() => {
        navigate(routerPaths.Dashboard);
      }, 200);
    });
  };

  return (
    <ContainerStyled>
      <CssBaseline />
      <PaperStyled sx={{ width: '520px' }}>
        <SignInForm>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <LoginLogo sx={{ padding: '0px !important' }}>
              <img src="/viact-logo.svg" alt="viact-logo" loading="lazy" />
            </LoginLogo>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
              <TypographyStyled color="text.secondary">Automate</TypographyStyled>
              <TypographyStyled color="text.secondary">Construction</TypographyStyled>
              <TypographyStyled color="text.secondary">Monitoring</TypographyStyled>
            </Box>
          </Box>
          <BoxStyled sx={{ textAlign: 'center', width: '100%', mt: '10px' }}>
            <Typography component="h1" variant="h5" sx={{ textTransform: 'uppercase', fontSize: '16px' }}>
              LOGIN
            </Typography>
            <Typography sx={{ fontWeight: '700', fontSize: '20px' }} color="text.secondary">
              Welcome Back
            </Typography>
          </BoxStyled>
          <BoxStyled>
            {apiError && <AppAlert text={apiError} alertProps={{ severity: 'error', icon: false }} />}
            <Formik
              initialValues={initialValues}
              onSubmit={onSignIn}
              validationSchema={yup.object().shape(loginSchemaValidation)}
            >
              {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
                  <AppInput
                    margin="normal"
                    fullWidth
                    id="username"
                    label="Email or Username"
                    name="username"
                    color="primary"
                    sx={{ marginBottom: '20px !important' }}
                    onChange={handleChange}
                    helperText={errors.username && touched.username ? errors.username : ''}
                  />
                  <AppInput
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPass ? 'text' : 'password'}
                    id="password"
                    onChange={handleChange}
                    helperText={errors.password && touched.password ? errors.password : ''}
                  />
                  <Grid container>
                    <Grid item lg={6} xs={6}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            value="show-pass"
                            sx={{ color: '#EB5757 !important' }}
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
                    <Grid item lg={6} xs={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                      <StyledLink href="#" variant="body2" color="text.secondary">
                        Forgot password?
                      </StyledLink>
                    </Grid>
                  </Grid>
                  <Box sx={{ mt: '20px' }}>
                    <LoginButton type="submit" fullWidth variant="contained" loading={isSubmitting}>
                      Login
                    </LoginButton>
                    <Typography sx={{ textAlign: 'center', margin: '12px', fontSize: '14px' }}>OR</Typography>
                    <GoogleLoginButton />
                  </Box>
                  <Box sx={{ justifyContent: 'center', textAlign: 'center', mt: '10px' }}>
                    <SmallText sx={{ fontSize: '13px !important' }}>
                      Not on Viact yet?{' '}
                      <StyledLink
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: '16px !important', cursor: 'pointer' }}
                        onClick={() => navigate(routerPaths.Signup)}
                      >
                        Signup
                      </StyledLink>{' '}
                      now
                    </SmallText>
                  </Box>
                </form>
              )}
            </Formik>
          </BoxStyled>
        </SignInForm>
      </PaperStyled>
    </ContainerStyled>
  );
}

export default SignInPageView;
