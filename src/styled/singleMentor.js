import styled from "styled-components";
import SingleMentor from "../components/singleMentor/SingleMentor";

// <main>
export const StyledSingleMentor = styled(SingleMentor)`
  max-width: 100%;
  background-color: grey;
  font-family: monospace;
  font-size: 15pt;
  box-shadow: 10px 10px 5px 0px rgba(20, 20, 20, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5%;
  margin-top: 10%;
  padding: 5%;
  padding-bottom: 5%;

  --notchSize: 30px;
  clip-path: polygon(
    0% var(--notchSize),
    var(--notchSize) 0%,
    calc(100% - var(--notchSize)) 0%,
    100% var(--notchSize),
    100% calc(100% - var(--notchSize)),
    calc(100% - var(--notchSize)) 100%,
    var(--notchSize) 100%,
    0% calc(100% - var(--notchSize))
  );

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
    font-size: 11pt;
    font-weight: bold;
    margin: auto;
  }
`;
