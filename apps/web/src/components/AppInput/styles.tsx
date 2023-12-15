import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const TextFieldStyled = styled(TextField)({
  marginBottom: '0px',
  marginTop: 0,
  fontSize: '12px',
  '& input': {
    fontSize: '12px',
  },

  '& label': {
    color: '#8e8e8e',
    fontSize: '14px',
  },
  '& label.Mui-focused': {
    color: '#eb5757',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#4B4C4C',
      color: '#eb5757',
      fontSize: '12px',
    },
    '&:hover fieldset': {
      borderColor: '#eb5757',
      color: '#eb5757',
      fontSize: '12px',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#eb5757',
      color: '#000000de',
      fontSize: '12px',
    },
  },
});
