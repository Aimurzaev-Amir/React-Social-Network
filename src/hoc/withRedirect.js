import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapStateToPropsforRedirect = (state) => {
  return {
    isAuth: state.Auth.isAuth,
  };
};

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={"/login"} />;
      
      return <Component {...this.props} />;
    }
  }
  let ConnectAuthRedirectComponent = connect(mapStateToPropsforRedirect)(
    RedirectComponent
  );

  return ConnectAuthRedirectComponent;
};
