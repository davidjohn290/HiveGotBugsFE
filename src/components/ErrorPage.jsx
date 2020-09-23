import React from "react";
import { Link } from "@reach/router";

const ErrorPage = (err) => {
  const { type, msg, status } = err;
  const errRef = {
    fetchSingleProblem: "Could not get the problem!",
    editProblem: "Could not edit the problem!",
    deleteProblem: "Could not delete the problem!",
    fetchSuggestions: "Could not fetch suggestions!",
    deleteSuggestion: "Could not delete the suggestion!",
    addSuggestion: "Could not add the suggestion!",
    editSuggestion: "Could not edit the suggestion!",
    markSolved: "Could not mark as solved!",
    getMentor: "Could not get the mentor!",
    getMentorList: "Could not get any mentors!",
    filterTech: "Could not find any tech with that filter!",
    getUser: "Could not get the user!",
    fetchProblems: "Could not get the problems!",
    getTech: "Could not get any tech!",
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
