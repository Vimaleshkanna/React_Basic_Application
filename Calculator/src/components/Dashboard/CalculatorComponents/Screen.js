import React from "react";
import ScreenRow from "./ScreenRow";
import "./calculatorComponent.css";
const Screen = ({ values, isDark }) => {
  return (
    <div className="screen">
      <ScreenRow value={values.inputs} isDark={isDark} />
      <ScreenRow value={values.output} isDark={isDark} />
    </div>
  );
};

export default Screen;
