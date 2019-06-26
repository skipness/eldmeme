import React from 'react';
import Grid from '@material-ui/core/Grid';
import Preview from './preview';
import BackgroundImageSelector from './background-image-selector';
import BackgroundImageFromUrl from './background-image-upload-panel';

const LeftPanel = () => (
  <Grid
    container
    item
    xs={9}
    direction="column"
    alignItems="stretch"
    spacing={3}
  >
    <Preview />
    <BackgroundImageSelector />
    <BackgroundImageFromUrl />
  </Grid>
);

export default LeftPanel;
