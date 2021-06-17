import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Button from '@material-ui/core/Button';
import LocalDiningIcon from '@material-ui/icons/LocalDining';

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
  menuButton: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
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
}));

function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.nav} position="static">
        <Toolbar>
          <Typography
            className={classes.title}
            component={RouterLink}
            to={'/'}
            color="white"
            variant="h4"
          >
            SpoonFed
            <LocalDiningIcon className={classes.logoIcon} fontSize="large" />
          </Typography>
          <div className={classes.buttons}>
            <Button color="inherit" component={RouterLink} to="/Search">
              Popular Recipes
            </Button>
            <Button color="inherit" component={RouterLink}>
              Saved Recipes
              <BookmarkBorderIcon />
            </Button>
          </div>
          <IconButton
            className={classes.menuButton}
            edge="start"
            aria-label="menu"
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
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
