import React from 'react';
import Grid from '@material-ui/core/Grid';
import MediaCard from './Card';
import { makeStyles } from '@material-ui/core/styles';
import { NoItemsTitle } from './NoItemsTitle';

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
  center: {
    marginTop: 20,
    textAlign: 'center ',
  },
}));

export function GridBooks({ books, title, match, shelves }) {
  const classes = useStyles();

  if (books === false) {
    return <NoItemsTitle title={title} />;
  } else if (match) {
    const id = match.params.shelfId;
    const shelf = shelves.find((shelf) => shelf.id === id);

    return (
      <div className={classes.root}>
        <Grid container spacing={3} justify="center">
          {shelf.books.map(
            ({
              id,
              liked,
              volumeInfo: { imageLinks: image, title, authors, publisher, categories },
            }) => (
              <Grid item см={6} lg={3} key={id}>
                <MediaCard
                  key={id}
                  id={id}
                  image={image}
                  title={title}
                  author={authors}
                  publisher={publisher}
                  categories={categories}
                  isLiked={liked}
                />
              </Grid>
            )
          )}
        </Grid>
      </div>
    );
  } else if (books) {
    return (
      <div className={classes.root}>
        <Grid container spacing={3} justify="center">
          {books.map(
            ({
              id,
              liked,
              volumeInfo: { imageLinks: image, title, authors, publisher, categories },
            }) => (
              <Grid item см={6} lg={3} key={id}>
                <MediaCard
                  key={id}
                  id={id}
                  image={image}
                  title={title}
                  author={authors}
                  publisher={publisher}
                  categories={categories}
                  isLiked={liked}
                />
              </Grid>
            )
          )}
        </Grid>
      </div>
    );
  }
}
