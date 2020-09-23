import React, { Component } from "react";
import { StyledHexButton } from "../../styled/lib";
import {
  getUserByUsername,
  editUserProfileByUsername,
  getTech,
} from "../../utils/api";
class EditDashboard extends Component {
  state = {
    username: "Merlin70",
    description: "",
    github_url: "",
    skill1: "",
    skill2: "",
    skill3: "",
    tech: [],
    submitted: false,
    isLoading: true,
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
          isLoading: false,
        });
      }
    );
  }

  getAllTech = () => {
    getTech().then((tech) => this.setState({ tech }));
  };

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
      tech,
      isLoading,
    } = this.state;
    console.log(this.state);
    if (isLoading) return <p>Loading...</p>;
    return (
      <div>
        <form className={className} onSubmit={this.handleSubmit}>
          <label>
            Skill 1:
            <select
              id="skill1"
              onChange={this.handleInput}
              onClick={this.getAllTech}
            >
              <option value="skill1">{skill1}</option>
              {tech.map((item) => {
                return (
                  <option value={item.slug} key={item.slug}>
                    {item.slug}
                  </option>
                );
              })}
            </select>
          </label>

          <label>
            Skill 2:
            <select
              id="skill2"
              onChange={this.handleInput}
              onClick={this.getAllTech}
            >
              <option value="skill1">{skill2}</option>
              {tech.map((item) => {
                return (
                  <option value={item.slug} key={item.slug}>
                    {item.slug}
                  </option>
                );
              })}
            </select>
          </label>

          <label>
            Skill 3:
            <select
              id="skill3"
              onChange={this.handleInput}
              onClick={this.getAllTech}
            >
              <option value="skill1">{skill3}</option>
              {tech.map((item) => {
                return (
                  <option value={item.slug} key={item.slug}>
                    {item.slug}
                  </option>
                );
              })}
            </select>
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
              id="description"
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
