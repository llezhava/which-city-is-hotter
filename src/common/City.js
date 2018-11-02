import React, { Component } from "react";
import Box from "../common/Box.js";

const City = props => {
  let { city, country, temp } = props;
  return (
    <Box>
      <div>{city}</div>
      <div>{country}</div>
      {temp ? <div>{temp}</div> : ""}
    </Box>
  );
};

export default City;
