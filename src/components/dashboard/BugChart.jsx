import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { StyledHexButton } from "../../styled/lib";
import { getUserByUsername } from "../../utils/api";

class BugChart extends Component {
  state = {
    isLoading: true,
    bugPointsOverMonth: 0,
    bugPoints: 0,
    username: this.props.username,
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
  }

  toggleShow = () => {
    this.setState((currentState) => {
      return { toggleShow: !currentState.toggleShow };
    });
  };

  render() {
    const { className } = this.props;
    const { isLoading, toggleShow, bugPointsOverMonth, bugPoints } = this.state;
    const data = {
      labels: ["This months bug points"],
      datasets: [
        {
          label: "Bug points every 30 days",
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ],
          borderColor: "#da995c",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,100,64,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [bugPointsOverMonth],
        },
      ],
    };
    if (isLoading) return <p>Bug chart is loading...</p>;
    return (
      <div className={className}>
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
          <Bar
            data={data}
            width={50}
            height={150}
            options={{
              maintainAspectRatio: false,
            }}
          />
        ) : null}
      </div>
    );
  }
}

export default BugChart;
