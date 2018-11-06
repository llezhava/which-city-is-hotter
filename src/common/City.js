import React, { Component } from "react";
import Box from "../common/Box.js";

const City = props => {
  let { name, country, temp, unit } = props;
  return (
    <Box>
      <div>{name}</div>
      <div>{country}</div>
      {temp ? <div>{getTemp(temp, unit)}</div> : ""}
    </Box>
  );
};

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