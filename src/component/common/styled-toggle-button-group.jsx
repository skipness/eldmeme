import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import withStyles from '@material-ui/styles/withStyles';

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
