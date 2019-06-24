import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { CanvasContextConsumer } from '../canvas-context-provider';

const BackgroundImageFromUrl = () => (
  <CanvasContextConsumer>
    {({ changeBackgroundImageFromUrl }) => (
      <Grid container item alignItems="center" spacing={3}>
        <Grid item>
          <TextField
            label="圖片網址"
            type="url"
            placeholder="只限png、jpg格式"
            inputProps={{ pattern: '(https?://.*.(?:png|jpg))' }}
            onChange={changeBackgroundImageFromUrl}
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
    )}
  </CanvasContextConsumer>
);

export default BackgroundImageFromUrl;
