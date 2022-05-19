import React, { useState } from "react";
import "./calculatorComponent.css";

const DarkMode = ({ setDark, isDark }) => {
  return (
    <div className="darkMode custom-control custom-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customSwitches"
        onClick={() => {
          setDark(!isDark);
          console.log(isDark);
        }}
      />
      <label className="custom-control-label" htmlFor="customSwitches">
        Dark Mode
      </label>
    </div>
  );
};

export default DarkMode;
