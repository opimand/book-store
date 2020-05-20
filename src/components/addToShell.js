import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { addBookToShelf } from '../redux/actions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    margin: '10px 0',
  },
}));

export default function AddToShell({ book }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [shelf, setShelf] = React.useState('');
  const shelves = useSelector((state) => state.books.shelves);

  const handleChange = (event) => {
    setShelf(event.target.value || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    dispatch(addBookToShelf({ shelfToAdd: shelf, bookToAdd: book }));
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.button}
        color="primary"
        variant="contained"
        onClick={handleClickOpen}
      >
        Add book to shelf
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Choose a shelf</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-dialog-select-label">Shelf</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={shelf}
                onChange={handleChange}
                input={<Input />}
              >
                <MenuItem value="">
                  <em>No shelves</em>
                </MenuItem>
                {shelves
                  ? shelves.map((shelf) => <MenuItem value={shelf.id}>{shelf.name}</MenuItem>)
                  : null}
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreate} disabled={!shelf} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
