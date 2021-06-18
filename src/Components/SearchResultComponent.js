import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faBreadSlice } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  recipeContainer: {
    fontFamily: 'lato',
    color: '#333333',
    textAlign: 'left',
    maxWidth: '60%',
    backgroundColor: 'white',
    padding: theme.spacing(2),
    margin: '2px',
    [theme.breakpoints.down('md')]: {
      maxWidth: '90%',
    },
  },
  border: {
    border: 'solid 2px black',
  },
  imageContainer: {
    textAlign: 'center',
  },
  infoContainer: {
    textAlign: 'left',
  },
  image: {
    width: '100%',
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
  console.log(recipe.healthLabels);
  const classes = useStyles();
  const {
    label,
    image,
    totalTime,
    calories,
    ingredients,
    healthLabels,
    yield: feeds,
  } = recipe;

  return (
    <div className={classes.recipeContainer}>
      <Grid container spacing={2}>
        <Grid className={classes.imageContainer} item xs={2}>
          <img className={classes.image} src={image} alt={label} />
        </Grid>

        <Grid className={classes.infoContainer} item xs={9}>
          <Typography variant="h5">{label}</Typography>
          <Typography className={classes.ingredients}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad est
            vitae dignissimos natus facilis, consequatur sed ea autem cumque
            porro molestias harum quaerat cupiditate placeat.
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
        <Typography className={classes.item}>
          Vegetarian
          <FontAwesomeIcon className={classes.icon} icon={faSeedling} />
        </Typography>
        <Typography className={classes.item}>
          Gluten
          <FontAwesomeIcon className={classes.icon} icon={faBreadSlice} />
        </Typography>
      </div>
    </div>
  );
}

export default SearchResultComponent;
