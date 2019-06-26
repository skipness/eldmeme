import React from 'react';
import { Grid } from '@material-ui/core';
import { CanvasContextConsumer } from '../canvas-context-provider';
import ImageUrlTextField from '../common/image-url-textfield';

const BackgroundImageFromUrl = () => (
  <CanvasContextConsumer>
    {({ changeBackgroundImageFromUrl }) => (
      <Grid container item alignItems="center" spacing={3}>
        <Grid item>
          <ImageUrlTextField onChange={changeBackgroundImageFromUrl} />
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
    )}
  </CanvasContextConsumer>
);

export default BackgroundImageFromUrl;
