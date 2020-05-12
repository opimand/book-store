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
import Spinner from './Spinner';

const useStyles = makeStyles({
  root: {
    padding: 10,
    border: '2px solid #ececec',
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
});

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
    const { title, authors, publisher, imageLinks } = book.volumeInfo;
    const { reviews, id, rating } = book;

    return (
      <Container maxWidth="md">
        <div className={classes.root}>
          <div className={classes.left}>
            <img src={imageLinks ? imageLinks.thumbnail : noImage} alt="book img" />
          </div>
          <div className={classes.right}>
            <Typography variant="h4" align="left" color="textPrimary" className="book__title">
              {title}
            </Typography>
            <Typography align="left" color="textPrimary" className="book__author">
              {authors}
            </Typography>
            <Typography align="left" color="textPrimary" className="book__publisher">
              {publisher}
            </Typography>
            <StarRating rating={rating} id={id} />
            <ReviewForm id={id} />
          </div>
        </div>
        <div className={classes.reviewsWrap}>
          <Reviews reviews={reviews} />
        </div>
      </Container>
    );
  } else return <div></div>;
}
