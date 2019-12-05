import Grid from '@material-ui/core/Grid';
import FormatColorTextTwoTone from '@material-ui/icons/FormatColorTextTwoTone';
import React, { useState } from 'react';
import { useActiveObject, useCanvas } from '../../../../hooks';
import ColorPicker from '../../../common/color-picker';
import GradientBlock from '../../../common/gradient-block';

const initialState = '#ffffff';

const FontColorPicker = () => {
  const activeObject = useActiveObject(
    () => setFontColor(initialState),
    object => setFontColor(object.fill)
  );
  const canvas = useCanvas();
  const [fontColor, setFontColor] = useState(initialState);
  const disabled = activeObject === null;
  const onFontColorChange = value => {
    if (activeObject === null) return;
    activeObject.set('fill', value);
    canvas.requestRenderAll();
  };
  const onGradientChange = () => {
    if (activeObject === null) return;
    activeObject.setGradient('fill', {
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
      <Grid container item alignContent='center' justify='center' spacing={1}>
        <Grid item>
          <FormatColorTextTwoTone />
        </Grid>
        <Grid item>
          <ColorPicker
            color={fontColor}
            disabled={disabled}
            onChange={onFontColorChange}
          />
        </Grid>
        <Grid item>
          <GradientBlock disabled={disabled} onClick={onGradientChange} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FontColorPicker;
