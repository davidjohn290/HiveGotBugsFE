import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import * as api from "../../utils/api";
import { UserContext } from "../../UserContext";
import {
  StyledLoader,
  StyledErrorPage,
  StyledHexButton,
} from "../../styled/lib";

class BugChart extends Component {
  static contextType = UserContext;

  state = {
    isLoading: true,
    bugPointsOverMonth: 0,
    bugPoints: 0,
    techTally: {},
    solvedTally: {},
    username: null,
    toggleShow: true,
    err: null,
    enableChart: false,
  };

  componentDidMount() {
    const { username } = this.context;
    this.setState({ username });
    if (username) {
      this.fetchUser(username);
      this.fetchProblem(username);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { username } = this.context;
    if (username !== prevState.username) {
      this.setState({ username });
      if (username) {
        this.fetchUser(username);
        this.fetchProblem(username);
      }
    }
  }

  fetchUser = (username) => {
    this.setState({ isLoading: true });
    api
      .getUserByUsername(username)
      .then((user) => {
        if (user.bug_points > 0) {
          this.setState({ enableChart: true });
        }
        this.setState({
          bugPointsOverMonth: user.bug_points_over_month,
          bugPoints: user.bug_points,
          isLoading: false,
        });
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

  fetchProblem = (username) => {
    api
      .getProblemByUsernameWithoutFilter(username)
      .then((problems) => {
        this.getTallyOfProblems(problems, "tech", "techTally");
        this.getTallyOfProblems(problems, "solved", "solvedTally");
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: {
            type: "fetchSingleProblem",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  };

  getTallyOfProblems = (problems, propTally, stateProp) => {
    const tallyObj = {};
    problems.forEach((problem) => {
      if (tallyObj[problem[propTally]] >= 1) {
        tallyObj[problem[propTally]] += 1;
      } else {
        tallyObj[problem[propTally]] = 1;
      }
    });
    this.setState({ [stateProp]: tallyObj });
  };

  toggleShow = () => {
    this.setState((currentState) => {
      return { toggleShow: !currentState.toggleShow };
    });
  };

  render() {
    const { className } = this.props;
    const {
      isLoading,
      toggleShow,
      bugPoints,
      techTally,
      solvedTally,
      err,
    } = this.state;

    const techLabel = Object.keys(techTally);
    const techData = Object.values(techTally);
    let problemData = Object.values(solvedTally);
    let problemLabels = ["unsolved", "solved"];
    if (problemData.length === 0) {
      problemLabels = [];
      problemData = [];
    }
    const techChartData = {
      labels: techLabel,
      datasets: [
        {
          backgroundColor: [
            "rgb(0, 124, 146)",
            "#808080",
            "#da995c",
            "#8cc56f",
            "#ed6270",
            "#ffffff",
          ],
          borderColor: "#da995c",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,100,64,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: techData,
        },
      ],
    };
    const problemChartData = {
      labels: problemLabels,
      datasets: [
        {
          backgroundColor: ["rgb(0, 124, 146)", "#808080"],
          borderColor: "#da995c",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,100,64,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: problemData,
        },
      ],
    };

    if (err) return <StyledErrorPage {...err} />;
    if (isLoading) return <StyledLoader />;

    return (
      <section className={className}>
        <StyledHexButton as="p" id="bugPoints">
          Total Points: {bugPoints}
        </StyledHexButton>
        {toggleShow && (
          <ul id="chartList">
            {techData.length > 0 && (
              <li>
                <p>Summary of tech used for each problem</p>
                <Doughnut
                  data={techChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                  }}
                />
              </li>
            )}
            {bugPoints > 0 && (
              <li>
                <p>Total amount of solved problems versus unsolved</p>
                <Doughnut
                  data={problemChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                  }}
                />
              </li>
            )}
          </ul>
        )}
        <header>
          <StyledHexButton
            as="button"
            onClick={this.toggleShow}
            id="toggleChart"
          >
            {toggleShow ? "Hide Chart" : "Show Chart"}
          </StyledHexButton>
        </header>
      </section>
    );
  }
}

export default BugChart;
