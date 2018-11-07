import React from "react";
import PropTypes from 'prop-types';

import styles from "./settings.module.css";
import Cities from "../common/Cities";
import City from "../common/City";

const Row = ({ cities, won, unit }) => {
  return (
    <div className={styles.row}>
      <Cities>
        {cities.map(city => (
          <City {...city.data} unit={unit} key={city.data.id} />
        ))}
      </Cities>
      <div className="result">{won ? "WON" : "LOST"}</div>
    </div>
  );
};

Row.propTypes = {
  cities: PropTypes.array,
  won: PropTypes.bool,
  unit: PropTypes.string

}

const History = props => {
  let { history, tempUnit } = props;
  return (
    <div className={styles.history}>
      <h2>History</h2>
      {history.map((data, index) => (
        <Row {...data} unit={tempUnit} key={index} />
      ))}
    </div>
  );
};


export default History;
