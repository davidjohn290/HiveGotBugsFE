import styled from "styled-components";
import UserCard from "../components/dashboard/UserCard";
import BugChart from "../components/dashboard/BugChart";
import Dashboard from "../components/dashboard/Dashboard";

export const StyledUserCard = styled(UserCard)`
  h2 {
    text-align: center;
  }

  h4 {
    margin: 5px;
    margin-bottom: 5px;
  }

  img {
    margin-top: 1cm;
    max-width: 4cm;
    max-height: 4cm;
  }

  header {
    text-align: center;
  }
  button {
    display: flex;
    margin: auto;
  }
`;

export const StyledBugChart = styled(BugChart)`
  header {
    margin: 10%;
  }
  #bugPoints {
    font-family: monospace;
    font-size: 10pt;
    float: right;
  }
  #toggleChart {
    font-family: monospace;
    font-size: 10pt;
    float: left;
  }
`;

export const StyledDashboard = styled(Dashboard)`
  ul {
    display: flex;
    padding: 0;
    margin: auto;
    justify-content: center;
    flex-wrap: wrap;
  }
  li {
    margin: auto;
  }
`;
