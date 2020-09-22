import React, { Component } from "react";
import { StyledHexButton } from "../../styled/lib";
import { getUserByUsername, editUserProfileByUsername } from "../../utils/api";
class EditDashboard extends Component {
  state = {
    username: this.props.username,
    description: "",
    github_url: "",
    skill1: "",
    skill2: "",
    skill3: "",
    submitted: false,
  };

  componentDidMount() {
    const { username } = this.state;
    getUserByUsername(username).then(
      ({ description, github_url, skill1, skill2, skill3 }) => {
        this.setState({
          description,
          github_url,
          skill1,
          skill2,
          skill3,
        });
      }
    );
  }

  handleSubmit = (e) => {
    const {
      username,
      description,
      github_url,
      skill1,
      skill2,
      skill3,
    } = this.state;
    e.preventDefault();
    editUserProfileByUsername(username, {
      description,
      github_url,
      skill1,
      skill2,
      skill3,
    });
    this.setState({ submitted: true });
  };

  handleInput = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  };

  render() {
    const { className } = this.props;
    const {
      description,
      github_url,
      skill1,
      skill2,
      skill3,
      submitted,
    } = this.state;
    return (
      <div>
        <form className={className} onSubmit={this.handleSubmit}>
          <label>
            Skill 1:
            <input
              type="text"
              id="skill1"
              value={skill1}
              onChange={this.handleInput}
            />
          </label>

          <label>
            Skill 2:
            <input
              type="text"
              id="skill2"
              value={skill2}
              onChange={this.handleInput}
            />
          </label>

          <label>
            Skill 3:
            <input
              type="text"
              id="skill3"
              value={skill3}
              onChange={this.handleInput}
            />
          </label>

          <label>
            Github username:
            <input
              type="text"
              id="github_url"
              value={github_url}
              onChange={this.handleInput}
            />
          </label>

          <label>
            Bio:
            <textarea
              cols="30"
              rows="8"
              id="descriptiom"
              type="text"
              maxLength="280"
              value={description}
              onChange={this.handleInput}
            />
          </label>

          <StyledHexButton as="button" type="submit">
            Submit
          </StyledHexButton>

          {submitted && "Your details have been changed"}
        </form>
      </div>
    );
  }
}

export default EditDashboard;
