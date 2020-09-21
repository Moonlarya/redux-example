import React, { Fragment } from "react";
import { connect } from "react-redux";

import { changeColor } from "../actions/colorActions";
import { changeText, handleChange } from "../actions/textActions";

import Text from "../components/Text";
import Input from "../components/Input";

const Main = ({ changeColor, color, text, changeText, handleChange }) => (
  <Fragment>
    <Input text={text} handleChange={handleChange} />
    <Text changeText={changeText} text={text} />
    <div className="block" style={{ backgroundColor: color, height: 100 }}>
      <button
        onClick={() => {
          changeColor("yellow");
        }}
      >
        Click me!
      </button>
      <button
        onClick={() => {
          changeColor("blue");
        }}
      >
        Click me!
      </button>
      <button
        onClick={() => {
          changeColor("green");
        }}
      >
        Click me!
      </button>
    </div>
  </Fragment>
);

const mapStateToProps = (store) => ({
  color: store.color.backgroundColor,
  text: store.text.text,
});

const mapDispatchToProps = {
  changeColor,
  changeText,
  handleChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
