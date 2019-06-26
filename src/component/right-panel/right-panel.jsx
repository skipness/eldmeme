import React from 'react';
import Grid from '@material-ui/core/Grid';
import ActionPanel from './action-panel/action-panel';
import ObjectInfoPanel from './object-info-panel/object-info-panel';
import StylePanel from './style-panel/style-panel';

const RightPanel = () => (
  <Grid item xs={10} sm={6} md={5} lg={3}>
    <Grid container direction="column" spacing={2}>
      <ActionPanel />
      <ObjectInfoPanel />
      <StylePanel />
    </Grid>
  </Grid>
);

export default RightPanel;
