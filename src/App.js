import React, { Component } from "react";
import { Router } from "@reach/router";
import { StyledHome } from "./styled/home";
import { StyledSingleProblem } from "./styled/singleProblem";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import MentorPage from "./components/Mentor/MentorPage"
import { UserContext } from "./UserContext";
import { StyledMentorForm } from "./styled/mentor";

class App extends Component {
  state = { username: null };

  toggleLogin = () => {
    this.setState(({ username }) => {
      if (username) return { username: null };
      else return { username: "Destiny82" };
    });
  };

  render() {
    // const err = { type: "general404", msg: "Page not found!", status: 404 };

    return (
      <div className="app">
        <UserContext.Provider
          value={{
            username: this.state.username,
            toggleLogin: this.toggleLogin,
          }}
        >
          <Header />
          <Router>
            <StyledHome path="/" />
            <StyledSingleProblem path="/problem/:problem_id" />
            <StyledMentorForm path="/become-a-mentor" />
            <Dashboard path="/dashboard" />
            <MentorPage path="/mentors" />
          </Router>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
