import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { StyledHexButton } from "../../styled/lib";
import { getUserByUsername } from "../../utils/api";
import { getProblemByUsernameWithoutFilter } from "../../utils/api";

class BugChart extends Component {
  state = {
    isLoading: true,
    bugPointsOverMonth: 0,
    bugPoints: 0,
    techTally: {},
    solvedTally: {},
    username: "Destiny82",
    toggleShow: true,
  };

  componentDidMount() {
    const { username } = this.state;
    getUserByUsername(username).then((user) => {
      this.setState({
        isLoading: false,
        bugPointsOverMonth: user.bug_points_over_month,
        bugPoints: user.bug_points,
      });
    });
    getProblemByUsernameWithoutFilter(username).then((problems) => {
      this.getTallyOfProblems(problems, "tech", "techTally");
      this.getTallyOfProblems(problems, "solved", "solvedTally");
    });
  }

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
      bugPointsOverMonth,
      bugPoints,
      techTally,
      solvedTally,
    } = this.state;
    const techLabel = Object.keys(techTally);
    const techData = Object.values(techTally);
    const problemData = Object.values(solvedTally);
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
      labels: ["unsolved", "solved"],
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
    if (isLoading) return <p>Bug chart is loading...</p>;
    return (
      <div className={className}>
        <button onClick={this.getTechOfProblems}>click me</button>
        <header>
          <StyledHexButton
            as="button"
            onClick={this.toggleShow}
            id="toggleChart"
          >
            {toggleShow ? "Hide Chart" : "Show Chart"}
          </StyledHexButton>
          <StyledHexButton as="p" id="bugPoints">
            Total: {bugPoints}
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
      </div>
    );
  }
}

export default BugChart;
