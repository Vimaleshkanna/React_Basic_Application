import React, { useEffect, useState } from "react";
import Buttons from "./CalculatorComponents/Buttons";
import Screen from "./CalculatorComponents/Screen";
import "./Dashboard.css";
import Navbar from "../Layout/Navbar";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { loadUser } from "../../actions/auth";

import DarkMode from "./CalculatorComponents/DarkMode";
const Calculator = ({ loadUser, isRegister }) => {
  const [values, setValues] = useState({ inputs: "", output: "" });
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    //alert(localStorage.getItem("userName"), localStorage.getItem("password"));
    loadUser(
      localStorage.getItem("userName"),
      localStorage.getItem("password")
    );
  }, [loadUser]);
  const handleClick = (e) => {
    const value = e.target.value;
    switch (value) {
      case "=": {
        if (values.inputs !== "") {
          var ans = "";
          try {
            ans = eval(values.inputs);
          } catch (err) {
            alert("It's not valid operation");
            console.log(err);
          }
          if (ans === undefined) {
            alert("It's not valid operation");
            console.log(values);
          } else {
            setValues({ output: ans, inputs: "" });
            console.log(values);
          }
          break;
        }
      }
      case "Clear": {
        setValues({ output: "", inputs: "" });
        console.log(values);
        break;
      }

      case "Delete": {
        var str = values.inputs;
        str = str.substr(0, str.length - 1);
        setValues({ inputs: str });
        console.log(values);
        break;
      }

      default: {
        setValues({ inputs: (values.inputs += value) });
        console.log(values);
        break;
      }
    }
  };
  return (
    <>
      <Navbar />
      <DarkMode setDark={setDark} isDark={isDark} />
      <div className={"calculator" + (isDark ? " bg-dark" : "")}>
        <div>
          <Screen values={values} isDark={isDark} />
        </div>
        <div className="btnGroup">
          <Buttons
            label={"7"}
            className={"button-row1"}
            onClick={handleClick}
          />
          <Buttons
            label={"8"}
            className={"button-row1"}
            onClick={handleClick}
          />
          <Buttons
            label={"9"}
            className={"button-row1"}
            onClick={handleClick}
          />
          <Buttons
            label={"*"}
            className={"button-column"}
            onClick={handleClick}
          />
        </div>
        <div className="btnGroup">
          <Buttons
            label={"4"}
            isDark={isDark}
            className={"button-row2"}
            onClick={handleClick}
          />
          <Buttons
            label={"5"}
            isDark={isDark}
            className={"button-row2"}
            onClick={handleClick}
          />
          <Buttons
            label={"6"}
            isDark={isDark}
            className={"button-row2"}
            onClick={handleClick}
          />
          <Buttons
            label={"-"}
            className={"button-column"}
            onClick={handleClick}
          />
        </div>
        <div className="btnGroup">
          <Buttons
            label={"1"}
            isDark={isDark}
            className={"button-row3"}
            onClick={handleClick}
          />
          <Buttons
            label={"2"}
            isDark={isDark}
            className={"button-row3"}
            onClick={handleClick}
          />
          <Buttons
            label={"3"}
            isDark={isDark}
            className={"button-row3"}
            onClick={handleClick}
          />
          <Buttons
            label={"+"}
            className={"button-column"}
            onClick={handleClick}
          />
        </div>
        <div className="btnGroup">
          <Buttons
            label={"0"}
            isDark={isDark}
            className={"button-row4"}
            onClick={handleClick}
          />
          <Buttons
            label={"="}
            isDark={isDark}
            className={"button-column"}
            onClick={handleClick}
          />
        </div>
        <div className="btnGroupLast">
          <Buttons
            label={"Clear"}
            isDark={isDark}
            className={"button-row5"}
            onClick={handleClick}
          />
          <Buttons
            label={"Delete"}
            className={"button-delete"}
            onClick={handleClick}
          />
          <Buttons
            label={"."}
            isDark={isDark}
            className={"button-row5"}
            onClick={handleClick}
          />
          <Buttons
            label={"/"}
            className={"button-column"}
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
};

Calculator.propTypes = {
  isRegister: propTypes.bool,
  // user: propTypes.object.isRequired,
  loadUser: propTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  // user: state.auth.user,
  isRegister: state.auth.isRegister,
});

export default connect(mapStateToProps, { loadUser })(Calculator);
