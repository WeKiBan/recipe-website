import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
    height: 250,
    margin: theme.spacing(1),
    fontFamily: 'lato',
    fontWeight: '100',
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

  return (
    <Card className={classes.root}>
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
      <Button color="primary">
        Delete Recipe <DeleteOutlineIcon className={classes.deleteIcon} />
      </Button>
    </Card>
  );
}
