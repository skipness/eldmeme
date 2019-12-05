import Grid from '@material-ui/core/Grid';
import BorderColorTwoTone from '@material-ui/icons/BorderColorTwoTone';
import React, { useState } from 'react';
import { useActiveObject, useCanvas } from '../../../../hooks';
import ColorPicker from '../../../common/color-picker';
import GradientBlock from '../../../common/gradient-block';

const initialState = '#ffffff';

const StrokeColorPicker = () => {
  const activeObject = useActiveObject(
    () => setStrokeColor(initialState),
    // Color cannot be `null` otherwise color picker will throw error, please see: https://github.com/casesandberg/react-color/issues/115#issuecomment-217706316
    object => setStrokeColor(object.stroke === null ? undefined : object.stroke)
  );
  const canvas = useCanvas();
  const [strokeColor, setStrokeColor] = useState(initialState);
  const disabled = activeObject === null;
  const onStrokeColorChange = value => {
    if (activeObject === null) return;
    activeObject.set('stroke', value);
    canvas.requestRenderAll();
  };
  const onGradientChange = () => {
    if (activeObject === null) return;
    activeObject.setGradient('stroke', {
      type: 'linear',
      x1: 0,
      y1: activeObject.height,
      x2: activeObject.width,
      y2: activeObject.height,
      colorStops: {
        0: 'red',
        0.2: 'orange',
        0.4: 'yellow',
        0.6: 'green',
        0.8: 'blue',
        1: 'violet',
      },
    });
    canvas.requestRenderAll();
  };

  return (
    <Grid container item xs={5}>
      <Grid container alignContent='center' item justify='center' spacing={1}>
        <Grid item>
          <BorderColorTwoTone />
        </Grid>
        <Grid item>
          <ColorPicker
            color={strokeColor}
            disabled={disabled}
            onChange={onStrokeColorChange}
          />
        </Grid>
        <Grid item>
          <GradientBlock disabled={disabled} onClick={onGradientChange} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StrokeColorPicker;
