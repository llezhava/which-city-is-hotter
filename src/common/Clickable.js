import React, { Component } from "react";

const Clickable = props => {
    let {fn} = props
  return (
    <div onClick={fn}>
      {props.children}
    </div>
  );
};

export default Clickable;
