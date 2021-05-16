import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import About from "./Components/About";
import Feedback from "./Components/Feedback/Feedback";
import Home from "./Components/Home";

export default class AppRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
          <Route exact path="/about" component={About} />
          <Route exact path="/my-app" exact component={App} />
          <Route exact path="/Feedback" exact component={Feedback} />

      </Router>
    );
  }
}
