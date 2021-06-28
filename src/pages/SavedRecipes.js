import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useGlobalContext } from '../contexts/context';
import Box from '@material-ui/core/Box';
import SavedRecipeCard from '../Components/SavedRecipeCard';

const useStyles = makeStyles((theme) => ({
  box: {
    padding: '20px',
    background: '#f5f5f5',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    justifyContent: 'center',
    height: 'calc(100vh - 140px)',
    overflowX: 'Scroll',
  },
}));

function SavedRecipes() {
  const { savedRecipes } = useGlobalContext();
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      {savedRecipes.map((recipe, index) => (
        <SavedRecipeCard key={index} recipe={recipe} />
      ))}
    </Box>
  );
}

export default SavedRecipes;
