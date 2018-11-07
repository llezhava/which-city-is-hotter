import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SettingsHistory from "./SettingsHistory";
import SettingsUnits from "./SettingsUnits";
import Button from "../common/Button";

import { changeTempUnit } from "../state/actions/actions";

import styles from "./settings.module.css";

const SettingsPage = ({ tempUnit, history, changeTempUnit }) => {
  return (
    <div className={styles.main}>
      <div className={styles.button}>
        <Button path="/">Back</Button>
      </div>
      <h1>Settings</h1>
      <SettingsUnits tempUnit={tempUnit} changeTempUnit={changeTempUnit} />
      <SettingsHistory history={history} tempUnit={tempUnit} />
    </div>
  );
};

SettingsPage.propTypes = {
  tempUnit: PropTypes.string,
  history: PropTypes.array,
  changeTempUnit: PropTypes.func
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
