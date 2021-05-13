import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LoginForm from "./LoginForm";

function Routing() {
  return (
    <div className="Routing">
        <Switch>
          <Route path="/Login">
            <LoginForm />
          </Route>
        </Switch>
    </div>
  );
}

export default Routing;
