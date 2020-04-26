import React from "react";
import stl from "./Login.module.css";
import { reduxForm, Field } from "redux-form";
import Component from "../../common/FormControls/FormControls";
import { required, maxFieldLength } from "../../common/validators/Validators";
import { connect } from "react-redux";
import { compose } from "redux";

const maxLength20 = maxFieldLength(20);

const LoginForm = (props) => {
  return (
    <form className={stl.loginForm} onSubmit={props.handleSubmit}>
      <div>
        <p>{props.error}</p>
        <Field
          type="input"
          placeholder="login"
          name="login"
          component={Component}
          validate={[required, maxLength20]}
        />
      </div>
      <div>
        <Field
          type="input"
          placeholder="password"
          name="password"
          component={Component}
          validate={[required, maxLength20]}
        />
      </div>
      <div className={stl.rememberCheckbox}>
        <Field type="checkbox" name="rememberMe" component="input" />
        <p>remember me</p>
      </div>
      {props.captcha ? (
        <div>
          <img src={props.captcha} alt="captcha" />
          <Field
            type="input"
            placeholder="captcha"
            name="captcha"
            component={Component}
          />
        </div>
      ) : null}
      <button>Login</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.Auth.error,
    captcha: state.Auth.captcha,
  };
};

export default compose(
  reduxForm({ form: "login" }),
  connect(mapStateToProps, null)
)(LoginForm);
