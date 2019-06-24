import React from 'react';
import { Container, Grid } from '@material-ui/core';
import LeftPanel from './component/left-panel/left-panel';
import RightPanel from './component/right-panel/right-panel';
import { CanvasContextProvider } from './component/canvas-context-provider';

const App = () => (
  <Container className="app">
    <Grid container justify="center">
      <CanvasContextProvider>
        <LeftPanel />
        <RightPanel />
      </CanvasContextProvider>
    </Grid>
  </Container>
);

export default App;
