import React from "react";
import { Link } from "@reach/router";

const ErrorPage = (err) => {
  const { type, msg, status } = err;
  const errRef = {
    editProblem: "Could not edit the problem!",
    fetchSingleProblem: "Could not get the problem!",
    fetchSuggestions: "Could not fetch suggestions!",
    deleteSuggestion: "Could not delete the suggestion!",
  };

  return (
    <header>
      <p>
        Sorry! {errRef[type]} Here's some more information: <br />
      </p>
      <p>
        Status: {status} | Message: {msg}
      </p>
      <Link to="/">Go home</Link>
    </header>
  );
};

export default ErrorPage;
