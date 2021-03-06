import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateTarget from "./components/create-target.component";
import EditTarget from "./components/edit-target.component";
import TargetList from "./components/target-list.component";

import profile from "./images/profile.jpeg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://wpdunk.com" target="_blank">
              <img src={profile} width="30" height="30" alt="Will Dunk" />
            </a>
            <Link to="/" className="navbar-brand">
              Season Tracker
            </Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Targets
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create Target
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={TargetList} />
          <Route path="/edit/:id" component={EditTarget} />
          <Route path="/create" component={CreateTarget} />
        </div>
      </Router>
    );
  }
}

export default App;
