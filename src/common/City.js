import React from "react";
import Box from "../common/Box.js";
import PropTypes from 'prop-types';

const City = ({name, country, temp, unit}) => {
  return (
    <Box>
      <div>{name}</div>
      <div>{country}</div>
      {temp ? <div>{getTemp(temp, unit)}</div> : ""}
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