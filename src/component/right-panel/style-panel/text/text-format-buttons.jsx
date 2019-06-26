import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormatBoldTwoTone from '@material-ui/icons/FormatBoldTwoTone';
import FormatItalicTwoTone from '@material-ui/icons/FormatItalicTwoTone';
import FormatUnderlinedTwoTone from '@material-ui/icons/FormatUnderlinedTwoTone';
import StrikethroughSTwoTone from '@material-ui/icons/StrikethroughSTwoTone';
import StyledToggleButton from '../../../common/styled-toggle-button';
import StyledToggleButtonGroup from '../../../common/styled-toggle-button-group';

class TextFormatButtons extends React.Component {
  state = { formats: [] };

  componentDidUpdate(prevProps, _) {
    if (this.props.formats !== prevProps.formats) {
      this.setState({ formats: this.props.formats });
    }
  }

  onFormatChange = (_, formats) => {
    this.setState({ formats: formats });
    this.props.onTextFormatChange(formats);
  };

  render() {
    const { formats } = this.state;
    return (
      <Grid container item alignItems="center" justify="center">
        <StyledToggleButtonGroup
          onChange={this.onFormatChange}
          size="small"
          value={formats}
        >
          <StyledToggleButton value="bold">
            <FormatBoldTwoTone />
          </StyledToggleButton>
          <StyledToggleButton value="italic">
            <FormatItalicTwoTone />
          </StyledToggleButton>
          <StyledToggleButton value="underline">
            <FormatUnderlinedTwoTone />
          </StyledToggleButton>
          <StyledToggleButton value="linethrough">
            <StrikethroughSTwoTone />
          </StyledToggleButton>
        </StyledToggleButtonGroup>
      </Grid>
    );
  }
}

export default TextFormatButtons;
