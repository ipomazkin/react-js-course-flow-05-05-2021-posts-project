import React from 'react';
import PropTypes from 'prop-types';

import { PostForm } from "../components/PostForm";
import { useCreatePost } from "../hooks/useCreatePost";
import { useHistory } from "react-router-dom";

export function CreatePostPage() {
  const history = useHistory();
  const createMutation = useCreatePost(() => {
    history.push("/posts");
  });

  return (
    <PostForm onSubmit={createMutation.mutate} isSubmitting={createMutation.isLoading} />
  );
}

CreatePostPage.propTypes = {};
