import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./auth.css";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";
const Login = ({ login, isRegister }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();
  useEffect(() => {
    if (isRegister) {
      localStorage.setItem("userName", formData.username);
      localStorage.setItem("password", formData.password);
      history.push("/dashboard");
    }
  }, [isRegister]);
  const { username, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();

    login(formData);
  };
  //Redirect if logged in
  // if (localStorage.length > 0) {
  //   return <Redirect to="/dashboard" />;
  // }
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <section className="col-sm-12">
            <h1 className="large text-primary">Sign in</h1>
          </section>
          <p className="lead col-sm-12">
            <i className="fas fa-user"></i> Sign into Your Account
          </p>
          <form className="form col-sm-12" onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                className="text"
                type="text"
                placeholder="UserName"
                name="username"
                required
                value={username}
                onChange={(e) => onChange(e)}
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <input
                className="text"
                type="password"
                placeholder="Password"
                name="password"
                minLength="6"
                value={password}
                onChange={(e) => onChange(e)}
              />
            </div>
            <button type="submit" className="button btn-primary">
              Login
            </button>
          </form>
          <p className="col-sm-12 my-1">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isRegister: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isRegister: state.auth.isRegister,
});
export default connect(mapStateToProps, { login })(Login);
