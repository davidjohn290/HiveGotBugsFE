import React, { Component } from "react";
import firebase from "firebase";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { GithubLoginButton } from "react-social-login-buttons";
import apiKey from "../../firebaseAPI";
import { StyledHexButton } from "../../styled/lib";
import { UserContext } from "../../UserContext";

firebase.initializeApp({
  apiKey: apiKey,
  authDomain: "hive-got-bugs.firebaseapp.com",
});

class GitHubLogin extends Component {
  static contextType = UserContext;

  state = {
    isSignedIn: false,
    username: "",
    image_url: "",
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
        const image_url = profile.avatar_url;
        const { setUser } = this.context;
        setUser(username);
        this.setState({ isSignedIn: true, username, image_url });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  signOut = () => {
    firebase.auth().signOut();
    this.setState({ isSignedIn: false });
  };

  render() {
    const { isSignedIn } = this.state;
    return (
      <div>
        <UserContext.Consumer>
          {({ username, role }) =>
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

        {/* {this.state.isSignedIn ? (
          <span>
            <div>Signed in</div>
            <button onClick={this.signOut}>Sign out</button>
          </span>
        ) : (
          <button onClick={this.login}>login</button>
        )} */}
        {/* <FontAwesomeIcon icon={faGithub} size="2x" /> */}
        {/* <div>
          <GithubLoginButton />
        </div> */}
      </div>
    );
  }
}

export default GitHubLogin;
