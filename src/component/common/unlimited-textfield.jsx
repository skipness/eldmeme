import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

class UnlimitedTextField extends React.Component {
  state = { value: this.props.value };

  componentDidUpdate(prevProps, _) {
    if (this.props.value !== prevProps.value) {
      this.setState({ value: this.toInt(this.props.value).toString() });
    }
  }

  onChange = event => {
    const roundedValue = this.toInt(event.target.value);
    this.setState({ value: roundedValue.toString() });
    this.props.onChange(roundedValue);
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
        value={value || '0'}
        onChange={this.onChange}
      />
    );
  }
}

export default UnlimitedTextField;
