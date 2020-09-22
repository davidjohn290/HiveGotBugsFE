import styled from "styled-components";
import UserCard from "../components/dashboard/UserCard";
import BugChart from "../components/dashboard/BugChart";
import Dashboard from "../components/dashboard/Dashboard";
import EditDashboard from "../components/dashboard/EditDashboard";

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
  .dashboardButtons {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  #solvedButton {
    margin: 5%;
    margin-bottom: 1.5cm;
  }
  #editButton {
    margin: 5%;
    margin-bottom: 0;
  }

  h2 {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 1cm;
    text-decoration: underline;
  }
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

export const StyledEditDashboard = styled(EditDashboard)`
  font-size: 0.5cm;
  border: black 1px solid;
  width: auto;
  height: auto;
  background-color: grey;
  padding: 30px;
  margin-bottom: 25px;
  border-radius: 8px;
  margin: auto;
  text-align: center;
  h2 {
    font-weight: bold;
    text-align: center;
    margin-top: 0;
  }

  header {
    padding-bottom: 1cm;
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
  }

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
  }

  textarea {
    margin-bottom: 16px;
  }

  button {
    margin: auto;
    margin-top: 10px;
  }
`;
