import React from "react";
import {Link} from "react-router-dom"
import PropTypes from 'prop-types';


const MainHeader = ({ title, score }) => {
  return (
    <div>
     <Link to="/settings"><button>Settings</button></Link>
      <h1>{title}</h1>
      <div>Score: {score}</div>
    </div>
  );
};

MainHeader.propTypes = {
  title: PropTypes.string,
  score: PropTypes.number,
}

export default MainHeader;