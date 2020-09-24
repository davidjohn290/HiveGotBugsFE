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
      enableChart,
    } = this.state;

    const techLabel = Object.keys(techTally);
    const techData = Object.values(techTally);
    const problemData = Object.values(solvedTally);
    let problemLabels = ["unsolved", "solved"];
    if (bugPoints === 0) {
      problemLabels = [];
    }
    const techChartData = {
      labels: techLabel,
      datasets: [
        {
          label: "Summary of tech used for problems",
          backgroundColor: [
            "#de1738",
            "#36A2EB",
            "#FFCE56",
            "#CCC",
            "#36A2EB",
            "#FFCE56",
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
          label: "Bug points every 30 days",
          backgroundColor: [
            "#de1738",
            "#36A2EB",
            "#FFCE56",
            "#CCC",
            "#36A2EB",
            "#FFCE56",
          ],
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
        <header>
          {enableChart && (
            <StyledHexButton
              as="button"
              onClick={this.toggleShow}
              id="toggleChart"
            >
              {toggleShow ? "Hide Chart" : "Show Chart"}
            </StyledHexButton>
          )}
          <StyledHexButton as="p" id="bugPoints">
            Total Points: {bugPoints}
          </StyledHexButton>
        </header>

        {toggleShow ? (
          <ul id="chartList">
            <li>
              <Doughnut
                data={techChartData}
                options={{
                  maintainAspectRatio: false,
                }}
              />
            </li>
            <li>
              <Doughnut
                data={problemChartData}
                options={{
                  maintainAspectRatio: false,
                }}
              />
            </li>
          </ul>
        ) : null}
      </section>
    );
  }
}

export default BugChart;
