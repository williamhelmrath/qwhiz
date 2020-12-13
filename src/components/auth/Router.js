import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { Home, Login, Signup, Header } from "./";
import { useAuthContext } from "../AuthContext";

export default function Router() {
  const history = useHistory();
  const { authenticated } = useAuthContext();
  if (authenticated === true) {
    history.push("/feed");
    return <></>;
  }

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
