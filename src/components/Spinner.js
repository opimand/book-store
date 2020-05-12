import React from 'react';
import spinner from '../img/spinner.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  spinner: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    width: '50px',
    height: '50px',
  },
});
export default function Spinner() {
  const classes = useStyles();

  return <img src={spinner} className={classes.spinner} alt="spinner" />;
}
