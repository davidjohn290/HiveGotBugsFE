import React, { Component } from "react";
import * as api from "../../utils/api";
import { StyledHexButton } from "../../styled/lib";
import { StyledErrorPage } from "../../styled/lib";
import { UserContext } from "../../UserContext";

class AddSuggestionForm extends Component {
  state = {
    body: "",
  };

  static contextType = UserContext;

  handleSubmit = (submitEvent) => {
    const { renderNewSuggestion, problem_id } = this.props;
    const { body } = this.state;
    const { username } = this.context;

    submitEvent.preventDefault();
    if (body) {
      api
        .addSuggestion(problem_id, username, body)
        .then((newSuggestion) => {
          renderNewSuggestion(newSuggestion);
        })
        .catch(({ response }) => {
          this.setState({
            isLoading: false,
            err: {
              type: "addSuggestion",
              msg: response.data.msg,
              status: response.status,
            },
          });
        });
      this.setState({ body: "" });
    }
  };

  handleChangeBody = ({ target: { value } }) => {
    this.setState({ body: value });
  };

  render() {
    const { className } = this.props;
    const { body, err } = this.state;

    if (err) return <StyledErrorPage {...err} />;

    return (
      <form className={className} onSubmit={this.handleSubmit}>
        <label htmlFor="body">Suggestion: </label>
        <textarea
          id="body"
          type="text"
          maxLength="280"
          placeholder=""
          value={body}
          onChange={this.handleChangeBody}
        />
        <StyledHexButton as="button" type="submit">
          Submit
        </StyledHexButton>
      </form>
    );
  }
}

export default AddSuggestionForm;
