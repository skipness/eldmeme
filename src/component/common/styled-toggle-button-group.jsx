import { withStyles } from '@material-ui/styles';
import { ToggleButtonGroup } from '@material-ui/lab';

const StyledToggleButtonGroup = withStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    borderRadius: '0px',
    backgroundColor: 'transparent',
  },
})(ToggleButtonGroup);

export default StyledToggleButtonGroup;
