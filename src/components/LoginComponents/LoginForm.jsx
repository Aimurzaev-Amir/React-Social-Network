import React from "react";
import stl from "./Login.module.css";
import { reduxForm, Field } from "redux-form";
import Component from "../../common/FormControls/FormControls";
import { required, maxFieldLength } from "../../common/validators/Validators";

const maxLength10 = maxFieldLength(10);

const LoginForm = (props) => {
  return (
    <form className={stl.loginForm} onSubmit={props.handleSubmit}>
      <div>
        <Field
          type="input"
          placeholder="login"
          name="login"
          component={Component}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <Field
          type="input"
          placeholder="password"
          name="password"
          component={Component}
          validate={[required, maxLength10]}
        />
      </div>
      <div className={stl.rememberCheckbox}>
        <Field type="checkbox" name="rememberMe" component="input" />
        <p>remember me</p>
      </div>
      <button>Login</button>
    </form>
  );
};

const ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);

export default ReduxLoginForm;
