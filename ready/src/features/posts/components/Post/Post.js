import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import format from "date-fns/format";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import CardActions from "@material-ui/core/CardActions";
import { useDeletePost } from "../../hooks/useDeletePost";
import { useHistory } from "react-router-dom";

export function Post({ id, title, body, createdAt }) {
  const date = format(new Date(createdAt), "dd.MM.yyyy"),
    time = format(new Date(createdAt), "HH:mm");

  const history = useHistory();

  const deleteMutation = useDeletePost(() => {
    history.push("/posts");
  });

  const handleDelete = () => {
    deleteMutation.mutate(id);
  };

  return (
    <Box>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body2"> Posted {date} at {time}</Typography>
      <Box my={2}>
        <Typography variant="body2">{body}</Typography>
      </Box>
      <Box my={2}>
        <CardActions>
          <Button size="small" disabled={deleteMutation.isLoading} variant="outlined" component={Link} color="primary" to={`/edit-post/${id}`}>Edit</Button>
          <Button size="small" disabled={deleteMutation.isLoading} variant="outlined" color="secondary" onClick={handleDelete}>Delete</Button>
        </CardActions>
      </Box>
    </Box>
  );
}

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
  createdAt: PropTypes.string,
};
