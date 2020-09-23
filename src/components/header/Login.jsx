import React from "react";
import { UserContext } from "../../UserContext";
import { StyledHexButton } from "../../styled/lib";

const Login = ({ className, signIn, SignOut }) => {
  return (
    <UserContext.Consumer>
      {({ username, toggleLogin }) => (
        <StyledHexButton as="button" onClick={signIn}>
          {username ? "Log out" : "Log in"}
        </StyledHexButton>
      )}
    </UserContext.Consumer>
  );
};

export default Login;
