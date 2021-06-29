import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Button from '@material-ui/core/Button';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import { useGlobalContext } from '../contexts/context';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  nav: {
    height: '100px',
    backgroundColor: '#379683',
    justifyContent: 'center',
  },
  logoIcon: {
    marginBottom: theme.spacing(-1),
    marginLeft: theme.spacing(1),
  },
  title: {
    fontFamily: 'Dancing Script',
    marginLeft: theme.spacing(2),
    textAlign: 'left',
    flexGrow: 1,
    textDecoration: 'none',
    color: 'inherit',
  },
  buttons: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  searchIcon: {
    marginLeft: theme.spacing(1),
  },
}));

function NavBar() {
  const classes = useStyles();
  const { setSearchQuery } = useGlobalContext();
  const { pathname } = useLocation();
  return (
    <div className={classes.root}>
      <AppBar
        style={pathname === '/' ? { display: 'none' } : {}}
        className={classes.nav}
        position="static"
      >
        <Toolbar>
          <Typography
            onClick={() => setSearchQuery('')}
            className={classes.title}
            component={RouterLink}
            to={'/'}
            variant="h4"
          >
            Spoonly
            <LocalDiningIcon className={classes.logoIcon} fontSize="large" />
          </Typography>

          {pathname === '/SavedRecipes' ? (
            <Button
              onClick={() => setSearchQuery('')}
              color="inherit"
              to="/"
              component={RouterLink}
            >
              Search
              <SearchIcon className={classes.searchIcon} />
            </Button>
          ) : (
            <Button
              onClick={() => setSearchQuery('')}
              color="inherit"
              to="/SavedRecipes"
              component={RouterLink}
            >
              Saved Recipes
              <BookmarkBorderIcon />
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

// {<ul>
//   <Link to="/Search">
//     <li>Search</li>
//   </Link>
//   <Link to="/FavRecipe">
//     <li>Fav Recipes</li>
//   </Link>
// </ul>;}

export default NavBar;
