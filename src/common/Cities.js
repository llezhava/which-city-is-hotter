import React from "react";
import styles from "./common.module.css";

const Cities = ({children}) => {
  return (
    <div className={styles.listOfCities}>
      {children}
    </div>
  );
};


export default Cities;
