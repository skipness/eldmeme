import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  paper: {
    background: '#f1f1f1',
    padding: 10,
  },
});

const PanelContainer = props => {
  const classes = useStyles();
  return <Paper className={classes.paper}>{props.children}</Paper>;
};

export default PanelContainer;
