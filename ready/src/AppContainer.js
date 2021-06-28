import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Container from "@material-ui/core/Container";

import * as SettingsDuck from "./shared/ducks/settings.duck";
import { appConf } from "./config";
import { routes } from "./routes";
import { Page404 } from "./shared/components/Page404";
import { Header } from "./shared/components/Header";

export function AppContainer(props) {
  const { history } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      let ww = window.innerWidth,
        isMobile = ww <= appConf.responsive.mobileBreakpoint;
      dispatch(SettingsDuck.setIsMobile(isMobile));
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ConnectedRouter history={history}>
      <Header />
      <Container>
        <Switch>
          {routes.map(route => (
            <Route key={route.key} path={route.path} exact={route.exact} component={route.component} />
          ))}
          <Route path="*" exact render={() => <Page404 />} />
        </Switch>
      </Container>
    </ConnectedRouter>
  );
}

AppContainer.propTypes = {
  history: PropTypes.object,
};
