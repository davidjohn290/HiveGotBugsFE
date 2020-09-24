import styled from "styled-components";
import UserCard from "../components/dashboard/UserCard";
import BugChart from "../components/dashboard/BugChart";
import Dashboard from "../components/dashboard/Dashboard";
import EditDashboard from "../components/dashboard/EditDashboard";
import AddProblem from "../components/dashboard/AddProblem";

// <article>
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
    margin-bottom: 0.5cm;
  }

  header {
    text-align: center;
  }
  button {
    display: flex;
    margin: auto;
  }
`;

// <section>
export const StyledBugChart = styled(BugChart)`
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10%;
  }
  #bugPoints {
    font-family: monospace;
    font-size: 10pt;
  }
  #toggleChart {
    font-family: monospace;
    font-size: 10pt;
  }
  /* {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    max-height: 5cm;
    max-width: 5cm;
    text-decoration: none;
    margin: auto;
  } */
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: auto;
  }

  li {
    list-style: none;
    margin: 0em;
  }
`;
//<main>
export const StyledDashboard = styled(Dashboard)`
  .dashboardButtons {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
  }

  /* #editButton {
    margin: 10%;
    margin-bottom: 5cm;
  } */

  #solvedButton {
    margin: 10%;
    margin-bottom: 2cm;
  }

  #addButton {
    margin: 10%;
    margin-bottom: 2cm;
  }

  #editButton {
    margin: 10%;
    margin-bottom: 2cm;
  }

  h2 {
    text-align: center;
    margin: auto;
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
// <form>
export const StyledEditDashboard = styled(EditDashboard)`
  font-size: 0.5cm;
  width: auto;
  height: auto;
  background-color: grey;
  margin-bottom: 25px;
  border-radius: 8px;
  margin: 10%;
  text-align: center;

  h2 {
    font-weight: bold;
    text-align: center;
    margin-top: 0px;
  }

  header {
    margin-top: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
  }

  label {
    vertical-align: middle;
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
  select {
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

// <form>
export const StyledAddProblem = styled(AddProblem)`
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
  label {
    text-align: left;
  }

  label {
    vertical-align: middle;
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
  select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
  }

  textarea {
    vertical-align: top;
    margin-bottom: 16px;
  }

  button {
    margin: auto;
    margin-top: 10px;
  }
`;
