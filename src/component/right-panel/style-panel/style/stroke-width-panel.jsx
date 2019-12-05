import Grid from '@material-ui/core/Grid';
import BorderOuterTwoTone from '@material-ui/icons/BorderOuterTwoTone';
import React, { useState } from 'react';
import { useActiveObject, useCanvas } from '../../../../hooks';
import LimitedTextField from '../../../common/limited-textfield';

const initialState = 0;

const StrokeWidthPanel = () => {
  const activeObject = useActiveObject(
    () => setStrokeWidth(initialState),
    object => setStrokeWidth(object.strokeWidth)
  );
  const canvas = useCanvas();
  const [strokeWidth, setStrokeWidth] = useState(initialState);
  const disabled = activeObject === null;
  const onStrokeWidthChange = value => {
    if (activeObject === null) return;
    activeObject.set('strokeWidth', value);
    canvas.requestRenderAll();
  };

  return (
    <Grid container item xs={7}>
      <Grid container item alignItems='center' spacing={1}>
        <Grid item>
          <BorderOuterTwoTone />
        </Grid>
        <Grid item>
          <LimitedTextField
            disabled={disabled}
            limit={{ min: '0', max: '5' }}
            onChange={onStrokeWidthChange}
            value={strokeWidth}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StrokeWidthPanel;
