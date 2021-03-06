import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState } from 'react';

const UnlimitedTextField = ({ disabled, onChange, value }) => {
  const [textfieldValue, setTextfieldValue] = useState(value);
  useEffect(() => {
    setTextfieldValue(toInt(value).toString());
  }, [value]);

  const onTextfieldValueChange = event => {
    const roundedValue = toInt(event.target.value);
    setTextfieldValue(roundedValue.toString());
    onChange(roundedValue);
  };

  const toInt = value => Math.round(parseInt(value));

  return (
    <TextField
      disabled={disabled}
      fullWidth
      InputProps={{
        endAdornment: <InputAdornment position='end'>px</InputAdornment>,
      }}
      margin='dense'
      multiline={false}
      onChange={onTextfieldValueChange}
      type='number'
      value={textfieldValue.toString()}
    />
  );
};

export default UnlimitedTextField;
