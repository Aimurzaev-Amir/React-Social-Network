import React from "react";
import { connect } from "react-redux";
import Header from "../Header";
import { setUserAuth } from "../../Redux/AuthReducer";
// import Axios from "axios";
import {AuthAPI} from "../../API/api"

class HeaderContainer extends React.Component {
  componentDidMount() {
    AuthAPI.getAuth().then((data) => {
        if(data.resultCode === 0) {
            this.props.setUserAuth(data.data.id, data.data.login, data.data.email)
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
