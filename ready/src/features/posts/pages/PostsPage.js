import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from "react-query";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getList } from "../api/PostsAPI";
import Typography from "@material-ui/core/Typography";
import { createStyles } from "@material-ui/core";
import { PostsListEl } from "../components/PostsListEl";
import Grid from '@material-ui/core/Grid';

export function PostsPage() {
  const { data, isLoading, error } = useQuery('posts', async () => {
    let { data } = await getList();
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
          <Typography variant="h4">Latest posts:</Typography>
          <Box py={2}>
            <Grid container spacing={3}>
              {data?.map(post => (
                <Grid item key={post.id} xs={12} sm={6} md={4}>
                  <PostsListEl
                    {...post}
                  />
                </Grid>
              )).reverse()}
            </Grid>
          </Box>
        </Box>
      )}
    </Box>
  );
}

PostsPage.propTypes = {};
