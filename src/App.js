import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import { Error } from "./components/error";
import { AuthRouter } from "./components/auth";
import { ContentRouter } from "./components/content";
import { AuthProvider } from "./components/AuthContext";

import "./App.css";

export default function App() {
  return (
    <Grommet theme={grommet}>
      <AuthProvider>
        <Router>
          <Switch>
            <Route
              exact
              path={["/", "/login", "/signup"]}
              component={AuthRouter}
            />
            <Route
              exact
              path={["/feed", "/explore", "/profile", "/quiz/:id", "/post"]}
              component={ContentRouter}
            />
            <Route component={Error} />
          </Switch>
        </Router>
      </AuthProvider>
    </Grommet>
  );
}
