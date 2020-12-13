import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Login, Signup, Header } from "./";

export default function Router() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}
