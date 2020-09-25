import styled from "styled-components";

import MentorForm from "../components/becomeAMentor/MentorForm";

// <section>
export const StyledMentorForm = styled(MentorForm)`
  font-size: 0.5cm;
  width: auto;
  height: auto;
  background-color: grey;
  margin-bottom: 25px;
  border-radius: 8px;
  margin: 10%;
  text-align: center;
  padding: 1.4rem 0.05rem;
  margin-top: 50px;

  h2 {
    font-weight: bold;
    text-align: center;
    margin-top: 0px;
  }

  header {
    margin-top: 10px;
  }

  p {
    padding: 0 2rem;
    text-align: center;
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
    width: 100%;
    margin-bottom: 3rem;
  }

  button {
    margin: auto;
    margin-bottom: -4rem;
  }
`;
