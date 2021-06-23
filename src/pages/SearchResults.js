import React from 'react';
import { useState, useEffect } from 'react';
import SearchResultComponent from '../Components/SearchResultComponent';
import { recipeSearch } from '../data';
import { makeStyles } from '@material-ui/core';
import { useGlobalContext } from '../contexts/context';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    background: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function Search() {
  const { searchResults, setSearchResults } = useGlobalContext();

  const classes = useStyles();
  return (
    <div className={classes.container}>
      {searchResults.map(({ recipe }, index) => (
        <SearchResultComponent key={index} recipe={recipe} />
      ))}
    </div>
  );
}

export default Search;
