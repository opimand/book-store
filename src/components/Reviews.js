import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: 10,
    marginTop: 50,
    border: '2px solid #ececec',
    margin: '0 auto',
    width: '100%',
  },
  review: {
    textAlign: 'center',
    margin: '30px',
  },
});
export default function Reviews({ reviews }) {
  const classes = useStyles();

  if (reviews) {
    return reviews.map((review) => (
      <div key={Math.random().toString(36).substring(7)} className={classes.root}>
        <Typography>{review}</Typography>
      </div>
    ));
  } else {
    return <Typography className={classes.review}>No reviews yet</Typography>;
  }
}
