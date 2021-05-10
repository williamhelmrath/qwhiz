import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { Header, Feed, Explore, Profile, QuizPage, PostPage } from "./";
import { useAuthContext } from "../AuthContext";

export default function Router() {
  const history = useHistory();
  const { authenticated } = useAuthContext();
  if (authenticated === false) {
    history.push("/");
    return <></>;
  }

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/quiz/:id" component={QuizPage} />
        <Route exact path="/post" component={PostPage} />
      </Switch>
    </div>
  );
}
