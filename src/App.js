import React, { Component } from "react";
import { Router } from "@reach/router";
import { StyledHome } from "./styled/home";
import { StyledSingleProblem } from "./styled/singleProblem";
import Header from "./components/header/Header";
import { StyledSingleMentor } from "./styled/singleMentor";
import { StyledDashboard } from "./styled/dashboard";
import { UserContext } from "./UserContext";
import { StyledMentorForm } from "./styled/becomeAMentor";
import { StyledMentorList } from "./styled/mentors";
import { StyledErrorPage } from "./styled/lib";

class App extends Component {
  state = { username: "username", err: null };

  // componentDidMount() {
  //   this.setUsername(localStorage.getItem("username"));
  // }

  setUsername = (username) => {
    this.setState({ username });
    localStorage.setItem("username", username);
  };

  render() {
    const err = { type: "general404", msg: "Page not found!", status: 404 };
    const { username } = this.state;

    return (
      <div className="app">
        <UserContext.Provider
          value={{ username, setUsername: this.setUsername }}
        >
          <Header />
          <Router>
            <StyledHome path="/" />
            <StyledSingleProblem path="/problem/:problem_id" />
            <StyledMentorForm path="/become-a-mentor" />
            <StyledSingleMentor path="/:username" />
            <StyledDashboard path="/dashboard" />
            <StyledMentorList path="/mentors" />
            <StyledErrorPage default {...err} />
          </Router>
        </UserContext.Provider>{" "}
      </div>
    );
  }
}

export default App;
