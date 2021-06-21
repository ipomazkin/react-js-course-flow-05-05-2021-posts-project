import React from 'react';
import PropTypes from 'prop-types';

import { Example } from "../components/Example";
import { PostForm } from "../components/PostForm";
import TextField from "@material-ui/core/TextField";
import { useCreatePost } from "../hooks/useCreatePost";
import { useHistory } from "react-router";

export function CreatePostPage() {
  const history = useHistory();
  const createMutation = useCreatePost(() => {
    history.push("/posts");
  });

  return (
    <div className="page">
      <PostForm
        isSubmitting={createMutation.isLoading}
        onSubmit={createMutation.mutate}
      />
    </div>
  );
}

CreatePostPage.propTypes = {};
