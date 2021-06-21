import React from 'react';
import PropTypes from 'prop-types';

import { Example } from "../components/Example";
import { useQuery } from "react-query";
import { get } from "../api/PostsAPI";
import { useParams } from "react-router";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { Post } from "../components/Post";

export function PostPage() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery(['posts', id], async () => {
    let { data } = await get(id);
    return data;
  });

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
          <Post {...data} />
        </Box>
      )}
    </Box>
  );
}

PostPage.propTypes = {};
