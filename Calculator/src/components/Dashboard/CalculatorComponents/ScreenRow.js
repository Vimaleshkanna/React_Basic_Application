import React from "react";
import "./calculatorComponent.css";
const ScreenRow = (props) => {
  return (
    <div className="screen-row">
      <input
        className={"screen-text" + (props.isDark ? " text-white bg-dark" : "")}
        type="text"
        readOnly
        value={props.value}
      />
    </div>
  );
};

export default ScreenRow;
