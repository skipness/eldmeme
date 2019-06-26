import React from 'react';
import { Grid } from '@material-ui/core';
import { FormatColorTextTwoTone } from '@material-ui/icons';
import { CanvasContextConsumer } from '../../../canvas-context-provider';
import ColorPicker from '../../../common/color-picker';
import GradientBlock from '../../../common/gradient-block';

const FontColorPicker = () => (
  <CanvasContextConsumer>
    {({ activeObject, onFontColorChange, setGradient }) => (
      <Grid container item xs={5}>
        <Grid container item alignContent="center" justify="center" spacing={1}>
          <Grid item>
            <FormatColorTextTwoTone />
          </Grid>
          <Grid item>
            <ColorPicker
              color={activeObject && activeObject.fill}
              onChange={onFontColorChange}
            />
          </Grid>
          <Grid item>
            <GradientBlock onClick={() => setGradient('fill')} />
          </Grid>
        </Grid>
      </Grid>
    )}
  </CanvasContextConsumer>
);

export default FontColorPicker;
