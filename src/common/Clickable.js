import React, { Component } from "react";
import {Link} from "react-router-dom"

const Clickable = props => {
  let { fn } = props;
  return (
    <div onClick={fn}>
      <Link to="/result">{props.children}</Link>
    </div>
  );
};

export default Clickable;
