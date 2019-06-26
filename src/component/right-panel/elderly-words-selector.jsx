import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { CanvasContextConsumer } from '../canvas-context-provider';
import { elderlyWords } from '../../constant';

const ElderlyWordsSelector = () => {
  const [text, setText] = React.useState(elderlyWords[0]);
  const handleChange = event => {
    setText(event.target.value);
  };
  return (
    <Grid container item xs={12}>
      <CanvasContextConsumer>
        {({ addText }) => (
          <FormControl fullWidth>
            <Select
              displayEmpty
              value={text}
              onChange={event => {
                handleChange(event);
                addText(event.target.value);
              }}
            >
              {elderlyWords.map((word, index) => (
                <MenuItem key={index} value={word}>
                  {word}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>快速加入長輩字</FormHelperText>
          </FormControl>
        )}
      </CanvasContextConsumer>
    </Grid>
  );
};

export default ElderlyWordsSelector;
