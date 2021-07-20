import React from "react";
import "../styles/profile.css";
import Main from "./Main";
import Navbar from "./Navbar";
import Projects from "./Projects";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function Profile() {
  return (
    <Router>
      <div className="profile">
        <Navbar />
        <Switch>
          {/* // all other components will go here */}
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/profile" component={Main} />
          <Route exact path="/">
            <Redirect to="/profile" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Profile;
