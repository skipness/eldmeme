import React from 'react';
import { TextField } from '@material-ui/core';

const ImageUrlTextField = React.forwardRef((props, ref) => (
  <TextField
    inputRef={ref}
    inputProps={{ pattern: '(https?://.*.(?:png|jpg))' }}
    label="圖片網址"
    placeholder="只限png、jpg格式"
    type="url"
    onChange={props.onChange}
  />
));

export default ImageUrlTextField;
