import React, { Component } from "react";
import Box from "../common/Box.js";
import styles from "./settings.module.css";
import Cities from "../common/Cities";
import City from "../common/City";

const Row = props => {
  let { cities, won } = props;
  return (
    <div className={styles.row}>
      <Cities>
        {cities.map(city => (
          <City {...city} />
        ))}
      </Cities>
      <div className="result">{won ? "WON" : "LOST"}</div>
    </div>
  );
};

const History = props => {
  let { history } = props;
  console.log(history);
  return (
    <div className={styles.history}>
      <h2>History</h2>
      {history.map(row => (
        <Row {...row} />
      ))}
    </div>
  );
};

export default History;
