import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { IconButton } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
  faSeedling,
  faBreadSlice,
  faCarrot,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  recipeContainer: {
    fontFamily: 'lato',
    color: '#333333',
    textAlign: 'left',
    width: '60%',
    backgroundColor: 'white',
    padding: theme.spacing(2),
    margin: '2px',
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
  },
}));

function SearchResultComponent({ recipe }) {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleClickExpand = () => {
    setExpanded(!expanded);
  };
  console.log(recipe);

  const {
    label,
    image,
    totalTime,
    calories,
    ingredientLines,
    healthLabels,
    yield: feeds,
  } = recipe;

  const ingredientsString = ingredientLines.toString();

  return (
    <div className={classes.recipeContainer}>
      <Grid container spacing={2}>
        <Grid className={classes.imageContainer} item xs={4} sm={2}>
          <img className={classes.image} src={image} alt={label} />
        </Grid>

        <Grid className={classes.infoContainer} item xs={6} sm={9}>
          <Typography variant="h5">{label}</Typography>
          <Typography className={classes.ingredients}>
            {ingredientsString.length > 200
              ? ingredientsString.substring(0, 200) + '...'
              : ingredientsString}
          </Typography>
        </Grid>
        <Grid className={classes.iconButton} item xs={1}>
          <IconButton>
            <BookmarkBorderIcon />
          </IconButton>
        </Grid>
      </Grid>

      <div className={classes.bottomContainer}>
        <Typography className={classes.item}>Serves {feeds}</Typography>
        {healthLabels
          .filter((label) => {
            if (
              label === 'Vegetarian' ||
              label === 'Vegan' ||
              label === 'Gluten-free'
            ) {
              return label;
            }
          })
          .map((label) => {
            return (
              (label === 'Vegetarian' && (
                <Typography className={classes.item}>
                  Vegetarian
                  <FontAwesomeIcon className={classes.icon} icon={faSeedling} />
                </Typography>
              )) ||
              (label === 'Vegan' && (
                <Typography className={classes.item}>
                  Vegan
                  <FontAwesomeIcon className={classes.icon} icon={faCarrot} />
                </Typography>
              )) ||
              (label === 'Gluten-free' && (
                <Typography className={classes.item}>
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
    </div>
  );
}

export default SearchResultComponent;
