import React, { useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useDispatch, useSelector } from 'react-redux';
import { darkModeToggle, fetchBooks } from '../redux/actions';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CenteredGrid from './Grid';
import DetailBook from './DetailBook';
import Spinner from './Spinner';
import { CreateShelf } from './CreateShelf';
import { getCategories } from '../helpers';

const drawerWidth = 240;
const history = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    marginTop: 50,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  iconNight: {
    width: '15px',
    height: '15px',
    marginTop: '-2px',
    marginRight: '5px',
  },
  button: {
    color: theme.palette.primary.contrastText,
    marginLeft: '10px',
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.fetchedBooks);
  const loading = useSelector((state) => state.app.loading);
  const shelves = useSelector((state) => state.books.shelves);
  const favoriteBooks = books.filter((book) => book.liked === true);
  const categories = getCategories(books.map((i) => i.volumeInfo.categories));

  console.log('categories: ', categories);

  useEffect(() => {
    if (!books.length) {
      dispatch(fetchBooks());
    }
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function darkModeHandler() {
    dispatch(darkModeToggle());
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <Router history={history}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Books
            </Typography>
            <Button className={clsx(classes.button)} onClick={darkModeHandler}>
              <img
                className={clsx(classes.iconNight)}
                src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c399.png"
              ></img>
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button component={Link} to="/">
              <ListItemText>Books</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/favorites">
              <ListItemText>Favorites</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/create">
              <ListItemText>Create shelf</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/shelves">
              <ListItemText>Shelves</ListItemText>
            </ListItem>
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <Route exact path="/" component={() => <CenteredGrid books={books} title="Books" />} />
          <Route
            path="/favorites"
            component={() => <CenteredGrid books={favoriteBooks} title="Favorites" />}
          />
          <Route
            path="/shelves"
            component={() => <CenteredGrid shelves={shelves} title="Shelves" />}
            title="Shelves"
          />
          <Route
            path="/create"
            component={() => (
              <CreateShelf shelves={shelves} categories={categories} title="Shelves" />
            )}
            title="Create shelf"
          />
          <Route path="/:id" component={DetailBook} />
        </main>
      </div>
    </Router>
  );
}
