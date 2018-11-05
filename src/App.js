import React, { Component } from "react";
import MainPageQuestion from "../src/main/MainPageQuestion";
import SettingsPage from "./settings/SettingsPage";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import styles from "./app.module.css";
import { Provider } from "react-redux";
import store from "./store/configureStore";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={MainPageQuestion} />
              <Route exact path="/settings" component={SettingsPage} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
