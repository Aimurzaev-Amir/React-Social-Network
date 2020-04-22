import React from "react";
import stl from "./Login.module.css"

const Login = () => {
  return (
    <div className={stl.loginMain}>
      <h2>Hello, Friend!</h2>
      <h3>Do you want to sign in?</h3>
    </div>
  );
};

export default Login;