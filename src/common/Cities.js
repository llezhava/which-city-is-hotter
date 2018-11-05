import React, { Component } from "react";
import City from "./City";
import Clickable from "./Clickable";
import styles from "./common.module.css";

const Cities = props => {
  return (
    <div className={styles.listOfCities}>
      {props.children}
    </div>
  );
};

export default Cities;
