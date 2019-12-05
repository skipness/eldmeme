import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState } from 'react';

const LimitedTextField = ({
  disabled,
  onChange,
  limit: { min, max },
  value,
}) => {
  const [textfiledValue, setTextfieldValue] = useState(value);
  useEffect(() => {
    setTextfieldValue(toInt(value).toString());
  }, [value]);

  const onTextfieldValueChange = event => {
    const roundedValue = toInt(event.target.value);
    onChange(roundedValue);
    setTextfieldValue(roundedValue.toString());
  };

  const toInt = value => Math.round(parseInt(value));

  return (
    <TextField
      disabled={disabled}
      fullWidth
      inputProps={{ min: min, max: max }}
      margin='dense'
      multiline={false}
      onChange={onTextfieldValueChange}
      type='number'
      value={textfiledValue.toString()}
    />
  );
};

export default LimitedTextField;
