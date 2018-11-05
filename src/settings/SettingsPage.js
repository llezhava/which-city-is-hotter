import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SettingsHistory from "./SettingsHistory";
import SettingsUnits from "./SettingsUnits";
import { changeTempUnit } from "../actions/actions";
import styles from "./settings.module.css";

const SettingsPage = ({ tempUnit, history, changeTempUnit }) => {
  return (
    <div className={styles.main}>
      <Link to="/">
        <button>Back</button>
      </Link>
      <h1>Settings</h1>
      <SettingsUnits tempUnit={tempUnit} changeTempUnit={changeTempUnit} />
      <SettingsHistory history={history} />
    </div>
  );
};

const mapStateToProps = state => {
  let { tempUnit, history } = state;
  return { tempUnit, history };
};

const mapDispatchToProps = dispatch => {
  return { changeTempUnit: newUnit => dispatch(changeTempUnit(newUnit)) };
};

const SettingsPageConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPage);

export default SettingsPageConnected;
