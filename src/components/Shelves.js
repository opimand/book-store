import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';
import { makeStyles } from '@material-ui/core/styles';
import { NoItemsTitle } from './NoItemsTitle';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column-reverse',
    marginTop: theme.spacing(0.5),
  },
  form: {
    marginBottom: theme.spacing(1),
  },
  spacing: {
    padding: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  title: {
    marginTop: theme.spacing(3),
  },
}));
export function Shelves({ shelves }) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} justify="center">
        {shelves.length ? (
          shelves.map(({ name, description, id, reviews }) => (
            <Grid item sm={12}>
              <Paper className={classes.spacing}>
                <Typography>Name: {name}</Typography>
                <Typography>Description: {description}</Typography>
                <Button
                  className={classes.button}
                  color="primary"
                  variant="contained"
                  component={Link}
                  to={`/shelves/${id}`}
                >
                  Open shelf
                </Button>

                <ReviewForm className={classes.form} id={id} shelf="shelf" />

                <div className={classes.wrapper}>
                  <Reviews reviews={reviews} />
                </div>
              </Paper>
            </Grid>
          ))
        ) : (
          <NoItemsTitle title={'shelves'} />
        )}
      </Grid>
    </div>
  );
}
