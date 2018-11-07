import React from "react";
import Box from "../common/Box.js";
import PropTypes from 'prop-types';
import styles from "./common.module.css"

const City = ({name, country, temp, unit}) => {
  return (
    <Box>
      <div className={styles.item}>{name}</div>
      <div className={styles.item}>{country}</div>
      {temp ? <div className={styles.item}>{getTemp(temp, unit)}</div> : ""}
    </Box>
  );
};

City.propTypes = {
  name: PropTypes.string,
  country: PropTypes.string,
}

function getTemp(temp, unit) {
  switch (unit) {
    case "Celsius":
      return `${temp} C`;
    case "Fahrenheit":
      return `${convertToF(temp)} F`;
    default:
      return `${temp} Unknown Unit`;
  }
}

function convertToF(temp) {
  return Math.round(temp * 9/5 + 32 * 100) / 100
}

export default City;