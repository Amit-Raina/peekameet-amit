import React from "react";
import "./Spinner.css";

const Spinner = (props) => {
  return <div className="loader" style={props.style}>Loading...</div>;
};

export default Spinner;
