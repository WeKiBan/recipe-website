import React from 'react';
import { Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { IconButton } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSeedling,
  faBreadSlice,
  faCarrot,
} from '@fortawesome/free-solid-svg-icons';
import { useGlobalContext } from '../contexts/context';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles((theme) => ({
  recipeContainer: {
    fontFamily: 'lato',
    textDecoration: 'none !important',
    color: '#333333',
    textAlign: 'left',
    width: '60%',
    backgroundColor: 'white',
    padding: theme.spacing(2),
    margin: '2px',
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  imageContainer: {
    textAlign: 'center',
  },
  image: {
    width: '100%',
  },
  infoContainer: {
    textAlign: 'left',
  },
  ingredients: {
    fontSize: '18px',
  },
  iconButton: {
    textAlign: 'right',
  },
  bottomContainer: {
    display: 'flex',
    marginTop: theme.spacing(1),
    color: 'grey',
  },
  item: {
    margin: theme.spacing(0, 2),
  },
  icon: {
    marginLeft: theme.spacing(1),
    color: '#379683',
  },
}));

function SearchResultComponent({ recipe, savedRecipe }) {
  const classes = useStyles();
  const { savedRecipes, setSavedRecipes, saveToLocalStorage } =
    useGlobalContext();

  const handleDelete = (e) => {
    e.preventDefault();
    let filteredArray = savedRecipes.filter((item) => item.url !== recipe.url);

    setSavedRecipes(filteredArray);
    saveToLocalStorage(filteredArray);
  };

  const {
    uri,
    url,
    label,
    image,
    ingredientLines,
    healthLabels,
    yield: feeds,
  } = recipe;

  const handleSetSavedRecipes = (e) => {
    e.preventDefault();
    let newSavedRecipes;

    if (isSavedRecipe) {
      newSavedRecipes = savedRecipes.filter((item) => uri !== item.uri);
    } else {
      newSavedRecipes = [...savedRecipes, recipe];
    }
    setSavedRecipes(newSavedRecipes);
    saveToLocalStorage(newSavedRecipes);
  };

  const ingredientsString = ingredientLines.toString();

  const isSavedRecipe = savedRecipes.find((recipe) => recipe.uri === uri)
    ? true
    : false;

  return (
    <Box
      href={url}
      component={Link}
      target="_blank"
      className={classes.recipeContainer}
    >
      <Grid container spacing={2}>
        <Grid className={classes.imageContainer} item xs={4} sm={2}>
          <img className={classes.image} src={image} alt={label} />
        </Grid>

        <Grid className={classes.infoContainer} item xs={6} sm={9}>
          <Typography variant="h5">{label}</Typography>
          <Typography className={classes.ingredients}>
            {ingredientsString.length > 150
              ? ingredientsString.substring(0, 150) + '...'
              : ingredientsString}
          </Typography>
        </Grid>
        <Grid className={classes.iconButton} item xs={1}>
          {savedRecipe ? (
            <IconButton onClick={handleDelete} color="primary">
              <DeleteOutlineIcon className={classes.deleteIcon} />
            </IconButton>
          ) : (
            <IconButton onClick={handleSetSavedRecipes}>
              {isSavedRecipe ? <BookmarkIcon /> : <BookmarkBorderIcon />}
            </IconButton>
          )}
        </Grid>
      </Grid>

      <div className={classes.bottomContainer}>
        <Typography className={classes.item}>Serves {feeds}</Typography>
        {healthLabels
          .filter(
            (label) =>
              label === 'Vegetarian' ||
              label === 'Vegan' ||
              label === 'Gluten-free'
          )
          .map((label, index) => {
            return (
              (label === 'Vegetarian' && (
                <Typography key={index} className={classes.item}>
                  Vegetarian
                  <FontAwesomeIcon className={classes.icon} icon={faSeedling} />
                </Typography>
              )) ||
              (label === 'Vegan' && (
                <Typography key={index} className={classes.item}>
                  Vegan
                  <FontAwesomeIcon className={classes.icon} icon={faCarrot} />
                </Typography>
              )) ||
              (label === 'Gluten-free' && (
                <Typography key={index} className={classes.item}>
                  Gluten
                  <FontAwesomeIcon
                    className={classes.icon}
                    icon={faBreadSlice}
                  />
                </Typography>
              ))
            );
          })}
      </div>
    </Box>
  );
}

export default SearchResultComponent;
