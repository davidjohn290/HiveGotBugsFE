import React, { Component } from "react";
import firebase from "firebase";
import apiKey from "../../firebaseAPI";
import { StyledHexButton } from "../../styled/lib";
import { UserContext } from "../../UserContext";
import { getUserByUsername, addUser } from "../../utils/api";

firebase.initializeApp({
  apiKey: apiKey,
  authDomain: "hive-got-bugs.firebaseapp.com",
});

class GitHubLogin extends Component {
  static contextType = UserContext;

  state = {
    isSignedIn: false,
    username: "",
    user: {},
    failedLogin: true,
  };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => {
        this.setState({ isSignedIn: true });
      },
    },
  };

  login = () => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((userCredential) => {
        const { username, profile } = userCredential.additionalUserInfo;
        const avatar_url = profile.avatar_url;
        const { setUser } = this.context;
        setUser(username);
        return { username, avatar_url };
      })
      .then(({ username, avatar_url }) => {
        this.checkIfUserExists(username, { avatar_url: avatar_url });
      });
  };

  signOut = () => {
    firebase.auth().signOut();
    this.setState({ isSignedIn: false });
  };

  checkIfUserExists = (username, body) => {
    getUserByUsername(username)
      .then((user) => {
        this.setState({ isSignedIn: true, username: user.username, user });
      })
      .catch((err) => {
        addUser(username, body).then((user) => {
          this.setState({ isSignedIn: true });
        });
      });
  };

  render() {
    const { isSignedIn } = this.state;
    return (
      <div>
        <UserContext.Consumer>
          {() =>
            !isSignedIn ? (
              <StyledHexButton as="button" onClick={this.login}>
                Log In
              </StyledHexButton>
            ) : (
              <StyledHexButton as="button" onClick={this.signOut}>
                Log out
              </StyledHexButton>
            )
          }
        </UserContext.Consumer>
      </div>
    );
  }
}

export default GitHubLogin;
