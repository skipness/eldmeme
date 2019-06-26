import React from 'react';
import Grid from '@material-ui/core/Grid';
import { CanvasContextConsumer } from '../../../canvas-context-provider';
import CommonInput from '../common-input';

const SizePanel = () => (
  <CanvasContextConsumer>
    {({ activeObject, onSizeChange }) => (
      <Grid container item>
        <CommonInput
          description="W"
          value={(activeObject && activeObject.width) || '0'}
          onChange={value => onSizeChange('width', value)}
        />
        <CommonInput
          description="H"
          value={(activeObject && activeObject.height) || '0'}
          onChange={value => onSizeChange('height', value)}
        />
      </Grid>
    )}
  </CanvasContextConsumer>
);

export default SizePanel;
