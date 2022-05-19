import React, { Fragment, useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./auth.css";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
const Register = ({ register, isRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    password2: "",
  });
  const history = useHistory();
  useEffect(() => {
    if (isRegister) {
      localStorage.setItem("userName", formData.username);
      localStorage.setItem("password", formData.password);
      history.push("/dashboard");
    }
  }, [isRegister]);
  const { name, username, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert("Passwords do not match");
    } else {
      register(formData);
    }
    //console.log(formData);
  };

  // if (isUser) {
  //   return <Redirect to="/dashboard" />;
  // }
  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <section className="col-sm-12">
            <h1 className="large text-primary">Sign Up</h1>
          </section>
          <p className="col-sm-12 lead">
            <i className="fas fa-user"></i> Create Your Account
          </p>
          <form className="col-sm-12 form" onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                className="text"
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                className="text"
                type="username"
                placeholder="username"
                name="username"
                value={username}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                className="text"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                className="text"
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <button type="submit" className="button btn-primary">
              Register
            </button>
          </form>
          <p className="col-sm-12 my-1">
            Already have an account? <Link to="/">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isRegister: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isRegister: state.auth.isRegister,
});
export default connect(mapStateToProps, { register })(Register);
