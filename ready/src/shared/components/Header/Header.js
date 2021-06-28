import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { useIsMobile } from "../../hooks/useIsMobile";

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar, // добавим отступ для хедера
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function Header() {
  const classes = useStyles();

  const isMobile = useIsMobile();

  return (
    <Fragment>
      <div className={classes.offset} />
      <Box mt={3} />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Posts App
          </Typography>
          <Button color="inherit" component={NavLink} to="/">Home</Button>
          <Button color="inherit" component={NavLink} to="/posts">Posts</Button>
          <Button color="inherit" component={NavLink} to="/new-post">Add Post</Button>
          {isMobile && (
            <Button color="inherit" component={NavLink} to="/logout">Logout</Button>
          )}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

Header.propTypes = {};
