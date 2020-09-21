import React, { Component } from "react";
import { Router } from "@reach/router";
import { StyledHome } from "./styled/home";
import SingleProblem from "./components/singleProblem/SingleProblem";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import { UserContext } from "./UserContext";
import { StyledMentorForm } from "./styled/mentor";

class App extends Component {
  state = { username: null };

  toggleLogin = () => {
    this.setState(({ user }) => {
      if (user) return { user: null };
      else return { user: "Destiny82" };
    });
  };

  render() {
    // const err = { type: "general404", msg: "Page not found!", status: 404 };
    const { user } = this.state;

    return (
      <div className="app">
        <UserContext.Provider value={{ user, toggleLogin: this.toggleLogin }}>
          <Header />
          <Router>
            <StyledHome path="/" />
            <StyledMentorForm path="/become-a-mentor" />
            <SingleProblem path="/problem" />
            <Dashboard path="/dashboard" />
          </Router>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
