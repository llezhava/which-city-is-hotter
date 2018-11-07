import React from "react";
import {Link} from "react-router-dom"
import PropTypes from 'prop-types';

const Clickable = ({fn, children}) => {
  return (
    <div onClick={fn}>
      <Link to="/result">{children}</Link>
    </div>
  );
};

Clickable.propTypes = {
  fn: PropTypes.func,
}

export default Clickable;
