import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../common/Button";
import styles from "./main.module.css";

const MainHeader = ({ title, score }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.button}>
        <Link to="/settings">
          <Button>Settings</Button>
        </Link>
      </nav>
      <h1>{title}</h1>
      <div>Score: {score}</div>
    </header>
  );
};

MainHeader.propTypes = {
  title: PropTypes.string,
  score: PropTypes.number
};

export default MainHeader;
