import React from "react";
import styles from "./common.module.css"

const Box = props => {
  return (
    <div className={styles.box}>
      {props.children}
    </div>
  );
};

export default Box;
