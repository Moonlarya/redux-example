import React from "react";

const Input = ({ value, handleChange }) => {
  return <input onChange={handleChange}>{value}</input>;
};

export default Input;
