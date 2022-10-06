import React from "react";
import { Switch, Route } from "react-router-dom";
import Boook from "../pages/Boook";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/book" exact component={Boook} />
    </Switch>
  );
};

export default Routes;
