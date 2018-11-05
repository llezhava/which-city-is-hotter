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
      return `${temp * 9/5 + 32} F`;
    default:
      return `${temp} Unknown Unit`;
  }
}
export default City;
