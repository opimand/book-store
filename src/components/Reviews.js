import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { NoItemsTitle } from './NoItemsTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    marginTop: theme.spacing(1),
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  review: {
    textAlign: 'center',
  },
}));
export default function Reviews({ reviews }) {
  const classes = useStyles();

  if (reviews.length) {
    return reviews.map((review) => (
      <Paper key={Math.random().toString(36).substring(7)} className={classes.root}>
        <Typography>{review}</Typography>
      </Paper>
    ));
  } else {
    return <NoItemsTitle title={'reviews'} />;
  }
}
