import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home/";

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/home" component={Home}></Route>
      </Switch>
    </Router>
  );
}
