import withStyles from '@material-ui/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';

const StyledToggleButton = withStyles({
  root: {
    padding: '10px',
  },
})(IconButton);

export default StyledToggleButton;
