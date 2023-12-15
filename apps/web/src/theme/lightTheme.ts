import { createTheme } from '@mui/material';

export const lightPalette = {
  text: {
    primary: '#000000de',
    secondary: '#eb5757',
  },
  bg: {
    primary: '#0b454f',
    secondary: '#ffffff',
  },
  button: {
    primary: '#23b6d8',
    secondary: '#3b82f680'
  }
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    ...lightPalette,
  },
});
