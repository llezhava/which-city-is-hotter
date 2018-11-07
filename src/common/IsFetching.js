import React from "react";
import Box from "./Box"

const IsFetching = ({ isFetching, children }) => {
  if (isFetching) {
    return <Box>"Loading..."</Box>;
  }
  return <React.Fragment>{children}</React.Fragment>;
};

export default IsFetching;
