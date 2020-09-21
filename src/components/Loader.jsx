import React from "react";
import logoAnimated from "../img/logoAnimatedResized.gif";

const Loader = ({ className }) => {
  return (
    <section className={className}>
      <img width="150px" height="150px" src={logoAnimated} alt="Bug logo" />
    </section>
  );
};

export default Loader;
