import { withStyles } from '@material-ui/styles';
import { IconButton } from '@material-ui/core';

const StyledToggleButton = withStyles({
  root: {
    padding: '10px',
  },
})(IconButton);

export default StyledToggleButton;
