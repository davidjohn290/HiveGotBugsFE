import React, { Component } from "react";
import { Router } from "@reach/router";
import { StyledHome } from "./styled/home";
import SingleProblem from "./components/singleProblem/SingleProblem";
import Header from "./components/header/Header";
import MentorForm from "./components/becomeAMentor/MentorForm";
import Dashboard from "./components/dashboard/Dashboard";
import { UserContext } from "./UserContext";

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
    const { username } = this.state;

    return (
      <div className="app">
        <UserContext.Provider
          value={{ username, toggleLogin: this.toggleLogin }}
        >
          <Header />
          <Router>
            <StyledHome path="/" />
            <MentorForm path="/become-a-mentor" />
            <SingleProblem path="/problem/:problem_id" />
            <Dashboard path="/dashboard" />
          </Router>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
