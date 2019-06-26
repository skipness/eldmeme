import React from 'react';
import Grid from '@material-ui/core/Grid';
import BorderColorTwoTone from '@material-ui/icons/BorderColorTwoTone';
import { CanvasContextConsumer } from '../../../canvas-context-provider';
import ColorPicker from '../../../common/color-picker';
import GradientBlock from '../../../common/gradient-block';

const StrokeColorPicker = () => (
  <CanvasContextConsumer>
    {({ activeObject, onStrokeColorChange, setGradient }) => (
      <Grid container item xs={5}>
        <Grid container alignContent="center" item justify="center" spacing={1}>
          <Grid item>
            <BorderColorTwoTone />
          </Grid>
          <Grid item>
            <ColorPicker
              color={activeObject && activeObject.stroke}
              onChange={onStrokeColorChange}
            />
          </Grid>
          <Grid item>
            <GradientBlock onClick={() => setGradient('stroke')} />
          </Grid>
        </Grid>
      </Grid>
    )}
  </CanvasContextConsumer>
);

export default StrokeColorPicker;
