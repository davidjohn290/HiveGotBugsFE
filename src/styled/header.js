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
  font-family: monospace;
  font-size: 15pt;
  box-shadow: 10px 10px 5px 0px rgba(20, 20, 20, 0.6);
`;

// <ul>
export const StyledMainNav = styled(MainNav)`
  display: flex;
  justify-content: space-between;
  padding: 0.5em;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    padding: 0px;
    margin: 0px;
  }
  ul li {
    margin-left: 0.3em;
    margin-right: 0.3em;
  }
`;

// <ul>
export const StyledMenuNav = styled(MenuNav)`
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding: 0;
  font-family: monospace;

  li {
    margin: 0.3em;
  }
`;
