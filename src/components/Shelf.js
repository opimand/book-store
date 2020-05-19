import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  list: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function Shelf({ shelf }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {shelf.name}
        </Typography>
        <Typography variant="h5" component="h2">
          {shelf.description}
        </Typography>
        <ul className={classes.list}>
          <Typography variant="h5" component="h2">
            Categories:
          </Typography>
          {shelf.categories.map((data) => {
            return (
              <li key={data.key}>
                <Chip label={data} className={classes.chip} />
              </li>
            );
          })}
        </ul>
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={'/shelves/' + shelf.id}
          variant="contained"
          color="primary"
          size="small"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
