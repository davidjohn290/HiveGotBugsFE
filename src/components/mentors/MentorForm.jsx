import React, { Component } from "react";
import { makeUserAMentor } from "../../utils/api";
import { UserContext } from "../../UserContext";

class MentorForm extends Component {
  static contextType = UserContext;
  state = {
    bio: "",
    skills: [],
    github: "",
    username: "",
    submitted: false,
  };

  componentDidMount() {
    this.setState({ username: this.context.user });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { bio, skills, github, username } = this.state;
    if (bio !== "" && skills.length !== 0 && github !== "") {
      makeUserAMentor(username, { bio, skills, github });
      this.setState({ submitted: true, bio: "", skills: [], github: "" });
    }
  };

  onInput = ({ target: { value, name } }) => {
    if (name === "skills") {
      const skill1 = value.split(",")[0];
      const skill2 = value.split(",")[1];
      const skill3 = value.split(",")[2];
      this.setState({ skills: [skill1, skill2, skill3] });
    } else {
      const onlyUsername = /(.com|www.)/.test(value);
      if (!onlyUsername) {
        this.setState({ [name]: value });
      }
    }
  };

  render() {
    const { className } = this.props;
    const { submitted } = this.state;
    return (
      <section className={className}>
        <header>
          <h2>Become a mentor</h2>
          <p>
            Congratulations! You have gathered enough bug points to become a
            mentor. Fill out your mentor profile below!
          </p>
        </header>
        {!submitted ? (
          <form className="form" onSubmit={this.onSubmit}>
            <label>Bio:</label>
            <textarea
              name="bio"
              cols="25"
              rows="8"
              placeholder="Write here..."
              required
              onChange={this.onInput}
            ></textarea>
            <label>
              Skills:
              <input
                type="text"
                name="skills"
                placeholder="Split with commas e.g Java, React"
                required
                onChange={this.onInput}
              />
            </label>
            <label>
              Github Username:
              <input
                type="text"
                name="github"
                placeholder="Write here..."
                required
                onChange={this.onInput}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <p>Your request has been submitted!</p>
        )}
      </section>
    );
  }
}

export default MentorForm;
