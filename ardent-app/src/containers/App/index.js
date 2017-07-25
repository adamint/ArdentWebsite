import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../Home";
import About from "../About";
import NotFound from "../NotFound";

import Nav from "../../components/Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/ArdentWebsite/" exact component={Home} />
            <Route path="/ArdentWebsite/about" exact component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
