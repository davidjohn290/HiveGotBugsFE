import styled from "styled-components";
import MentorForm from "../components/Mentor/MentorForm";

export const StyledMentorForm = styled(MentorForm)`
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
`;
