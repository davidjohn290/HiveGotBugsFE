import styled from "styled-components";

import MentorList from "../components/mentors/MentorList2";

// <main>
export const StyledMentorList = styled(MentorList)`
  font-family: monospace;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
  grid-gap: 2rem;
  margin: 0 auto;
  margin-top:5%;
  box-sizing: border-box;
  font-size: 15px;
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-evenly;

  .mentorCards {
    width: 260px;
    background: grey;
    box-shadow: 0 4px 6px -1px rgba(15, 15, 15, 0.219),
      0 2px 4px -1px rgba(15, 15, 15, 0.219);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    place-items: center;
    padding: 0.5rem 1rem;
    margin: 4rem 0 0 0;
    color: white;

   
}
  }

  .mentor-img {
    margin: -70px;
    border: 2px solid rgb(0, 124, 146);
    border-radius: 50%;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgb(0, 124, 146);
      
  }

  .mentor-bio {
    display: block;
    margin-top: 4rem;
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
    text-align: center;
    margin: auto;
  }

  label {
    font-weight: 700;
    text-align: center;
  }
`;
