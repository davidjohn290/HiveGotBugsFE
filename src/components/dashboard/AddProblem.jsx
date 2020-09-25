import React, { Component } from "react";
import { UserContext } from "../../UserContext";
import * as api from "../../utils/api";
import {
  StyledLoader,
  StyledHexButton,
  StyledErrorPage,
} from "../../styled/lib";

class AddProblem extends Component {
  static contextType = UserContext;

  state = {
    username: this.context.username,
    isLoading: true,
    techList: [],
    tech: "",
    difficulty: "",
    title: "",
    body: "",
    submitted: false,
    err: null,
  };

  componentDidMount() {
    api
      .getTech()
      .then((tech) => this.setState({ techList: tech, isLoading: false }))
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: {
            type: "getTech",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { updateProblemList } = this.props;
    const { username, tech, difficulty, title, body } = this.state;
    this.setState({ submitted: true });
    updateProblemList(username, { tech, difficulty, title, body });
  };

  handleInput = ({ target: { value, id } }) => {
    this.setState({ [id]: value });
  };

  render() {
    const {
      isLoading,
      title,
      body,
      submitted,
      techList,
      tech,
      difficulty,
      err,
    } = this.state;
    const { className } = this.props;

    if (isLoading) return <StyledLoader />;
    if (err) return <StyledErrorPage {...err} />;
    return (
      <form className={className} onSubmit={this.handleSubmit}>
        <h3>Add a problem</h3>
        <label>
          Tech used:
          <select id="tech" onChange={this.handleInput} value={tech} required>
            <option value="" hidden>
              Pick tech used
            </option>
            {techList.map((tech) => {
              return (
                <option value={tech.slug} key={tech.slug}>
                  {tech.slug}
                </option>
              );
            })}
          </select>
        </label>

        <label>
          Difficulty:
          <select
            id="difficulty"
            onChange={this.handleInput}
            value={difficulty}
            required
          >
            <option value="" hidden>
              Pick a difficulty
            </option>
            <option value="0">Easy</option>
            <option value="1">Medium</option>
            <option value="2">Hard</option>
          </select>
        </label>

        <label>
          Title:
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleInput}
            required
            placeholder="Enter text here..."
          />
        </label>

        <label>
          Problem:
          <br />
          <textarea
            cols="30"
            rows="8"
            id="body"
            type="text"
            maxLength="280"
            value={body}
            onChange={this.handleInput}
            required
            placeholder="Enter text here..."
          />
        </label>

        <StyledHexButton as="button" type="submit">
          Submit
        </StyledHexButton>
        <br />
        {submitted && "Your Problem has been posted!"}
      </form>
    );
  }
}

export default AddProblem;
