import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import apiKey from "../../firebaseAPI";
import { StyledHexButton } from "../../styled/lib";
import { UserContext } from "../../UserContext";
import * as api from "../../utils/api";

firebase.initializeApp({
  apiKey: apiKey,
  authDomain: "hive-got-bugs.firebaseapp.com",
});

class GitHubLogin extends Component {
  static contextType = UserContext;

  state = { err: null };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
  };

  // signIn = () => {
  //   const { setUsername } = this.context;
  //   let username, avatar_url;
  //   firebase
  //     .auth()
  //     .signInWithPopup(new firebase.auth.GithubAuthProvider())
  //     .then(({ additionalUserInfo }) => {
  //       username = additionalUserInfo.username;
  //       avatar_url = additionalUserInfo.profile.avatar_url;
  //       return api.getUserByUsername(username);
  //     })
  //     .then(() => {
  //       setUsername(username);
  //       this.setState({ err: null });
  //     })
  //     .catch(() => {
  //       api
  //         .addUser(username, { avatar_url })
  //         .then(() => {
  //           setUsername(username);
  //         })
  //         .catch(() => {
  //           this.setState({ err: true });
  //         });
  //     });
  // };

  signOut = () => {
    const { setUsername } = this.context;
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUsername(null);
        this.setState({ err: null });
      })
      .catch(() => {
        this.setState({ err: true });
      });
  };

  render() {
    const { username } = this.context;
    const { err } = this.state;
    return (
      <>
        {!username ? (
          <StyledHexButton as="button" onClick={this.signIn}>
            Log In
          </StyledHexButton>
        ) : (
          <StyledHexButton as="button" onClick={this.signOut}>
            Log out
          </StyledHexButton>
        )}
        {err && <p>Login error</p>}
      </>
    );
  }
}

export default GitHubLogin;
