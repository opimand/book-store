import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(3),
    textAlign: 'center',
  },
}));

export function NoItemsTitle({ title }) {
  const classes = useStyles();

  return <Typography className={classes.title}>No {title} yet</Typography>;
}
