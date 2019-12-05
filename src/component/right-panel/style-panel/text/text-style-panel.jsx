import Grid from '@material-ui/core/Grid';
import React from 'react';
import TextAlignmentButtons from './text-alignment-buttons';
import TextFormatButtons from './text-format-buttons';

const TextStylePanel = () => {
  return (
    <Grid container item direction='column' xs={12} spacing={1}>
      <Grid item>
        <TextFormatButtons />
      </Grid>
      <Grid item>
        <TextAlignmentButtons />
      </Grid>
    </Grid>
  );
};

export default TextStylePanel;
