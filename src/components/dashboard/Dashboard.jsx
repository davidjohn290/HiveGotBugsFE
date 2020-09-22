import React, { Component } from "react";

import { getUserByUsername, getProblemByUsername } from "../../utils/api";
import { UserContext } from "../../UserContext";
import { StyledUserCard, StyledBugChart } from "../../styled/dashboard";
import { StyledProblemCard } from "../../styled/home";
import { StyledHexButton } from "../../styled/lib";

class Dashboard extends Component {
  static contextType = UserContext;

  state = {
    isLoading: true,
    username: this.context.username,
    avatar_url: "",
    role: "user",
    memberSince: "",
    BugPoints: 0,
    BugPointsLastMonth: 0,
    description: "",
    skills: [],
    github_url: "",
    problems: [],
    filter: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { username } = this.context;
    const { filter } = this.state;
    if (prevState.username !== username || prevState.filter !== filter) {
      this.LoginUser(username);
      getProblemByUsername(username, filter).then((problems) => {
        this.setState({ problems });
      });
    }
  }

  showSolved = () => {
    this.setState((currentState) => {
      return { filter: !currentState.filter };
    });
  };

  LoginUser = (username) => {
    getUserByUsername(username).then((user) => {
      this.setState({
        avatar_url: user.avatar_url,
        role: user.role,
        memberSince: user.created_at,
        bugPoints: user.bug_points,
        bugPointsLastMonth: user.bug_points_over_month,
        description: user.description,
        skills: [user.skill1, user.skill2, user.skill3],
        github_url: user.github_url,
        isLoading: false,
        username: this.context.username,
      });
    });
  };

  //be able to edit profile!!!!

  render() {
    const { className } = this.props;
    const {
      isLoading,
      avatar_url,
      memberSince,
      bugPoints,
      description,
      skills,
      github_url,
      username,
      role,
      problems,
      filter,
    } = this.state;

    if (isLoading) return <p>Please login to see your dashboard</p>;
    return (
      <div className={className}>
        <StyledUserCard
          username={username}
          memberSince={memberSince}
          avatar_url={avatar_url}
          bugPoints={bugPoints}
          description={description}
          skills={skills}
          github_url={github_url}
          role={role}
        />
        <StyledBugChart username={username} />
        <section>
          <h2>Posted problems</h2>

          <StyledHexButton as="button" onClick={this.showSolved}>
            {!filter ? "Show Solved" : "Show Unsolved"}
          </StyledHexButton>
          <ul>
            {problems.map((problem) => {
              return (
                <StyledProblemCard key={problem.problem_id} problem={problem} />
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default Dashboard;
