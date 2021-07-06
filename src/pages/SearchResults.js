import React from 'react';
import SearchResultComponent from '../Components/SearchResultComponent';
import { makeStyles } from '@material-ui/core';
import { useGlobalContext } from '../contexts/context';
import SearchBar from 'material-ui-search-bar';
import Box from '@material-ui/core/Box';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    backgroundColor: 'lightGrey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    height: '80px',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  searchBar: {
    width: '80%',
    maxWidth: 900,
    borderRadius: '50px',
  },
  container: {
    padding: '20px',
    background: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'calc(100vh - 220px)',
    overflowX: 'Scroll',
  },
}));

function Search() {
  const {
    searchResults,
    setSearchResults,
    searchQuery,
    setSearchQuery,
    isLoading,
    setIsLoading,
  } = useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSearchResults([]);

    const response = await fetch(
      `/.netlify/functions/fetch-data?query=${searchQuery}`
    );

    const data = await response.json();

    setTimeout(function () {
      setSearchResults(data.hits);
      setIsLoading(false);
    }, 1000);
  };

  const classes = useStyles();
  return (
    <>
      <Box className={classes.searchContainer}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <SearchBar
            value={searchQuery}
            onChange={(newValue) => setSearchQuery(newValue)}
            className={classes.searchBar}
          />
        </form>
      </Box>
      <Box className={classes.container}>
        {isLoading ? (
          <Loader color="#379683" />
        ) : searchResults.length === 0 ? (
          <Typography variant="h4">No Recipes Found</Typography>
        ) : (
          searchResults.map(({ recipe }, index) => (
            <SearchResultComponent
              savedRecipe={false}
              key={index}
              recipe={recipe}
            />
          ))
        )}
      </Box>
    </>
  );
}

export default Search;
