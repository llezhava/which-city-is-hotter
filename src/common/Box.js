import React from "react";
import styles from "./common.module.css"

const Box = ({children}) => {
  return (
    <div className={styles.box}>
      {children}
    </div>
  );
};



export default Box;
