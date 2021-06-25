import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useGlobalContext } from '../contexts/context';
import Box from '@material-ui/core/Box';
import SavedRecipeCard from '../Components/SavedRecipeCard';

const useStyles = makeStyles((theme) => ({
  box: {
    padding: '20px',
    background: '#f5f5f5',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 140px)',
    overflowX: 'Scroll',
  },
}));

function SavedRecipes() {
  const { savedRecipes, setSavedRecipes } = useGlobalContext();
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
