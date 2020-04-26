import React from "react";
import stl from "./Login.module.css";
import ReduxLoginForm from "./LoginForm";
import { connect } from "react-redux";
import { setAuth } from "../../Redux/AuthReducer";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.setAuth(
      formData.login,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

  return (
    <div>
      {props.isAuth ? (
        <Redirect to={"/profile"} />
      ) : (
        <div className={stl.loginMain}>
          <h1>Login</h1>
          <ReduxLoginForm onSubmit={onSubmit} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.Auth.isAuth,
  };
};

export default connect(mapStateToProps, { setAuth })(Login);
