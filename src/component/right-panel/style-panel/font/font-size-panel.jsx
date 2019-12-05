import Grid from '@material-ui/core/Grid';
import FormatSizeTwoTone from '@material-ui/icons/FormatSizeTwoTone';
import React, { useState } from 'react';
import { useActiveObject, useCanvas } from '../../../../hooks';
import LimitedTextField from '../../../common/limited-textfield';

const initialState = 0;

const FontSizePanel = () => {
  const activeObject = useActiveObject(
    () => setFontSize(initialState),
    object => setFontSize(object.fontSize)
  );
  const canvas = useCanvas();
  const [fontSize, setFontSize] = useState(initialState);
  const disabled = activeObject === null;
  const onFontSizeChange = value => {
    if (activeObject === null) return;
    activeObject.set('fontSize', value);
    canvas.requestRenderAll();
  };

  return (
    <Grid container item xs={7}>
      <Grid container item alignItems='center' spacing={1}>
        <Grid item>
          <FormatSizeTwoTone />
        </Grid>
        <Grid item>
          <LimitedTextField
            disabled={disabled}
            limit={{ min: '40', max: '120' }}
            onChange={onFontSizeChange}
            value={fontSize}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FontSizePanel;
