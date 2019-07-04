import React from "react";
import { Route } from "react-router-dom";

import Greatest from "./greatest";
import OneToHundred from "./onetohundred";
import StringCounter from "./stringcounter";
import Home from "./home";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/greatest/" component={Greatest} />
    <Route exact path="/list/" component={OneToHundred} />
    <Route exact path="/counter/" component={StringCounter} />
  </div>
);

export default BaseRouter;
