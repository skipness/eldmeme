import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CanvasContextConsumer } from '../../../canvas-context-provider';
import CommonInput from '../common-input';

const CoordinatePanel = () => (
  <CanvasContextConsumer>
    {({ activeObject, onCoordinateChange }) => (
      <Grid container item>
        <CommonInput
          description="X"
          value={(activeObject && activeObject.left) || '0'}
          onChange={value => onCoordinateChange('left', value)}
        />
        <CommonInput
          description="Y"
          value={(activeObject && activeObject.top) || '0'}
          onChange={value => onCoordinateChange('top', value)}
        />
      </Grid>
    )}
  </CanvasContextConsumer>
);

export default CoordinatePanel;
