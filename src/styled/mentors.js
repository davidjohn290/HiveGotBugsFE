import styled from "styled-components";

import MentorList from "../components/mentors/MentorList";

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
    border:2px solid rgb(0,124,146);
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

  /* .mentor-img {
    margin: -70px;
    border: 2px solid rgb(0, 124, 146);
    border-radius: 50%;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgb(0, 124, 146);
      
  } */

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

  .hexagon {
  
  position: relative;
  width: 120px; 
  height: 69.28px;
  margin: 34.64px 0;
  background-image: url(${(props) => props.url});
  background-size: auto 138.5641px;
  background-position: center;
  margin: -50px;

}

.hexTop,
.hexBottom {
  position: absolute;
  z-index: 1;
  width: 84.85px;
  height: 84.85px;
  overflow: hidden;
  -webkit-transform: scaleY(0.5774) rotate(-45deg);
  -ms-transform: scaleY(0.5774) rotate(-45deg);
  transform: scaleY(0.5774) rotate(-45deg);
  background: inherit;
  left: 17.57px;
  
}

/*counter transform the bg image on the caps*/
.hexTop:after,
.hexBottom:after {
  content: "";
  position: absolute;
  width: 120.0000px;
  height: 69.2820323027551px;
  -webkit-transform:  rotate(45deg) scaleY(1.7321) translateY(-34.6410px);
  -ms-transform:      rotate(45deg) scaleY(1.7321) translateY(-34.6410px);
  transform:          rotate(45deg) scaleY(1.7321) translateY(-34.6410px);
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  background: inherit;
}

.hexTop {
  top: -42.4264px;
}

.hexTop:after {
  background-position: center top;
}

.hexBottom {
  bottom: -42.4264px;
}

.hexBottom:after {
  background-position: center bottom;
}

.hexagon:after {
  content: "";
  position: absolute;
  top: 0.0000px;
  left: 0;
  width: 120.0000px;
  height: 69.2820px;
  z-index: 2;
  background: inherit;
}

  
`;
