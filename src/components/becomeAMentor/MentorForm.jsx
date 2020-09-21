import React, { Component } from "react";
//import "/Users/davidspc/Desktop/Northcoders_new/Project/hive-got-bugs-fe/src/css/mentorForm.css";

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
    const { className } = this.props;
    return (
      <section className={className}>
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
              placeholder="Split with commas e.g Java, React"
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
      </section>
    );
  }
}

export default MentorForm;
