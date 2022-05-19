import React from "react";
import "./seasondisplay.css";
const seasonConfig = {
  summer: {
    text: "Let's Hit the beach",
    iconName: "sun",
  },
  winter: { text: "Burr,it is Chilly", iconName: "snowflake" },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    //lat >0 is in northern hemisphere
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
