import React from 'react';
import { useState, useEffect } from 'react';
import SearchResultComponent from '../Components/SearchResultComponent';
import { recipeSearch } from '../data';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';

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
  const [results, setResults] = useState(recipeSearch.hits);
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {results.map(({ recipe }, index) => (
        <SearchResultComponent key={index} recipe={recipe} />
      ))}
    </div>
  );
}

export default Search;
