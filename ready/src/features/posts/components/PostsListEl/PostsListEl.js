import React from 'react';
import PropTypes from 'prop-types';
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import format from 'date-fns/format'
import { useDeletePost } from "../../hooks/useDeletePost";

const useStyles = makeStyles({
  root: {

  },
  date: {
    fontSize: 14,
  },
  title: {
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  body: {
    height: 100,
    textOverflow: "ellipsis",
    overflow: "hidden",
  }
});

export function PostsListEl({ id, title, body, createdAt }) {
  const classes = useStyles();
  const date = format(new Date(createdAt), "dd.MM.yyyy"),
    time = format(new Date(createdAt), "HH:mm");

  const deleteMutation = useDeletePost();

  const handleDelete = () => {
    deleteMutation.mutate(id);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.date} color="textSecondary" gutterBottom>
          Posted {date} at {time}
        </Typography>
        <Typography className={classes.title} variant="h5" component="h2">
         {title}
        </Typography>
        <Typography className={classes.body} variant="body2" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button disabled={deleteMutation.isLoading} size="small" variant="outlined" component={Link} color="default" to={`/posts/${id}`}>View</Button>
        <Button disabled={deleteMutation.isLoading} size="small" variant="outlined" component={Link} color="primary" to={`/edit-post/${id}`}>Edit</Button>
        <Button disabled={deleteMutation.isLoading} size="small" variant="outlined" color="secondary" onClick={handleDelete}>Delete</Button>
      </CardActions>
    </Card>
  );
}

PostsListEl.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  createdAt: PropTypes.string,
};
