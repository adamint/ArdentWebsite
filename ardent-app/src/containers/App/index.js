import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { injectGlobal } from "styled-components";

import Home from "../Home";
import Commands from "../Commands";
import Status from "../Status";
import NotFound from "../NotFound";

import Navigation from "../../components/Navigation";

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    background-color: #eff2f7;
    font-family: 'Raleway', sans-serif;
  }
  .center {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path="/ArdentWebsite/" exact component={Home} />
            <Route path="/ArdentWebsite/commands" exact component={Commands} />
            <Route path="/ArdentWebsite/status" exact component={Status} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
