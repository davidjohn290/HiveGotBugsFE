import React, { Component } from "react";
import { StyledHexButton } from "../../styled/lib";
import Search from "./Search";
import { StyledMenuNav } from "../../styled/header";
import Icon from "./Icon";
import Login from "./Login";

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
    const { menuIsVisible, searchIsVisible } = this.state;
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
              <StyledHexButton as="button" onClick={this.toggleSearch}>
                Search
              </StyledHexButton>
            </li>
            <li>
              <Login />
            </li>
          </ul>
        </nav>
        {menuIsVisible && <StyledMenuNav />}
        {searchIsVisible && <Search />}
      </>
    );
  }
}

export default MainNav;
