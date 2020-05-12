import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { likeBook } from '../redux/actions';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Like from './Like';
import noPhoto from '../img/no-photo.svg';

function shortString(string) {
  let bookTitle;
  if (string.length > 15) {
    bookTitle = string.substring(0, 25) + '...';
  } else return string;

  return bookTitle;
}

export default function MediaCard({ isLiked, id, title, image, author, categories, theme }) {
  const themeColor = useTheme();
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      minWidth: 320,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: themeColor.palette.secondary.light,
      color: themeColor.palette.text.primary,
    },
    media: {
      height: 140,
      backgroundSize: 'cover',
    },
    margin: {
      marginTop: 10,
    },
  });
  const classes = useStyles();
  const [liked, setLike] = useState(isLiked);
  const dispatch = useDispatch();

  useEffect(() => {
    setLike(!isLiked);
  }, [isLiked]);

  function handlerClick() {
    dispatch(likeBook({ id, liked }));
  }

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image ? image.thumbnail : noPhoto}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5">
          {shortString(title)}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p">
          Author: {author ? shortString(author) : 'Unknown'}
        </Typography>
        <Typography variant="body2" color="textPrimary" component="p" className={classes.margin}>
          Category: {categories ? categories : 'Unknown'}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handlerClick} aria-label="like">
          <Like width={15} height={15} disabled={isLiked} />
        </IconButton>
        <Button component={Link} to={'/' + id} size="small" color="secondary">
          Review
        </Button>
      </CardActions>
    </Card>
  );
}
