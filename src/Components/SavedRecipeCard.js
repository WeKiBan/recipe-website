import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Link } from '@material-ui/core';
import { useGlobalContext } from '../contexts/context';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    margin: theme.spacing(1),
    fontFamily: 'lato',
    fontWeight: '100',
    textDecoration: 'none !important',
  },
  media: {
    height: 140,
  },
  deleteIcon: {
    marginBottom: '5px',
  },
}));

export default function SavedRecipeCard({ recipe }) {
  const classes = useStyles();
  const { savedRecipes, setSavedRecipes } = useGlobalContext();

  const handleDelete = (e) => {
    e.preventDefault();
    let filteredArray = savedRecipes.filter((item) => item.url !== recipe.url);

    setSavedRecipes(filteredArray);
  };

  return (
    <Card
      target="blank"
      href={recipe.url}
      component={Link}
      className={classes.root}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={recipe.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h6" component="h2">
            {recipe.label}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button onClick={handleDelete} color="primary">
        Delete Recipe <DeleteOutlineIcon className={classes.deleteIcon} />
      </Button>
    </Card>
  );
}
