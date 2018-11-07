import React from "react";
import PropTypes from "prop-types";
import styles from "./settings.module.css";
import Cities from "../common/Cities";
import City from "../common/City";
import wonImg from "./assets/won.png";
import lostImg from "./assets/lost.png";

const Row = ({ cities, won, unit }) => {
  return (
    <div className={styles.row}>
      <Cities>
        {cities.map(city => (
          <City {...city.data} unit={unit} key={city.data.id} />
        ))}
      </Cities>

      <div className={styles.result}>
        {" "}
        <img src={won ? wonImg : lostImg} />
      </div>
    </div>
  );
};

Row.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object),
  won: PropTypes.bool,
  unit: PropTypes.string
};

const History = props => {
  let { history, tempUnit } = props;
  let timesWon = history.reduce((prev, curr) => {
    if (curr.won) return prev + 1;
    else return prev;
  }, 0);
  let timesLost = history.length - timesWon;
  return (
    <div className={styles.history}>
      <h2>History</h2>
      <div>
        <span>Won: {timesWon} </span>
        <span>Lost: {timesLost}</span>
      </div>
      <div className={styles.rows}>
        {history.map((data, index) => (
          <Row {...data} unit={tempUnit} key={index} />
        ))}
      </div>
    </div>
  );
};

History.propTypes = {
  history: PropTypes.array,
  tempUnit: PropTypes.string
};

export default History;
