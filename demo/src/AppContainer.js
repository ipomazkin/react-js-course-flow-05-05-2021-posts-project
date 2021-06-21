import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from "connected-react-router";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Header } from "./shared/components/Header";
import { Route } from "react-router";
import { HomePage } from "./features/info/pages/HomePage";
import { PostsPage } from "./features/posts/pages/PostsPage";
import { PostPage } from "./features/posts/pages/PostPage";
import { CreatePostPage } from "./features/posts/pages/CreatePostPage";
import { UpdatePostPage } from "./features/posts/pages/UpdatePostPage";
import { routes } from "./routes";
import { Switch } from "react-router";
import { Page404 } from "./shared/components/Page404";

export function AppContainer(props) {
  const {history} = props;

  return (
    <ConnectedRouter history={history}>
      <Header/>
      <Container>
        <Switch>
          {routes.map(route => (
            <Route key={route.key} path={route.path} exact={route.exact} component={route.component} />
          ))}
          <Route path="*" exact component={Page404} />
        </Switch>
      </Container>
    </ConnectedRouter>
  );
}

AppContainer.propTypes = {
  history: PropTypes.object,
};
