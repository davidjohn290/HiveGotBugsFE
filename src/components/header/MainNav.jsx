import React, { Component } from "react";
import { StyledHexButton } from "../../styled/lib";
import { StyledMenuNav } from "../../styled/header";
import Icon from "./Icon";
import GitHubLogin from "./GitHubLogin";

class MainNav extends Component {
  state = { searchIsVisible: false, menuIsVisible: false };

  toggleMenu = () => {
    this.setState(({ menuIsVisible }) => {
      return { menuIsVisible: !menuIsVisible };
    });
  };

  toggleSearch = () => {
    this.setState(({ searchIsVisible }) => {
      return { searchIsVisible: !searchIsVisible };
    });
  };

  render() {
    const { menuIsVisible } = this.state;
    const { className } = this.props;
    return (
      <>
        <nav className={className}>
          <Icon />
          <ul>
            <li>
              <StyledHexButton as="button" onClick={this.toggleMenu}>
                Menu
              </StyledHexButton>
            </li>
            <li>
              <GitHubLogin />
            </li>
          </ul>
        </nav>
        {menuIsVisible && <StyledMenuNav />}
      </>
    );
  }
}

export default MainNav;
