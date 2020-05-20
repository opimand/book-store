import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import StarRating from './Rating';
import ReviewForm from './ReviewForm';
import noImage from '../img/no-photo.svg';
import Reviews from './Reviews';
import AddToShell from './addToShell';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    margin: '0 auto',
    display: 'flex',
  },
  left: {
    marginRight: 20,
  },
  right: {
    width: '100%',
  },
  reviewsWrap: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  chip: {
    marginRight: theme.spacing(0.5),
  },
}));

export default function DetailBook(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!books.length) {
      dispatch(fetchBooks());
    }
  }, []);

  const classes = useStyles();
  const id = props.match.params.id;
  const books = useSelector((state) => state.books.fetchedBooks);
  const book = books.find((book) => book.id === id);

  if (book) {
    const { title, authors, publisher, imageLinks, categories } = book.volumeInfo;
    const { reviews, id, rating } = book;

    return (
      <Container maxWidth="md">
        <Paper className={classes.root}>
          <div className={classes.left}>
            <img src={imageLinks ? imageLinks.thumbnail : noImage} alt="book img" />
          </div>
          <div className={classes.right}>
            <Typography variant="h4" align="left" color="textPrimary" className="book__title">
              {title}
            </Typography>
            <Typography align="left" color="textPrimary" className="book__info">
              {authors}
            </Typography>
            <Typography align="left" color="textPrimary" className="book__info">
              {publisher}
            </Typography>
            <div className={classes.chips}>
              {categories
                ? categories.map((value) => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))
                : null}
            </div>
            <StarRating rating={rating} id={id} />
            <AddToShell book={book} categories={categories}/>
            <ReviewForm id={id} />
          </div>
        </Paper>
        <div className={classes.reviewsWrap}>
          <Reviews reviews={reviews} />
        </div>
      </Container>
    );
  } else return null;
}
