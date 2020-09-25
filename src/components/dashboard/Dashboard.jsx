import React, { Component } from "react";
import * as api from "../../utils/api";
import { UserContext } from "../../UserContext";
import {
  StyledUserCard,
  StyledBugChart,
  StyledEditDashboard,
  StyledAddProblem,
} from "../../styled/dashboard";
import {
  StyledHexButton,
  StyledLoader,
  StyledErrorPage,
  StyledPleaseLogin,
} from "../../styled/lib";
import { StyledProblemCard } from "../../styled/home";

class Dashboard extends Component {
  state = {
    isLoading: false,
    err: null,
    user: {},
    username: null,
    problems: [],
    toggleEdit: false,
    filter: false,
    enableProblems: false,
  };

  static contextType = UserContext;

  componentDidMount() {
    const { username } = this.context;
    const { filter } = this.state;

    this.setState({ username });
    if (username) {
      this.fetchUser(username);
      this.fetchProblems(username, filter);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { username } = this.context;
    const { filter } = this.state;

    if (username !== prevState.username || prevState.filter !== filter) {
      this.setState({ username });
      if (username) {
        this.fetchUser(username);
        this.fetchProblems(username, filter);
      }
    }
  }

  fetchUser = (username) => {
    this.setState({ isLoading: true });
    api
      .getUserByUsername(username)
      .then((user) => {
        this.setState({ user, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: {
            type: "fetchUser",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  };

  addProblem = (username, body) => {
    api
      .addProblemByUsername(username, body)
      .then((problem) => {
        this.setState((currentState) => {
          return {
            problems: [problem, ...currentState.problems],
            enableProblems: true,
          };
        });
      })
      .catch(({ response }) => {
        this.setState({
          err: {
            type: "editProblem",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  };

  fetchProblems = (username, filter) => {
    this.setState({ isLoading: true });
    api
      .getProblemByUsername(username, filter)
      .then((problems) => {
        if (problems.length > 0) {
          this.setState({ enableProblems: true });
        }
        this.setState({ problems, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: {
            type: "fetchProblems",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  };

  showSolved = () => {
    this.setState((currentState) => {
      return { filter: !currentState.filter };
    });
  };

  toggleShowEdit = () => {
    this.setState((currentState) => {
      return { toggleEdit: !currentState.toggleEdit };
    });
  };

  render() {
    const {
      err,
      isLoading,
      user,
      username,
      problems,
      toggleEdit,
      filter,
      enableProblems,
    } = this.state;
    const { className } = this.props;

    if (err) return <StyledErrorPage {...err} />;
    if (isLoading) return <StyledLoader />;
    if (!username) return <StyledPleaseLogin />;

    return (
      <div className={className}>
        <StyledUserCard user={user} />
        <StyledBugChart username={username} />

        <section>
          <h2>Posted problems</h2>
          {!enableProblems && <p>Your added problems will appear here!</p>}
          <header>
            <StyledAddProblem updateProblemList={this.addProblem} />
            <ul className="dashboardButtons">
              {user.role === "mentor" && (
                <li>
                  <StyledHexButton
                    as="button"
                    id="editButton"
                    onClick={this.toggleShowEdit}
                  >
                    {!toggleEdit ? "Edit Profile" : "Close Edit"}
                  </StyledHexButton>
                </li>
              )}
              {toggleEdit && <StyledEditDashboard username={username} />}
              {enableProblems && (
                <li>
                  <StyledHexButton
                    as="button"
                    onClick={this.showSolved}
                    id="solvedButton"
                  >
                    {!filter ? "Show Solved" : "Show Unsolved"}
                  </StyledHexButton>
                </li>
              )}
            </ul>
          </header>
          <ul>
            {problems.map((problem) => {
              return (
                <StyledProblemCard
                  key={problem.problem_id}
                  problem={problem}
                  difficulty={problem.difficulty}
                />
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default Dashboard;
