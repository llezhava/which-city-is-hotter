import React, { Component } from "react";
import styles from "./settings.module.css";
import Cities from "../common/Cities";
import City from "../common/City";

const Row = ({ cities, won, unit }) => {
  return (
    <div className={styles.row}>
      <Cities>
        {cities.map(city => (
          <City {...city} unit={unit} />
        ))}
      </Cities>
      <div className="result">{won ? "WON" : "LOST"}</div>
    </div>
  );
};

const History = props => {
  let { history, tempUnit } = props;
  console.log(history);
  return (
    <div className={styles.history}>
      <h2>History</h2>
      {history.map(row => (
        <Row {...row} unit={tempUnit} />
      ))}
    </div>
  );
};

export default History;
