import React from 'react';
import { useState, useEffect } from 'react';
import SearchResultComponent from '../Components/SearchResultComponent';
import { recipeSearch } from '../data';
import { makeStyles } from '@material-ui/core';
import { useGlobalContext } from '../contexts/context';
import SearchBar from 'material-ui-search-bar';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    background: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: 'lightGrey',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
  searchBar: {
    width: '80%',
    maxWidth: 900,
    margin: theme.spacing(2, 0),
    borderRadius: '50px',
  },
}));

function Search() {
  const { searchResults, setSearchResults, searchQuery, setSearchQuery } =
    useGlobalContext();

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
          <SearchResultComponent key={index} recipe={recipe} />
        ))}
      </Box>
    </>
  );
}

export default Search;
