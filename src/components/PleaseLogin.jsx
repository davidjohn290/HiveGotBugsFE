import React from "react";
import logoNormal from "../img/logoNormal.svg";

const PleaseLogin = ({ className }) => {
  return (
    <section className={className}>
      <>
        <img width="150px" height="150px" src={logoNormal} alt="Bug logo" />
      </>

      <h3>Please login first!</h3>
      <p>oops! Please login and become a member to be able to view this page</p>
    </section>
  );
};

export default PleaseLogin;
