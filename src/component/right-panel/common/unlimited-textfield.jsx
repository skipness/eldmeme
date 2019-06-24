import React from 'react';
import { InputAdornment, TextField } from '@material-ui/core';

class UnlimitedTextField extends React.Component {
  state = { value: this.props.value };

  componentDidUpdate(prevProps, _) {
    if (this.props.value !== prevProps.value) {
      this.setState({ value: this.toInt(this.props.value) });
    }
  }

  onChange = event => {
    const value = this.toInt(event.target.value);
    this.setState({ value: value });
    this.props.onChange(value);
  };

  toInt = value => Math.round(parseInt(value));

  render() {
    const { value } = this.state;
    return (
      <TextField
        fullWidth
        InputProps={{
          endAdornment: <InputAdornment position="end">px</InputAdornment>,
        }}
        margin="dense"
        multiline={false}
        type="number"
        value={value || ''}
        onChange={this.onChange}
      />
    );
  }
}

export default UnlimitedTextField;
