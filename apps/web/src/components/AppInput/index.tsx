import React from 'react';
import { TextFieldStyled } from './styles';
import { TextFieldProps } from '@mui/material';

function AppInput(props: TextFieldProps) {
  return <TextFieldStyled fullWidth {...props} />;
}

export default AppInput;
