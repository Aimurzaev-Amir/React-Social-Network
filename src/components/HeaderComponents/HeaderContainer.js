import React from "react";
import { connect } from "react-redux";
import Header from "../Header";
import { Auth, deleteAuth } from "../../Redux/AuthReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.Auth();
  }
  render() {
    return <Header deleteAuth={this.props.deleteAuth} isAuth={this.props.isAuth} login={this.props.login} />;
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.Auth.login,
    isAuth: state.Auth.isAuth,
  };
};

export default connect(mapStateToProps, { Auth, deleteAuth })(HeaderContainer);
