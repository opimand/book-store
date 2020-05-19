import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { addShelf } from '../redux/actions';
import { getId } from '../helpers';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Chips from './Chips';
import CreateNotification from './CreateNotification';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '600px',
    width: '100%',
    margin: '0 auto',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  form: {
    width: '100%',
  },
  paper: {
    width: '100%',
    padding: '10px',
  },
  button: {
    marginTop: 20,
  },
}));

export function CreateShelf({ categories }) {
  const classes = useStyles();
  const [shelf, setShelf] = useState({
    name: '',
    description: '',
    books: [],
    reviews: [],
  });
  const [isNotify, setNotify] = useState(false);
  const dispatch = useDispatch();
  console.log('isNotify', isNotify);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addShelf(shelf));
    setNotify(true);
    setShelf({
      name: '',
      description: '',
    });
    setTimeout(() => {
      setNotify(false);
    }, 1000);
  }

  function handleInputChange(e) {
    setShelf({
      ...shelf,
      id: getId(),
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Grid container justify="center" className={classes.root}>
      <Paper className={classes.paper}>
        <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
          <TextField
            id="standard-full-width"
            label="Name of shelf"
            fullWidth
            margin="none"
            name="name"
            value={shelf.name}
            onChange={handleInputChange}
          />
          <TextField
            id="standard-full-width"
            label="Description of shelf"
            fullWidth
            margin="normal"
            name="description"
            value={shelf.description}
            onChange={handleInputChange}
          />
          <Chips categories={categories} setCategory={setShelf} shelf={shelf} />
          <Button className={classes.button} variant="contained" color="primary" type="submit">
            Create
          </Button>
        </form>
      </Paper>
      <CreateNotification isNotify={isNotify} />
    </Grid>
  );
}
