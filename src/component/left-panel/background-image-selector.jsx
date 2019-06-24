import React from 'react';
import {
  ButtonBase,
  Grid,
  GridList,
  GridListTile,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
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
