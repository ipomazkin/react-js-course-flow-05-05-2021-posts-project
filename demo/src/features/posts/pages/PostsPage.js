import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from "react-query";
import { getList } from "../api/PostsAPI";
import { Link } from 'react-router-dom';
import { useDeletePost } from "../hooks/useDeletePost";

import { Example } from "../components/Example";

export function PostsPage() {
  const { data, error, isLoading } = useQuery("posts", async () => {
    let { data } = await getList();
    return data;
  });

  const deleteMutation = useDeletePost();

  return (
    <div className="page">
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          {data.map((post) => (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <div>
                <Link to={`/posts/${post.id}`}>Learn more</Link>
                <div>
                  <Link to={`/edit-post/${post.id}`}>Edit</Link>
                </div>
                <button onClick={() => deleteMutation.mutate({ id: post.id })}>Delete post</button>
              </div>
            </div>
          ))}
        </div>
      )}
      posts page
    </div>
  );
}

PostsPage.propTypes = {};
