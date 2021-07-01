import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useGlobalContext } from '../contexts/context';
import Box from '@material-ui/core/Box';
import SearchResultsComponent from '../Components/SearchResultComponent';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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

function SavedRecipes() {
  const { savedRecipes } = useGlobalContext();
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography gutterBottom component="h1" variant="h4">
        Saved Recipes
      </Typography>
      {savedRecipes.length === 0
        ? 'No saved recipes'
        : savedRecipes.map((recipe, index) => {
            return (
              <SearchResultsComponent
                key={index}
                savedRecipe={true}
                recipe={recipe}
              />
            );
          })}
    </Box>
  );
}

export default SavedRecipes;
