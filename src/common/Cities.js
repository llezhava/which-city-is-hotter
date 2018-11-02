import React, { Component } from "react";
import City from "./City";
import Clickable from "./Clickable";
import styles from "./common.module.css";

const Cities = props => {
  let { cities, onClick } = props;

  return (
    <div className={styles.listOfCities}>
      {cities.map(city => {
        if (onClick) {
          return (
            <Clickable key={city.id} fn={() => onClick(city.id)}>
              <City {...city} />
            </Clickable>
          );
        } else {
          return <City key={city.id} {...city} />;
        }
      })}
    </div>
  );
};

export default Cities;
