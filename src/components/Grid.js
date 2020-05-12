import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MediaCard from './Card';
import Shelf from './Shelf';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
  },
}));

export default function CenteredGrid({ books, title, shelves }) {
  const classes = useStyles();

  if (books) {
    return (
      <div className={classes.root}>
        <Grid container spacing={3} justify="center">
          {books.map((book) => (
            <Grid item см={6} lg={3} key={book.id}>
              <MediaCard
                key={book.id}
                id={book.id}
                image={book.volumeInfo.imageLinks}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors}
                publisher={book.volumeInfo.publisher}
                categories={book.volumeInfo.categories}
                isLiked={book.liked}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
  if (shelves) {
    return (
      <>
        {shelves.map((shelf) => (
          <Shelf shelf={shelf} />
        ))}
      </>
    );
  }
  return <Typography>No {title} yet.</Typography>;
}
