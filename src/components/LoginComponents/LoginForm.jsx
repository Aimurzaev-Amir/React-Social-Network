import React from "react"
import stl from "./Login.module.css";
import {reduxForm, Field} from "redux-form"

const LoginForm = (props) => {
    console.log(props)
    return(
        <form className={stl.loginForm} onSubmit={props.handleSubmit}>
        <div>
          <Field type={"text"} placeholder={"login"} name={"login"} component={"input"}/>
        </div>
        <div>
          <Field type={"text"} placeholder={"password"} name={"password"} component={"input"}/>
        </div>
        <div className={stl.rememberCheckbox}>
          <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>
          <p>remember me</p>
        </div>
        <button>Login</button>
      </form>
    )
}


 const ReduxLoginForm = reduxForm({form: "login"})(LoginForm)

 export default ReduxLoginForm;