import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { addShelf } from '../redux/actions';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Chips from './Chips';

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
  },
}));

export function CreateShelf({ categories }) {
  const classes = useStyles();
  const [shelf, setShelf] = useState({
    name: '',
    description: '',
  });
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addShelf(shelf));
  }

  function handleInputChange(e) {
    setShelf({
      ...shelf,
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
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            name="name"
            InputLabelProps={{
              shrink: true,
            }}
            value={shelf.name}
            onChange={handleInputChange}
          />
          <TextField
            id="standard-full-width"
            label="Description of shelf"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            name="description"
            value={shelf.description}
            onChange={handleInputChange}
          />
          <Typography> Add category to shell</Typography>
          <Chips categories={categories} setCategory={setShelf} shelf={shelf} />
          <Button type="submit">Create</Button>
        </form>
      </Paper>
    </Grid>
  );
}
