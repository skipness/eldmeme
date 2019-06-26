import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { CanvasContextConsumer } from '../../../canvas-context-provider';
import LimittedTextField from '../../../common/limitted-textfield';

const RotationPanel = () => (
  <CanvasContextConsumer>
    {({ activeObject, onAngleChange }) => (
      <Grid container item xs={6} alignItems="center" justify="center">
        <Grid item xs={3}>
          <Typography variant="caption">R</Typography>
        </Grid>
        <Grid item xs={7}>
          <LimittedTextField
            value={(activeObject && activeObject.angle) || '0'}
            limit={{ min: '0', max: '360' }}
            onChange={onAngleChange}
          />
        </Grid>
      </Grid>
    )}
  </CanvasContextConsumer>
);

export default RotationPanel;
