import React from "react";
import Box from "./Box"
import PropTypes from 'prop-types';

const IsFetching = ({ isFetching, children }) => {
  if (isFetching) {
    return <Box>"Loading..."</Box>;
  }
  return <React.Fragment>{children}</React.Fragment>;
};

Box.propTypes = {
  IsFetching: PropTypes.bool,
}

export default IsFetching;
