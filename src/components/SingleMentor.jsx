import React from "react";

class SingleMentor extends React.Component {
  state = {};

  render() {
    return (
      <div className="mentorDetails">
        <h3>User Name</h3>
        <img src="https://via.placeholder.com/100x100" alt="Profile Img" />

        <ul className="skillsList">
          <li>Skill</li>
          <li>Skill</li>
          <li>Skill</li>
        </ul>

        <p>Bio</p>
        <p>Place Bio Here</p>

        <p>Github Link:</p>
        <p>Insert Link Here</p>
      </div>
    );
  }
}

export default SingleMentor;
