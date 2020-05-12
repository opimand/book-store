import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SendButton from './ButtonSend';
import { useDispatch } from 'react-redux';
import { addReview } from '../redux/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '100%',
    },
  },
}));

export default function ReviewForm({ id }) {
  const classes = useStyles();
  const [review, setReview] = useState('');
  const dispatch = useDispatch();

  function handleChange(e) {
    setReview(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addReview({ id, review }));
    setReview('');
  }

  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <TextField
        onChange={handleChange}
        multiline
        id="outlined-basic"
        label="Review"
        variant="outlined"
        value={review}
      />
      <SendButton disabled={review} />
    </form>
  );
}
