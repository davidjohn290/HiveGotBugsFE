import React, { Component } from "react";

import { getUserByUsername, getProblemByUsername } from "../../utils/api";
import { UserContext } from "../../UserContext";
import { StyledUserCard, StyledBugChart } from "../../styled/dashboard";
import { StyledProblemCard } from "../../styled/home";

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
  };

  componentDidUpdate(prevProps, prevState) {
    const { username } = this.context;
    if (prevState.username !== username) {
      this.LoginUser(username);
      getProblemByUsername(username).then((problems) => {
        this.setState({ problems });
      });
    }
  }

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
        <ul>
          {problems.map((problem) => {
            return (
              <StyledProblemCard key={problem.problem_id} problem={problem} />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Dashboard;
