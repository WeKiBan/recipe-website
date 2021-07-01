import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useGlobalContext } from '../contexts/context';
import Box from '@material-ui/core/Box';
import SavedRecipeCard from '../Components/SavedRecipeCard';
import SearchResultsComponent from '../Components/SearchResultComponent';

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
      {savedRecipes.map((recipe) => {
        return <SearchResultsComponent savedRecipe={true} recipe={recipe} />;
      })}
    </Box>
  );
}

export default SavedRecipes;
