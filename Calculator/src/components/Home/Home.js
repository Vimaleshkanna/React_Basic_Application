import React from "react";
import Login from "../Auth/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calculator from "../Dashboard/Calculator";
import { Switch } from "react-router-dom";
import Register from "../Auth/Register";

export const Home = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/dashboard" component={Calculator} />
      </Switch>
    </Router>
  );
};
