import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store/configureStore";
import styles from "./app.module.css"
import MainPageQuestion from "../src/main/MainPageQuestion";
import MainPageResult from "../src/main/MainPageResult";
import SettingsPage from "./settings/SettingsPage";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={MainPageQuestion} />
              <Route exact path="/settings" component={SettingsPage} />
              <Route exact path="/result" component={MainPageResult} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;