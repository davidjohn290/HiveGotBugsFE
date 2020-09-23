import React, { Component } from "react";
import { Router } from "@reach/router";
import { StyledHome } from "./styled/home";
import { StyledSingleProblem } from "./styled/singleProblem";
import Header from "./components/header/Header";
import MentorPage from "./components/singleMentor/MentorPage";
import { StyledDashboard } from "./styled/dashboard";
import { UserContext } from "./UserContext";
import { StyledMentorForm } from "./styled/mentor";
import MentorList from "./components/mentors/MentorList";
import ErrorPage from "./components/ErrorPage";

class App extends Component {
  state = { username: null, err: null };

  setUsername = (username) => {
    this.setState({ username });
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
            <MentorPage path="/:username" />
            <StyledDashboard path="/dashboard" />
            <MentorList path="/mentors" />
            <ErrorPage default {...err} />
          </Router>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
