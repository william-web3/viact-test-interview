import React from 'react';
import { Alert, AlertProps, Typography } from '@mui/material';

function AppAlert(props: { text: string; alertProps?: AlertProps }) {
  return (
    <Alert sx={{ marginBottom: '20px', justifyContent: 'center' }} {...props.alertProps}>
      <Typography sx={{ fontWeight: 700, color: 'black', fontSize: '12px', textAlign: 'center' }}>
        {props.text}
      </Typography>
    </Alert>
  );
}

export default AppAlert;
