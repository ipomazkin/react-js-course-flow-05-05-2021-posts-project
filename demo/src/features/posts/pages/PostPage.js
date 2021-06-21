import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from "react-router";
import { Redirect } from "react-router";

import { useQuery } from "react-query";
import { get } from "../api/PostsAPI";
import { useDeletePost } from "../hooks/useDeletePost";

export function PostPage() {
  const { id } = useParams();
  const history = useHistory();

  const { data, error, isLoading } = useQuery(["posts", id], async () => {
    let { data } = await get(id);
    return data;
  });

  const deleteMutation = useDeletePost(() => {
    history.push("/posts");
  });

  return (
    <div className="page">
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
          <button onClick={() => deleteMutation.mutate({ id })}>Delete</button>
        </div>
      )}
    </div>
  );
}

PostPage.propTypes = {};
