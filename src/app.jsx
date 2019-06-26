import React from 'react';
import { Container, Grid } from '@material-ui/core';
import LeftPanel from './component/left-panel/left-panel';
import RightPanel from './component/right-panel/right-panel';
import { CanvasContextProvider } from './component/canvas-context-provider';
import GithubButton from './component/common/github-button';

const App = () => (
  <Container className="app">
    <Grid container justify="center">
      <CanvasContextProvider>
        <LeftPanel />
        <RightPanel />
      </CanvasContextProvider>
    </Grid>
    <GithubButton />
  </Container>
);

export default App;
