import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import UnlimitedTextfield from '../../common/unlimited-textfield';

const CommonInput = ({ description, disabled, onChange, value }) => (
  <Grid container item xs={6} alignItems='center' justify='center'>
    <Grid item xs={3}>
      <Typography variant='caption'>{description}</Typography>
    </Grid>
    <Grid item xs={7}>
      <UnlimitedTextfield
        disabled={disabled}
        onChange={onChange}
        value={value}
      />
    </Grid>
  </Grid>
);

export default CommonInput;
