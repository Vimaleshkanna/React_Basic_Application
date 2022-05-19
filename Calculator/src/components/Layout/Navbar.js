import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import image from "../../img/Calculator.png";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
const Navbar = ({ logout }) => {
  let history = useHistory();
  const logoutUser = (e) => {
    e.preventDefault();
    localStorage.removeItem("userName");
    localStorage.removeItem("password");
    logout();
    history.push("/");
  };
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link to="/#" className="navbar-brand">
          <img className="image" src={image} alt="" />
        </Link>
        <div className=" right-pannel">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "24px",
            }}
          >
            <b className="pt-1 d-none d-md-block">Welcome </b>
            <p className="p-1 d-none d-md-block">
              ,{localStorage.getItem("username")}
            </p>
            <Link to="/#" className="p-1 signout" onClick={logoutUser}>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  isRegister: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isRegister: state.auth.isRegister,
});
export default connect(mapStateToProps, { logout })(Navbar);
