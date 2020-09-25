import React from "react";
import logoNormal from "../img/logoNormal.svg";
import { StyledHexButton } from "../styled/lib";

const ErrorPage = (err) => {
  const { type, msg, status, className } = err;
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
    addProblem: "Could not add the problem",
    makeUserMentor: "Could not make the user a mentor!",
    editUser: "Could not edit the user!",
  };

  return (
    <header className={className}>
      <img width="100px" height="100px" src={logoNormal} alt="Bug logo" />
      <h3>
        Sorry! {errRef[type]} Here's some more information: <br />
      </h3>
      <p>
        Status: <span>{status}</span> | Message: <span>{msg}</span>
      </p>
      <p>Go to the Homepage</p>
      <StyledHexButton to="/">Homepage</StyledHexButton>
    </header>
  );
};

export default ErrorPage;
