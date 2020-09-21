import React from "react";
import { Router } from "@reach/router";
// import "./App.css";
// import "./css/problemsList.css";
// import "./css/problemCard.css";
// import "./css/singleProblem.css";
// import "./css/suggestions.css";
// import "./css/suggestionCard.css";
// import "./css/button.css";
import { StyledHome } from "./styled/home";
import SingleProblem from "./components/singleProblem/SingleProblem";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import { StyledMentorForm } from "./styled/mentor";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <StyledHome path="/" />
        <StyledMentorForm path="/become-a-mentor" />
        <SingleProblem path="/problem" />
        <Dashboard path="/dashboard" />
      </Router>
    </div>
  );
}

export default App;
