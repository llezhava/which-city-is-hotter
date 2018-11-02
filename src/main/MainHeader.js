import React, { Component } from "react";
import {Link} from "react-router-dom"

const MainHeader = ({ title, score }) => {
  return (
    <div>
     <Link to="/settings"><button>Settings</button></Link>
      <h1>{title}</h1>
      <div>Score: {score}</div>
    </div>
  );
};

export default MainHeader;
