import React from "react";
import { connect } from "react-redux";
import Header from "../Header";
import { setUserAuth } from "../../Redux/AuthReducer";
import Axios from "axios";

class HeaderContainer extends React.Component {
  componentDidMount() {
    Axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
      withCredentials: true,
    }).then((response) => {
        if(response.data.resultCode === 0) {
            this.props.setUserAuth(response.data.data.id, response.data.data.login, response.data.data.email)
        }
    });
  }
  render() {
    return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
  }
}

let mapStateToProps = (state) => {
  return {
    userId: state.Auth.userId,
    login: state.Auth.login,
    email: state.Auth.email,
    isAuth: state.Auth.isAuth,
    profile: state.profilePage.profile,
  }; 
};

export default connect(mapStateToProps, { setUserAuth })(HeaderContainer);
