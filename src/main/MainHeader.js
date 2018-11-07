import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../common/Button";
import styles from "./main.module.css";

const MainHeader = ({ title, score }) => {
  return (
    <div className={styles.header}>
      <div className={styles.button}>
        <Link to="/settings">
          <Button>Settings</Button>
        </Link>
      </div>
      <h1>{title}</h1>
      <div>Score: {score}</div>
    </div>
  );
};

MainHeader.propTypes = {
  title: PropTypes.string,
  score: PropTypes.number
};

export default MainHeader;
