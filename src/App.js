import React from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import ProfileInfoContainer from "./components/ProfilePageComponents/ProfileInfoContainer";
import SidebarContentContainer from "./components/SidebarComponents/SidebarContentContainer";
import ProfileContainer from "./components/ProfilePageComponents/ProfileContainer";
import MessagesContainer from "./components/MessagesPageComponents/MessagesContainer";
import FriendsContainer from "./components/FriendsComponents/FriendsContainer";
import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import Login from "./components/LoginComponents/Login";
import { connect } from "react-redux";
import { initializedApp } from "./Redux/AppReducer";
import { compose } from "redux";
import Preloader from "./common/preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializedApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div>
        <HeaderContainer />
        <div className="bgColor">
          <Route
            path="/profile/:userId?"
            render={() => <ProfileInfoContainer />}
          />
          <div className="content wrapper">
            <SidebarContentContainer />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/messages" render={() => <MessagesContainer />} />
            <Route path="/friends" render={() => <FriendsContainer />} />
            <Route path="/login" render={() => <Login />} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default compose(
  connect(mapStateToProps, { initializedApp }),
  withRouter
)(App);
