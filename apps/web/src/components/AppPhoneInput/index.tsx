import React from 'react';
import { FormControlStyled } from './styles';
import { TextFieldProps } from '@mui/material';

import PhoneInput from 'react-phone-input-2';

function AppPhoneInput(props: TextFieldProps) {
  return (
    <FormControlStyled fullWidth sx={{ marginBottom: '20px !important' }}>
      <PhoneInput
        enableSearch
        disableSearchIcon
        country="hk"
        onChange={(_phone, _data, e) => {
          console.log(_phone, _data);
          if (typeof props.onChange === 'function') props.onChange(e);
        }}
        inputProps={{
          name: props.name,
          required: props.required,
        }}
        searchClass="app-input-phone-search"
        inputClass="app-input-phone"
        buttonClass="app-input-phone-button"
      />
    </FormControlStyled>
  );
}

export default AppPhoneInput;
