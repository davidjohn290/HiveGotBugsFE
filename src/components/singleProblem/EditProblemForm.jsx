import React, { Component } from "react";
import * as api from "../../utils/api";
import { UserContext } from "../../UserContext";
import { SmallStyledHexButton, StyledErrorPage } from "../../styled/lib";

class EditProblemForm extends Component {
  state = {
    techList: [],
    difficulty: "",
    tech: "",
    title: "",
    body: "",
    err: null,
  };
  static contextType = UserContext;

  componentDidMount() {
    const { problem } = this.props;
    const { difficulty, tech, title, body } = problem;
    this.fetchTech();
    this.setState({ difficulty, tech, title, body });
  }

  fetchTech() {
    api
      .getTech()
      .then((techList) => {
        this.setState({ techList });
      })
      .catch(({ response }) => {
        console.log(response);
      });
  }

  handleChangeDifficulty = (event) => {
    const { value } = event.target;
    if (value === "easy") this.setState({ difficulty: 0 });
    if (value === "medium") this.setState({ difficulty: 1 });
    if (value === "hard") this.setState({ difficulty: 2 });
  };

  handleChangeTech = ({ target: { value } }) => {
    this.setState({ tech: value });
  };

  handleChangeTitle = ({ target: { value } }) => {
    this.setState({ title: value });
  };

  handleChangeBody = ({ target: { value } }) => {
    this.setState({ body: value });
  };

  handleSubmit = (submitEvent) => {
    const { difficulty, tech, title, body } = this.state;
    const { editProblemOptimistic, toggleEditForm, problem } = this.props;

    const editedProblem = { difficulty, tech, title, body };
    submitEvent.preventDefault();

    if (difficulty !== undefined && tech && title && body) {
      api
        .patchProblem(problem.problem_id, editedProblem)
        .catch(({ response }) => {
          this.setState({
            err: {
              type: "addProblem",
              msg: response.data.msg,
              status: response.status,
            },
          });
        });

      toggleEditForm();
      editProblemOptimistic(editedProblem);
    }
  };

  render() {
    const { techList, difficulty, tech, title, body, err } = this.state;
    const { className } = this.props;
    const difficultyRef = ["easy", "medium", "hard"];

    if (err) return <StyledErrorPage {...err} />;

    return (
      <form className={className} onSubmit={this.handleSubmit}>
        <label htmlFor="difficulty">
          Difficulty:
          <select
            className="formElement"
            name="difficulty"
            id="difficulty"
            value={difficultyRef[difficulty]}
            onChange={this.handleChangeDifficulty}
          >
            <option key="easy" value="easy">
              Easy
            </option>
            <option key="medium" value="medium">
              Medium
            </option>
            <option key="hard" value="hard">
              Hard
            </option>
          </select>
        </label>
        <label htmlFor="tech">
          Tech:
          <select
            className="formElement"
            name="tech"
            id="tech"
            value={tech}
            onChange={this.handleChangeTech}
          >
            {techList.map((tech) => {
              return (
                <option key={tech.slug} value={tech.slug}>
                  {tech.slug}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="title">
          Title:
          <input
            className="formElement"
            type="text"
            id="title"
            value={title}
            onChange={this.handleChangeTitle}
          />
        </label>
        <label htmlFor="body">
          Body:{" "}
          <textarea
            className="formElement"
            id="body"
            type="text"
            maxLength="280"
            placeholder=""
            value={body}
            onChange={this.handleChangeBody}
          />
        </label>
        <SmallStyledHexButton
          as="button"
          type="submit"
          backgroundColor="rgb(0, 124, 146)"
        >
          Submit
        </SmallStyledHexButton>
      </form>
    );
  }
}

export default EditProblemForm;
