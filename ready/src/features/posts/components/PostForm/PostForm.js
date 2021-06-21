import React from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  field: {
    width: "100%",
  }
}));

export function PostForm({ editPost = null, onSubmit = console.log, isSubmitting = false }) {
  const { formState: { errors }, handleSubmit, control } = useForm({
    defaultValues: editPost ? {
      title: editPost.title,
      body: editPost.body,
    } : {},
  });

  const classes = useStyles();

  const submit = (values) => {
    onSubmit(values);
  };

  return (
    <Box className={classes.root} mx="auto">
      <Paper>
        <Box p={3}>
          <form onSubmit={handleSubmit(submit)}>
            <Typography variant="h6">{editPost ? `Editing "${editPost.title}" post` : 'Creating a new post'}</Typography>
            <Box mt={3}>
              <Controller
                name="title"
                control={control}
                rules={{ required: "This field is required." }}
                render={({ field }) => (
                  <TextField
                    inputProps={field}
                    className={classes.field}
                    error={!!errors.title}
                    label="Title"
                    helperText={errors.title?.message}
                    disabled={isSubmitting}
                  />
                )}
              />
            </Box>
            <Box mt={1}>
              <Controller
                name="body"
                control={control}
                rules={{ required: "This field is required." }}
                render={({ field }) => (
                  <TextField
                    inputProps={field}
                    className={classes.field}
                    error={!!errors.body}
                    label="Body"
                    multiline
                    rows={5}
                    helperText={errors.body?.message}
                    disabled={isSubmitting}
                  />
                )}
              />
            </Box>
            <Box mt={4}>
              <Button component={Link} disabled={isSubmitting} to="/posts">Cancel</Button>
              <Button type="submit" disabled={isSubmitting}>{editPost ? "Save" : "Create"}</Button>
            </Box>
          </form>
        </Box>
      </Paper>
    </Box>
  );
}

PostForm.propTypes = {
  editPost: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
  onSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
};
