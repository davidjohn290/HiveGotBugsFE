import styled from "styled-components";
import SingleMentor from "../components/singleMentor/SingleMentor";

// <main>
export const StyledSingleMentor = styled(SingleMentor)`
  max-width: 100%;
  margin-top: 0.4em;
  background-color: grey;
  font-family: monospace;
  font-size: 15pt;
  box-shadow: 10px 10px 5px 0px rgba(20, 20, 20, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5%;
  padding-bottom: 5%;

  section {
    display: flex;
    justify-content: center;
  }
  h3 {
    text-align: center;
  }

  .headerAndBio {
    text-align: center;
  }
  p {
    text-align: center;
  }

  li {
    list-style-type: none;
  }

  a {
    color: lightblue;
    overflow-wrap: break-word;
    font-size: 9pt;
    margin: auto;
  }
`;
