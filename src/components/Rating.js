import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { rateBook } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function StarRating({ rating, id }) {
  const [value, setValue] = React.useState(rating);
  const dispatch = useDispatch();

  function ratingHandler(e, newValue) {
    setValue(newValue);
    dispatch(rateBook({ id, rating: newValue }));
  }

  return (
    <div>
      <Box component="fieldset" mb={3} ml={'-4px'} pl={0} borderColor="transparent">
        <Rating name="simple-controlled" value={value} onChange={ratingHandler} />
      </Box>
    </div>
  );
}
