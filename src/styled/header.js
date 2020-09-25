import styled from "styled-components";
import MainNav from "../components/header/MainNav";
import MenuNav from "../components/header/MenuNav";
import Title from "../components/header/Title";

// <Section>
export const StyledTitle = styled(Title)`
  text-align: center;
  margin: auto;
  max-width: 100%;
  padding: 0.7em;
  margin-top: 0.4em;
  background-color: grey;
  font-size: 15pt;
  box-shadow: 10px 10px 5px 0px rgba(20, 20, 20, 0.6);
`;

// <ul>
export const StyledMainNav = styled(MainNav)`
  display: flex;
  justify-content: space-between;
  padding: 0.3em 0.3em 0em;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    padding: 0px;
    margin: 0px;
  }
  ul li {
    margin-left: 0.2em;
    margin-right: 0.2em;
  }

  ul li button {
    font-family: monospace;
  }
`;

// <ul>
export const StyledMenuNav = styled(MenuNav)`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  padding: 0;
  font-family: monospace;
  margin: 0px;
  margin-right: 0.3em;

  @media only screen and (min-width: 375px) {
    position: relative;
    right: 38px;
    bottom: 15px;
  }

  li {
    margin-left: 0.2em;
    margin-right: 0.2em;
  }

  li a {
    font-size: 9pt;
  }
`;
