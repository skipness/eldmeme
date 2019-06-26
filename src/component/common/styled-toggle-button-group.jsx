import withStyles from '@material-ui/styles/withStyles';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

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
