import styled from "styled-components";

import MentorList from "../components/mentors/MentorList";

// <main>
export const StyledMentorList = styled(MentorList)`
  font-family: monospace;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  grid-gap: 2rem;
  margin: 3rem auto;
  box-sizing: border-box;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

  .mentorCards {
    width: 260px;
    background: grey;
    border: 2px solid rgb(0, 124, 146);
    box-shadow: 0 4px 6px -1px rgba(15, 15, 15, 0.219),
      0 2px 4px -1px rgba(15, 15, 15, 0.219);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    place-items: center;
    padding: 0.5rem 1rem;
    margin: 50px 0 1rem 0;
    color: white;
  }

  .mentor-bio {
    display: block;
    margin-top: -5rem;
    text-align: center;
  }

  .mentor-bio h1 {
    font-weight: 700;
    font-size: 20px;
  }

  h1 a {
    text-decoration: none;
    color: white;
  }

  .mentor-bio p {
    font-weight: 200;
  }

  .mentor-skills {
    display: flex;
  }

  .mentor-skills h5 {
    margin-right: 1rem;
    margin-top: 5px;
    padding: 0.2rem;
    border-radius: 45%;
    font-weight: bold;
  }

  .mentor-stats {
    display: flex;
    justify-content: space-evenly;
    padding: 0 2rem;
  }

  .mentor-stats p {
    text-align: center;
    margin: auto;
  }

  label {
    font-weight: 700;
    text-align: center;
  }
`;
