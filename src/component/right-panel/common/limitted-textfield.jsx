import React from 'react';
import { TextField } from '@material-ui/core';

class LimittedTextField extends React.Component {
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
    const {
      limit: { min, max },
    } = this.props;
    const { value } = this.state;
    return (
      <TextField
        fullWidth
        inputProps={{ min: min, max: max }}
        margin="dense"
        multiline={false}
        type="number"
        value={value || ''}
        onChange={this.onChange}
      />
    );
  }
}

export default LimittedTextField;
