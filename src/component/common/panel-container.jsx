import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/styles/makeStyles';
import React from 'react';

const useStyles = makeStyles({
  paper: {
    background: '#f1f1f1',
    padding: 10,
  },
});

const PanelContainer = ({ children }) => {
  const classes = useStyles();
  return <Paper className={classes.paper}>{children}</Paper>;
};

export default PanelContainer;
