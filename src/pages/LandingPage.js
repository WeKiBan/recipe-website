import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/backgroundImage.jpg';
import SearchBar from 'material-ui-search-bar';
import Typography from '@material-ui/core/Typography';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import { useGlobalContext } from '../contexts/context';
import { useHistory } from 'react-router-dom';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import { useWindowSize } from '../helperFunctions/windowResize';

const useStyles = makeStyles((theme) => ({
  container: {
    background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: window.innerHeight,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  savedRecipesLink: {
    position: 'absolute',
    top: 20,
    right: 20,
    color: 'white',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '100px',
  },
  heading: {
    fontFamily: 'Dancing Script',
    color: 'white',
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: '50px',
    },
  },
  searchBar: {
    width: '80%',
    borderRadius: '33px',
    maxWidth: '800px',
  },
  message: {
    marginTop: theme.spacing(4),
    color: 'white',
    fontFamily: 'Lato',
    fontWeight: '300',
    padding: theme.spacing(0, 2),
  },
  logoIcon: {
    marginBottom: theme.spacing(-2),
    marginLeft: theme.spacing(1),
    fontSize: '90px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '50px',
      marginBottom: theme.spacing(-1),
      marginLeft: theme.spacing(0),
    },
  },
  form: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}));

function LandingPage() {
  const classes = useStyles();
  const { searchQuery, setSearchQuery, setSearchResults } = useGlobalContext();
  const history = useHistory();

  const size = useWindowSize();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearchResults([]);
    history.push('/SearchResults');
    const response = await fetch(
      `/.netlify/functions/fetch-data?query=${searchQuery}`
    );

    const data = await response.json();
    console.log(data);
    console.log(data.hits);

    setTimeout(function () {
      setSearchResults(data.hits);
    }, 1000);
  };

  return (
    <div style={{ height: size }} className={classes.container}>
      <Button
        className={classes.savedRecipesLink}
        onClick={() => setSearchQuery('')}
        color="inherit"
        to="/SavedRecipes"
        component={RouterLink}
      >
        Saved Recipes
        <BookmarkBorderIcon />
      </Button>
      <div className={classes.content}>
        <Typography className={classes.heading} variant="h1">
          Spoonly <LocalDiningIcon className={classes.logoIcon} />
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <SearchBar
            className={classes.searchBar}
            placeholder="Search Recipes..."
            value={searchQuery}
            onChange={(newValue) => {
              setSearchQuery(newValue);
            }}
          />
        </form>
        <Typography className={classes.message} variant="h5" fontWeight={300}>
          1000's of delicious recipes at your finger tips!
        </Typography>
      </div>
    </div>
  );
}

export default LandingPage;
