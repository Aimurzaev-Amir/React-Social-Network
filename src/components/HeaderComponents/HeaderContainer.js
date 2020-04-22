import React from "react";
import { connect } from "react-redux";
import Header from "../Header";
import { Auth } from "../../Redux/AuthReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.Auth();
  }
  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login} />;
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.Auth.login,
    isAuth: state.Auth.isAuth,
  };
};

export default connect(mapStateToProps, { Auth })(HeaderContainer);
