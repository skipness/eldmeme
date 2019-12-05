import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { useActiveObject, useCanvas } from '../../../../hooks';
import LimitedTextField from '../../../common/limited-textfield';

const initialState = 0;

const RotationPanel = () => {
  const activeObject = useActiveObject(
    () => setAngle(initialState),
    object => setAngle(object.angle)
  );
  const canvas = useCanvas();
  const [angle, setAngle] = useState(initialState);
  const disabled = activeObject === null;
  const onAngleChange = angle => {
    if (activeObject === null) return;
    activeObject.rotate(angle);
    canvas.requestRenderAll();
  };

  return (
    <Grid container item xs={6} alignItems='center' justify='center'>
      <Grid item xs={3}>
        <Typography variant='caption'>R</Typography>
      </Grid>
      <Grid item xs={7}>
        <LimitedTextField
          disabled={disabled}
          limit={{ min: '0', max: '360' }}
          onChange={value => onAngleChange(value)}
          value={angle}
        />
      </Grid>
    </Grid>
  );
};

export default RotationPanel;
