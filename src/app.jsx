import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import CanvasContextProvider from './component/canvas-context-provider';
import GithubButton from './component/common/github-button';
import LeftPanel from './component/left-panel/left-panel';
import RightPanel from './component/right-panel/right-panel';

const App = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  }, []);

  return (
    <Container className='app'>
      <Grid container justify='center'>
        <CanvasContextProvider>
          <LeftPanel />
          <RightPanel />
        </CanvasContextProvider>
      </Grid>
      <GithubButton />
    </Container>
  );
};

export default App;
