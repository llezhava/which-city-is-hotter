import React, { Component } from "react";
import Box from "../common/Box.js";

const Row = props => {
  let { city, country, temp, result } = props;
  return (
    <div className="row">
      <Box>
        <ul>
        <div>{city}</div>
        <div>{country}</div>
        <div>{temp}</div>
        </ul>
      </Box>
      <div className ="result">X</div>
    </div>
  );
};

const History = props => {
  let { historicalData } = props;
  return (
    <div className="History">
    <h2>History</h2>
      {historicalData.map(row => (
        <Row {...row} />
      ))}
    </div>
  );
};

export default History;
