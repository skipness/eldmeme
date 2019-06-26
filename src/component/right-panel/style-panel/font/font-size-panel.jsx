import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormatSizeTwoTone from '@material-ui/icons/FormatSizeTwoTone';
import { CanvasContextConsumer } from '../../../canvas-context-provider';
import LimittedTextField from '../../../common/limitted-textfield';

const FontSizePanel = () => (
  <Grid container item xs={7}>
    <Grid container item alignItems="center" spacing={1}>
      <Grid item>
        <FormatSizeTwoTone />
      </Grid>
      <Grid item>
        <CanvasContextConsumer>
          {({ activeObject, onFontSizeChange }) => (
            <LimittedTextField
              value={activeObject && activeObject.fontSize}
              limit={{ min: '40', max: '120' }}
              onChange={onFontSizeChange}
            />
          )}
        </CanvasContextConsumer>
      </Grid>
    </Grid>
  </Grid>
);

export default FontSizePanel;
