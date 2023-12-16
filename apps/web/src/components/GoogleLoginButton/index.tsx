import React from 'react';
import { Box } from '@mui/material';

import { ButtonStyled } from './styles';

function GoogleIcon() {
  return (
    <Box sx={{ mr: '5px', display: 'flex' }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" color="#ffffff" width="16" height="16">
        <g clipPath="url(#google_svg__a)">
          <path
            fill="currentColor"
            d="M15.671 6.545H8.035v3.273h4.328C11.671 12 9.962 12.727 8 12.727a4.726 4.726 0 1 1 3.035-8.346l2.378-2.265A8 8 0 1 0 8 16c4.411 0 8.4-2.909 7.671-9.455Z"
          ></path>
        </g>
        <defs>
          <clipPath id="google_svg__a">
            <path fill="currentColor" d="M0 0h16v16H0z"></path>
          </clipPath>
        </defs>
      </svg>
    </Box>
  );
}
function GoogleLoginButton() {
  return (
    <ButtonStyled fullWidth variant="contained">
      <GoogleIcon /> Login With Google
    </ButtonStyled>
  );
}

export default GoogleLoginButton;
