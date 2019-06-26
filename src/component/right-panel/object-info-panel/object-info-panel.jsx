import React from 'react';
import { Grid } from '@material-ui/core';
import PanelContainer from '../../common/panel-container';
import CoordinatePanel from './coordinate-panel/coordinate-panel';
import SizePanel from './size-panel/size-panel';
import RotationPanel from './rotation-panel/rotation-panel';

const ObjectInfoPanel = () => (
  <Grid container item>
    <PanelContainer>
      <Grid container item>
        <CoordinatePanel />
        <SizePanel />
        <RotationPanel />
      </Grid>
    </PanelContainer>
  </Grid>
);

export default ObjectInfoPanel;
