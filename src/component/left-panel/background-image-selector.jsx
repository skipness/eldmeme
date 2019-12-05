import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import { fabric } from 'fabric';
import React, { useContext, useEffect, useState } from 'react';
import { backgroundImages } from '../../constant';
import { CanvasContext } from '../canvas-context-provider';

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
  const canvasContext = useContext(CanvasContext);
  const [background, setBackground] = useState();
  const classes = useStyles();
  useEffect(() => {
    const {
      current: { canvas },
    } = canvasContext;
    fabric.Image.fromURL(background, image => {
      image.set({ originX: 'left', originY: 'top', opacity: 0.8 });
      image.scaleToHeight(canvas.getHeight());
      image.scaleToWidth(canvas.getWidth());
      canvas.setBackgroundImage(image);
      canvas.requestRenderAll();
    });
  }, [background, canvasContext]);

  return (
    <Grid container item direction='column'>
      <Typography variant='subtitle2'>背景圖</Typography>
      <GridList col={10} spacing={6}>
        {backgroundImages.map((image, index) => (
          <GridListTile key={index} cols={0.5} rows={0.5}>
            <ButtonBase
              className={classes.buttonBase}
              onClick={event => setBackground(event.target.src)}
            >
              <img alt={index} className={classes.image} src={image} />
            </ButtonBase>
          </GridListTile>
        ))}
      </GridList>
    </Grid>
  );
};

export default BackgroundImageSelector;
