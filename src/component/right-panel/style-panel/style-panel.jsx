import Grid from '@material-ui/core/Grid';
import React from 'react';
import PanelContainer from '../../common/panel-container';
import ElderlyWordsSelector from '../elderly-words-selector';
import FontColorPicker from './font/font-color-picker';
import FontSelector from './font/font-selector';
import FontSizePanel from './font/font-size-panel';
import StrokeColorPicker from './style/stroke-color-picker';
import StrokeWidthPanel from './style/stroke-width-panel';
import TextStylePanel from './text/text-style-panel';

const StylePanel = () => (
  <Grid item>
    <PanelContainer>
      <Grid container direction='column' spacing={2}>
        <Grid container item>
          <FontColorPicker />
          <FontSizePanel />
        </Grid>
        <Grid container item>
          <StrokeColorPicker />
          <StrokeWidthPanel />
        </Grid>
        <TextStylePanel />
        <FontSelector />
        <ElderlyWordsSelector />
      </Grid>
    </PanelContainer>
  </Grid>
);

export default StylePanel;
