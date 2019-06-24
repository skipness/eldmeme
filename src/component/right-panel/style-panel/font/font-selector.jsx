import React from 'react';
import {
  Grid,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
} from '@material-ui/core';
import { CanvasContextConsumer } from '../../../canvas-context-provider';
import { fonts } from '../../../../constant';

class Selector extends React.Component {
  state = { font: this.props.font };

  componentDidUpdate(prevProps, _) {
    if (this.props.font !== prevProps.font) {
      this.setState({ font: this.props.font });
    }
  }

  onFontChange = event => {
    const font = event.target.value;
    this.setState({ font: font });
    this.props.onFontChange(font);
  };

  render() {
    const { font } = this.state;
    return (
      <FormControl fullWidth>
        <Select displayEmpty value={font} onChange={this.onFontChange}>
          {Object.keys(fonts).map((fontName, index) => (
            <MenuItem
              key={index}
              value={fontName}
              style={{ fontFamily: `${fontName}` }}
            >
              {fonts[fontName]}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>字體</FormHelperText>
      </FormControl>
    );
  }
}

const FontSelector = () => (
  <Grid container item justify="center">
    <CanvasContextConsumer>
      {({ activeObject, onFontChange }) => (
        <Selector
          font={(activeObject && activeObject.fontFamily) || 'PMingLiU'}
          onFontChange={onFontChange}
        />
      )}
    </CanvasContextConsumer>
  </Grid>
);

export default FontSelector;
