import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

export default function Routes(appProps) {
    return (
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} {...appProps} />}/>
        <Route exact path="/login" render={(props) => <Login {...props} {...appProps} />}/>
        <Route exact path="/signup" render={(props) => <Signup {...props} {...appProps} />}/>
        
      </Switch>
    );
  }