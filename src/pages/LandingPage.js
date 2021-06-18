import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/landingPageSplash.jpg';
import SearchBar from 'material-ui-search-bar';
import Typography from '@material-ui/core/Typography';
import LocalDiningIcon from '@material-ui/icons/LocalDining';

const useStyles = makeStyles((theme) => ({
  container: {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    height: `calc(100vh -  100px)`,
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
}));

function LandingPage() {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Typography className={classes.heading} variant="h1" color="white">
          SpoonFed <LocalDiningIcon className={classes.logoIcon} />
        </Typography>
        <SearchBar
          className={classes.searchBar}
          placeholder="Search Recipes..."
          value={searchValue}
          onChange={(newValue) => {
            setSearchValue(newValue);
          }}
        />
        <Typography
          className={classes.message}
          variant="h5"
          color="white"
          fontWeight={300}
        >
          1000's of delicious recipes at your finger tips!
        </Typography>
      </div>
    </div>
  );
}

export default LandingPage;
