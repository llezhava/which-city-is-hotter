import React, { Component } from "react";
import { Link } from "react-router-dom";
import SettingsHistory from "./SettingsHistory";
import SettingsUnits from "./SettingsUnits";
import styles from "./settings.module.css"

class SettingsPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.main}>
        <Link to="/">
          <button>Back</button>
        </Link>
        <h1>Settings</h1>
        <SettingsUnits />
        <SettingsHistory historicalData={[]} />
      </div>
    );
  }
}

export default SettingsPage;
