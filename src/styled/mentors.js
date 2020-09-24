import styled from "styled-components";

import MentorList from "../components/mentors/MentorList";

// <main>
export const StyledMentorList = styled(MentorList)`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  grid-gap: 2rem;
  margin: 0 auto;
  padding: 5rem;
  box-sizing: border-box;

  .mentorCards {
    width: 260px;
    background: rgb(255, 255, 255);
    box-shadow: 0 4px 6px -1px rgba(15, 15, 15, 0.219),
      0 2px 4px -1px rgba(15, 15, 15, 0.219);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    place-items: center;
    padding: 0.5rem 1rem;
    margin: 4rem 0 0 0;
    color: rgb(59, 58, 58);
  }

  .mentor-img {
    margin: -70px;
    border: 2px solid white;
    border-radius: 50%;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .mentor-bio {
    display: block;
    margin-top: 4rem;
    text-align: center;
  }

  .mentor-bio h1 {
    font-weight: 700;
  }

  h1 a {
    text-decoration: none;
    color: #1c7c92;
  }

  .mentor-bio p {
    font-weight: 200;
  }

  .mentor-skills {
    display: flex;
  }

  .mentor-skills h5 {
    margin-right: 1rem;
    /* background: rgb(156, 214, 214); */
    padding: 0.2rem;
    border-radius: 45%;
    /* color: #ffffff; */
    font-weight: bold;
  }

  .mentor-stats {
    display: flex;
    justify-content: space-evenly;
    padding: 0 2rem;
  }

  .mentor-stats p {
    margin-right: 2rem;
  }
`;
