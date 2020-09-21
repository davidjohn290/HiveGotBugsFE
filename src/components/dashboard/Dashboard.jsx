import React, { Component } from "react";
import BugChart from "./BugChart";
import { getUserByUsername } from "../../utils/api";

import { StyledUserCard } from "../../styled/dashboard";

// import "../dashboard.css";

class Dashboard extends Component {
  state = {
    isLoading: true,
    username: "Destiny82",
    avatar_url: "",
    role: "user",
    memberSince: "",
    BugPoints: 0,
    BugPointsLastMonth: 0,
    description: "",
    skills: [],
    github_url: "",
  };

  componentDidMount() {
    const { username } = this.state;
    getUserByUsername("Destiny82").then((user) => {
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
      });
    });
  }

  render() {
    const {
      isLoading,
      avatar_url,
      memberSince,
      bugPoints,
      description,
      skills,
      github_url,
      username,
    } = this.state;
    if (isLoading) return <p>Dashboard loading...</p>;
    return (
      <div>
        <StyledUserCard user={username} />
        <BugChart />
      </div>
    );
  }
}

export default Dashboard;
