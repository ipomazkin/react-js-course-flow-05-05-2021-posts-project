import React from 'react';
import PropTypes from 'prop-types';

import { Example } from "../components/Example";
import { useHistory } from "react-router-dom";
import { useUpdatePost } from "../hooks/useUpdatePost";
import { PostForm } from "../components/PostForm";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { get } from "../api/PostsAPI";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

export function EditPostPage() {
  const { id } = useParams();
  const history = useHistory();
  const updateMutation = useUpdatePost(() => {
    history.push(`/posts/${id}`);
  });

  const { data, isLoading, error } = useQuery(['posts', id], async () => {
    let { data } = await get(id);
    return data;
  });

  const handleSubmit = (values) => {
    updateMutation.mutate({ id, values });
  };

  return (
    <Box>
      {isLoading ? (
        <Box pt={10} pb={10} display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography variant="h4" color="secondary">{error.message}</Typography>
      ) : (
        <Box>
          <PostForm
            editPost={data}
            onSubmit={handleSubmit}
            isSubmitting={updateMutation.isLoading} />
        </Box>
      )}
    </Box>
  );
}

EditPostPage.propTypes = {};
