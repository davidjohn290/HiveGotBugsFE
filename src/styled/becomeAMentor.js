import styled from "styled-components";

import MentorForm from "../components/becomeAMentor/MentorForm";

// <section>
export const StyledMentorForm = styled(MentorForm)`
  font-size: 0.5cm;
  border: black 1px solid;
  width: auto;
  height: auto;
  background-color: #272c35;
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
    width:50%;
    margin: auto;
    margin-bottom: 1rem;
    padding:2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: none;
    border-radius: .8rem;
  }

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    border-radius: .4rem;
    margin .8rem 0;
    // background-color: #626b7b;
  }
  input#github{
    color:white;

  }

  label {
    display-flex;
  }

  textarea {
    width:100%;
    margin-top: 1rem;
    border-radius: .4rem;
    // background-color: #626b7b;
  }

  button {
    padding: 1rem 2rem;
    margin: 1rem 0;
  }
`;
