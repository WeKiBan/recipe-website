import React from 'react';
import SearchResultComponent from '../Components/SearchResultComponent';
import { makeStyles } from '@material-ui/core';
import { useGlobalContext } from '../contexts/context';
import SearchBar from 'material-ui-search-bar';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    backgroundColor: 'lightGrey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    height: '80px',
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
    searchQuery,
    setSearchQuery,
  } = useGlobalContext();



  const classes = useStyles();
  return (
    <>
      <Box className={classes.searchContainer}>
        <SearchBar
          value={searchQuery}
          onChange={(newValue) => setSearchQuery(newValue)}
          className={classes.searchBar}
        />
      </Box>
      <Box className={classes.container}>
        {searchResults.map(({ recipe }, index) => (
          <SearchResultComponent
            savedRecipe={false}
            key={index}
            recipe={recipe}
          />
        ))}
      </Box>
    </>
  );
}

export default Search;
