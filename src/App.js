import React from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import { initializedApp } from "./Redux/AppReducer";
import { compose } from "redux";
import Preloader from "./common/preloader/Preloader";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/reduxStore";
import { Provider } from "react-redux";

import HeaderContainer from "./components/HeaderComponents/HeaderContainer";
import SidebarContentContainer from "./components/SidebarComponents/SidebarContentContainer";
import SuspenseHOC from "./common/Suspense/Suspense";
const ProfileContainer = React.lazy(() =>
  import("./components/ProfilePageComponents/ProfileContainer")
);
const MessagesContainer = React.lazy(() =>
  import("./components/MessagesPageComponents/MessagesContainer")
);
const FriendsContainer = React.lazy(() =>
  import("./components/FriendsComponents/FriendsContainer")
);
const ProfileInfoContainer = React.lazy(() =>
  import("./components/ProfilePageComponents/ProfileInfoContainer")
);
const Login = React.lazy(() => import("./components/LoginComponents/Login"));
const EditProfile = React.lazy(() =>
  import("./components/ProfilePageComponents/EditProfile/EditProfile")
);

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
            render={SuspenseHOC(ProfileInfoContainer)}
          />
          <div className="content wrapper">
            <SidebarContentContainer />
            <Route
              path="/profile/:userId?"
              render={SuspenseHOC(ProfileContainer)}
            />
            <Route path="/messages" render={SuspenseHOC(MessagesContainer)} />
            <Route path="/friends" render={SuspenseHOC(FriendsContainer)} />
            <Route path="/login" render={SuspenseHOC(Login)} />
            <Route path="/edit" render={SuspenseHOC(EditProfile)} />
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

let AppContainer = compose(
  connect(mapStateToProps, { initializedApp }),
  withRouter
)(App);

const BeAbleJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default BeAbleJSApp;
