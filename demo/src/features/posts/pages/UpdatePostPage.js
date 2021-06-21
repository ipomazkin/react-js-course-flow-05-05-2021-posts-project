import React from 'react';
import PropTypes from 'prop-types';

import { Example } from "../components/Example";
import { useHistory, useParams } from "react-router";
import { useUpdatePost } from "../hooks/useUpdatePost";
import { PostForm } from "../components/PostForm";
import { useQuery } from "react-query";
import { get } from "../api/PostsAPI";

export function UpdatePostPage() {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery(["posts", id], async () => {
    let { data } = await get(id);
    return data;
  });

  const history = useHistory();
  const updateMutation = useUpdatePost(() => {
    history.push("/posts");
  });

  const handleSubmit = ({ title, body }) => {
    updateMutation.mutate({
      id,
      values: {
        title,
        body,
      }
    });
  };

  return (
    <div className="page">
      <div className="page">
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <div>
            <PostForm
              editPost={data}
              isSubmitting={updateMutation.isLoading}
              onSubmit={handleSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
}

UpdatePostPage.propTypes = {};
