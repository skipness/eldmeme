import React from 'react';
import { Grid } from '@material-ui/core';
import { BorderOuterTwoTone } from '@material-ui/icons';
import { CanvasContextConsumer } from '../../../canvas-context-provider';
import LimittedTextField from '../../../common/limitted-textfield';

const StrokeWidthPanel = () => (
  <Grid container item xs={7}>
    <Grid container item alignItems="center" spacing={1}>
      <Grid item>
        <BorderOuterTwoTone />
      </Grid>
      <Grid item>
        <CanvasContextConsumer>
          {({ activeObject, onStrokeWidthChange }) => (
            <LimittedTextField
              value={activeObject && activeObject.strokeWidth}
              limit={{ min: '0', max: '5' }}
              onChange={onStrokeWidthChange}
            />
          )}
        </CanvasContextConsumer>
      </Grid>
    </Grid>
  </Grid>
);

export default StrokeWidthPanel;
