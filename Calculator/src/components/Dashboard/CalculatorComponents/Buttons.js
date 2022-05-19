import React from "react";
import "./calculatorComponent.css";
const Buttons = (props) => {
  let button;
  const valueGot = props.label;
  const className = props.className;
  const isDark = props.isDark;
  if (valueGot === "0") {
    button = (
      <input
        className={`btn ${className}` + (isDark ? " text-white" : "")}
        type="button"
        value={props.label}
        style={{ borderRadius: "50%", width: "52%", fontSize: "12px" }}
        onClick={props.onClick}
      />
    );
  } else {
    button = (
      <input
        className={`btn ${className}` + (isDark ? " text-white" : "")}
        type="button"
        value={props.label}
        style={{ borderRadius: "50%", fontSize: "12px" }}
        onClick={props.onClick}
      />
    );
  }
  return <>{button}</>;
};
export default Buttons;
