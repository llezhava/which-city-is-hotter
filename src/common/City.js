import React, { Component } from "react";
import Box from "../common/Box.js";

const City = props => {
  let { name, country, temp} = props;
  return (
    <Box>
      <div>{name}</div>
      <div>{country}</div>
      {temp ? <div>{temp}</div> : ""}
    </Box>
  );
};

export default City;
