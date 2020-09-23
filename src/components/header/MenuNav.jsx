import React from "react";
import { StyledHexButton } from "../../styled/lib";

const MenuNav = ({ className }) => {
  return (
    <nav>
      <ul className={className}>
        <li>
          <StyledHexButton to="/">Home</StyledHexButton>
        </li>
        <li>
          <StyledHexButton to="/dashboard">Dashboard</StyledHexButton>
        </li>
        <li>
          <StyledHexButton to="/become-a-mentor">
            Become a mentor
          </StyledHexButton>
        </li>
        <li>
          <StyledHexButton to="/mentors">Mentors</StyledHexButton>
        </li>
      </ul>
    </nav>
  );
};

export default MenuNav;
