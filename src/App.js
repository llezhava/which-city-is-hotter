import React, { Component } from "react";
import MainPageQuestion from "../src/main/MainPageQuestion";
import SettingsPage from "./settings/SettingsPage"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import styles from "./app.module.css"

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
      <Router>
        <Switch>
        <Route exact path="/" component={MainPageQuestion} />
        <Route exact path="/settings" component={SettingsPage} />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
