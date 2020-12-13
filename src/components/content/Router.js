import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header, Feed, Explore, Profile, QuizPage } from "./";

export default function Router() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/quiz/:id" component={QuizPage} />
      </Switch>
    </div>
  );
}
