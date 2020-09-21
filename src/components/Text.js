import React from "react";

const Text = ({ text, changeText }) => {
  return <h1 onClick={() => changeText("Yurchik the best")}>{text}</h1>;
};

export default Text;
