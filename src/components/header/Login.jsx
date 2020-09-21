import React from "react";
import { UserContext } from "../../UserContext";
import { StyledHexButton } from "../../styled/lib";

const Login = ({ className }) => {
  return (
    <UserContext.Consumer>
      {({ username, toggleLogin }) => (
        <StyledHexButton as="button" onClick={toggleLogin}>
          {username ? "Log out" : "Log in"}
        </StyledHexButton>
      )}
    </UserContext.Consumer>
  );
};

export default Login;
