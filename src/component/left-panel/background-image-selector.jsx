import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import { CanvasContextConsumer } from '../canvas-context-provider';
import { backgroundImages } from '../../constant';

const useStyles = makeStyles({
  buttonBase: {
    top: '50%',
    width: '100%',
    position: 'relative',
    transform: 'translateY(-50%)',
  },
  image: {
    top: '50%',
    width: '100%',
    position: 'relative',
  },
});

const BackgroundImageSelector = () => {
  const classes = useStyles();
  return (
    <CanvasContextConsumer>
      {({ changeBackgroundImage }) => (
        <Grid container item direction="column">
          <Typography variant="subtitle2">背景圖</Typography>
          <GridList col={10} spacing={6}>
            {backgroundImages.map((image, index) => (
              <GridListTile key={index} cols={0.5} rows={0.5}>
                <ButtonBase
                  className={classes.buttonBase}
                  onClick={changeBackgroundImage}
                >
                  <img alt={index} className={classes.image} src={image} />
                </ButtonBase>
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      )}
    </CanvasContextConsumer>
  );
};

export default BackgroundImageSelector;
