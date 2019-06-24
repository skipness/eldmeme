import React from 'react';
import { Grid } from '@material-ui/core';
import {
  FormatAlignLeftTwoTone,
  FormatAlignCenterTwoTone,
  FormatAlignRightTwoTone,
  FormatAlignJustifyTwoTone,
} from '@material-ui/icons';
import StyledToggleButton from '../../common/styled-toggle-button';
import StyledToggleButtonGroup from '../../common/styled-toggle-button-group';

class TextAlignmentButtons extends React.Component {
  state = { alignment: 'left' };

  componentDidUpdate(prevProps, _) {
    if (this.props.alignment !== prevProps.alignment) {
      this.setState({ alignment: this.props.alignment });
    }
  }

  onAlignmentChange = (_, alignment) => {
    this.setState({ alignment: alignment || 'left' });
    this.props.onTextAlignmentChange(alignment || 'left');
  };

  render() {
    const { alignment } = this.state;
    return (
      <Grid container item>
        <StyledToggleButtonGroup
          exclusive
          onChange={this.onAlignmentChange}
          size="small"
          value={alignment}
        >
          <StyledToggleButton value="left">
            <FormatAlignLeftTwoTone />
          </StyledToggleButton>
          <StyledToggleButton value="center">
            <FormatAlignCenterTwoTone />
          </StyledToggleButton>
          <StyledToggleButton value="right">
            <FormatAlignRightTwoTone />
          </StyledToggleButton>
          <StyledToggleButton value="justify-center">
            <FormatAlignJustifyTwoTone />
          </StyledToggleButton>
        </StyledToggleButtonGroup>
      </Grid>
    );
  }
}

export default TextAlignmentButtons;
