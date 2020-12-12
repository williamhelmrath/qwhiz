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
  Signup,
  QuizPage,
  // Footer,
} from "./components";
// import { AuthProvider } from "./components/AuthContext";

import "./App.css";

export default function App() {
  return (
    <Grommet theme={grommet}>
      {/* <AuthProvider> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path={["/feed", "/explore", "/profile", "/quiz"]}>
            <Header />
            <Switch>
              <Route exact path="/feed" component={Feed} />
              <Route exact path="/explore" component={Explore} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/quiz/:id" component={QuizPage} />
            </Switch>
          </Route>
          <Route component={Error} />
        </Switch>
      </Router>
      {/* </AuthProvider> */}
      {/* <Footer /> */}
    </Grommet>
  );
}
