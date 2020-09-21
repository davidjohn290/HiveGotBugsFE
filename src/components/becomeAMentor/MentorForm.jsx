import React, { Component } from "react";
// import "../css/mentorForm.css";

class MentorForm extends Component {
  state = {
    bio: "",
    skills: [],
    github: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  onInput = ({ target: { value, name } }) => {
    if (name === "skills") {
      const skill1 = value.split(",")[0];
      const skill2 = value.split(",")[1];
      const skill3 = value.split(",")[2];
      this.setState({ skills: [skill1, skill2, skill3] });
    } else {
      this.setState({ [name]: value });
    }
  };

  render() {
    return (
      <div className="mentorform">
        <header>
          <h2>Become a mentor</h2>
          <p>
            Congratulations! You have gathered enough bug points to become a
            mentor. Fill out your mentor profile below!
          </p>
        </header>
        <form className="form" onSubmit={this.onSubmit}>
          <label>Bio:</label>
          <textarea
            name="bio"
            cols="25"
            rows="8"
            placeholder="Write here..."
            onChange={this.onInput}
          ></textarea>
          <label>
            Skills:
            <input
              type="text"
              name="skills"
              placeholder="Write here..."
              onChange={this.onInput}
            />
          </label>
          <label>
            Github Username:
            <input
              type="text"
              name="github"
              placeholder="Write here..."
              onChange={this.onInput}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default MentorForm;
