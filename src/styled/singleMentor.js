import styled from "styled-components";
import SingleMentor from "../components/singleMentor/SingleMentor";

// <main>
export const StyledSingleMentor = styled(SingleMentor)`
  text-align: center;
  margin: auto;
  max-width: 100%;
  padding: 0.7em;
  margin-top: 0.4em;
  background-color: grey;
  font-family: monospace;
  font-size: 15pt;
  box-shadow: 10px 10px 5px 0px rgba(20, 20, 20, 0.6);
  width: 90%;

  li {
    list-style-type: none;
  }

  a {
    color: lightblue;
  }

  .nameSkillsContainer {
    display: flex;
    flex-direction: row;

    margin: auto;
    width: 15%;
    padding: 10px;
  }
`;
