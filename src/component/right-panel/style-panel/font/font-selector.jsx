import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React, { useState } from 'react';
import { fonts } from '../../../../constant';
import { useActiveObject, useCanvas } from '../../../../hooks';

const initialState = 'PMingLiU';

const FontSelector = () => {
  const activeObject = useActiveObject(
    () => setFont(initialState),
    object => setFont(object.fontFamily)
  );
  const canvas = useCanvas();
  const [font, setFont] = useState(initialState);
  const disabled = activeObject === null;
  const onFontChange = font => {
    if (activeObject === null);
    activeObject.set('fontFamily', font);
    canvas.requestRenderAll();
    setFont(font);
  };

  return (
    <Grid container item justify='center'>
      <FormControl disabled={disabled} fullWidth>
        <Select
          displayEmpty
          value={font}
          onChange={event => onFontChange(event.target.value)}
        >
          {Object.keys(fonts).map((fontName, index) => (
            <MenuItem
              key={index}
              value={fontName}
              style={{ fontFamily: `${fontName}` }}
            >
              {fonts[fontName]}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>字體</FormHelperText>
      </FormControl>
    </Grid>
  );
};

export default FontSelector;
