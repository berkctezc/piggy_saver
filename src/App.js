import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ActivitiesList from "./components/activities-list.component";
import EditActivity from "./components/edit-activity.component";
import CreateActivitiy from "./components/create-activity.component";
import CreateUser from "./components/create-user.component";

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <div className="container">
        <Route path="/" exact component={ActivitiesList} />
        <Route path="/edit/:id" exact component={EditActivity} />
        <Route path="/create" exact component={CreateActivitiy} />
        <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
