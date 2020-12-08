import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import {
  Header,
  Error,
  Home,
  Explore,
  Profile,
  Feed,
  Login,
  // Footer,
} from "./components";
import "./App.css";

export default function App() {
  return (
    <Grommet theme={grommet}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path={["/feed", "/explore", "/profile"]}>
            <Header />
            <Switch>
              <Route exact path="/feed" component={Feed} />
              <Route exact path="/explore" component={Explore} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </Route>
          <Route component={Error} />
        </Switch>
      </Router>

      {/* <Footer /> */}
    </Grommet>
  );
}
