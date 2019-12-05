import Grid from '@material-ui/core/Grid';
import { fabric } from 'fabric';
import React, { useContext, useEffect, useState } from 'react';
import { CanvasContext } from '../canvas-context-provider';
import ImageUrlTextField from '../common/image-url-textfield';

const BackgroundImageFromUrl = () => {
  const context = useContext(CanvasContext);
  const [background, setBackground] = useState();
  useEffect(() => {
    const {
      current: { canvas },
    } = context;
    fabric.Image.fromURL(background, image => {
      image.set({ originX: 'left', originY: 'top', opacity: 0.8 });
      image.scaleToHeight(canvas.getHeight());
      image.scaleToWidth(canvas.getWidth());
      canvas.setBackgroundImage(image);
      canvas.requestRenderAll();
    });
  }, [background]);

  return (
    <Grid container item alignItems='center' spacing={3}>
      <Grid item>
        <ImageUrlTextField
          onChange={event => setBackground(event.target.value)}
        />
      </Grid>
      {/* <Grid item>
                    <Typography variant='body1'> 或 </Typography>
                </Grid>
                <Grid item>
                    <Button component='label'>
                        上傳圖片
                        <input
                            accept='image/jpeg, image/png'
                            style={{ display: 'none' }}
                            type="file"
                        />
                    </Button>
                </Grid> */}
    </Grid>
  );
};

export default BackgroundImageFromUrl;
