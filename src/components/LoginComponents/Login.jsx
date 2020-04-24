import React from "react";
import stl from "./Login.module.css";
import ReduxLoginForm from "./LoginForm";

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return (
    <div className={stl.loginMain}>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
};


export default Login;
