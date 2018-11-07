import React from "react";
import { Link } from "react-router-dom";
import styles from "./common.module.css";

const Button = ({ children, path, onClick }) => {
  if (path) {
    return (
      <Link to={path}>
        <button className={styles.button}>{children}</button>
      </Link>
    );
  }

  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
