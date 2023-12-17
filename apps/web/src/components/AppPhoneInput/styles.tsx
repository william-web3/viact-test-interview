import styled from '@emotion/styled';
import { Box, Dialog, FormControl, TextField } from '@mui/material';

export const TextFieldStyled = styled(TextField)({
  marginBottom: '0px',
  marginTop: 0,
  fontSize: '12px',
  '& input': {
    fontSize: '12px',
    padding: '18.5px 14px 18.5px 58px',
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
      borderColor: '#4B4C4C',
      color: '#4B4C4C',
      fontSize: '12px',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#eb5757',
      color: '#000000de',
      fontSize: '12px',
    },
  },
});

export const FlagSelected = styled(Box)`
  outline: none;
  position: absolute;
  width: 52px;
  height: 100%;
  padding: 0 0 0 11px;
  border-radius: 3px 0 0 3px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 10px;
  img {
    width: 25px;
    height: auto;
  }
`;

export const DialogCountry = styled(Dialog)`
  width: 300px;
  max-height: 220px;
  background: #fff;
  border-radius: 7px;
  box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.25);
  position: absolute;

  .MuiPaper-root {
    margin: 0;
    padding: 0px;
    box-shadow: none;
    width: 100%;
    height: 100%;
    max-height: unset;
  }

  .app-auto-complete {
    margin: 0;
  }

  .search {
    padding: 15px;
    .search-input {
      input {
        font-size: 15px !important;
      }
    }
  }
`;

export const FormControlStyled = styled(FormControl)`
  .country-list .country {
    padding: 14px 10px;
  }

  .app-input-phone-search {
    z-index: 3;
    width: 100%;
    .selected-flag .flag {
      width: 25px;
    }
    .search-box {
      width: 95%;
      height: 40px;
      margin-left: 0;
    }
  }

  .app-input-phone {
    width: 100%;
    padding: 18.5px 14px 18.5px 58px;
    border: 1px solid #4b4c4c;
    height: 48px;
  }

  .app-input-phone-button {
    width: 52px;
    background: transparent !important;
    border: 0px;

    .flag-dropdown.open {
      background: transparent !important;
    }
    .selected-flag {
      background: transparent !important;
    }
  }
`;
