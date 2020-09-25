import React, { Component } from "react";
import { Link } from "@reach/router";

import logoNormal from "../../img/logoNormal.svg";
import logoLeft from "../../img/logoLeft.svg";
import logoRight from "../../img/logoRightFlipped.svg";

class Icon extends Component {
  state = { logo: logoNormal, intervalId: null, count: 0 };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const { count } = this.state;
    if (prevState.count !== count) {
      count % 2 === 0
        ? this.setState({ logo: logoLeft })
        : this.setState({ logo: logoRight });
    }
  }

  handleMouseEnter = () => {
    var intervalId = setInterval(this.timer, 150);
    this.setState({ intervalId });
  };

  handleMouseLeave = () => {
    clearInterval(this.state.intervalId);
    this.setState({ logo: logoNormal });
  };

  timer = () => {
    this.setState(({ count }) => {
      return { count: count + 1 };
    });
  };

  render() {
    const { logo } = this.state;

    return (
      <Link to="/">
        <img
          width="63px"
          height="63px"
          src={logo}
          alt="Bug Icon"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        />
      </Link>
    );
  }
}

export default Icon;
