import React from 'react';
import { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../images/landingPageSplash.jpg';
import Input from '@material-ui/core/Input';
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Dancing Script',
    color: 'white',
    paddingBottom: theme.spacing(4),
  },
  searchBar: {
    width: '80%',
    borderRadius: '33px',
    maxWidth: '800px',
  },
  message: {
    marginTop: theme.spacing(4),
    color: 'white',
    paddingBottom: '100px',
    fontFamily: 'Lato',
    fontWeight: '300',
  },
  logoIcon: {
    marginBottom: theme.spacing(-2),
    marginLeft: theme.spacing(1),
    fontSize: '90px',
  },
}));

function LandingPage() {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className={classes.container}>
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
        1000s of delicious recipes right at you finger tips!
      </Typography>
    </div>
  );
}

export default LandingPage;
