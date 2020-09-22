import React, { Component } from "react";
import * as api from "../../utils/api";
import { StyledHexButton } from "../../styled/lib";
import { StyledErrorPage } from "../../styled/lib";

class EditSuggestionForm extends Component {
  state = {
    body: "",
  };

  componentDidMount() {
    const {
      suggestion: { body },
    } = this.props;
    this.setState({ body });
  }

  handleSubmit = (submitEvent) => {
    const { toggleEditForm, editSuggestionOptimistic } = this.props;

    submitEvent.preventDefault();

    const {
      suggestion: { suggestion_id },
    } = this.props;
    const { body } = this.state;

    if (body) {
      api.editSuggestion(suggestion_id, { body }).catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: {
            type: "editSuggestion",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
      editSuggestionOptimistic(suggestion_id, body);
      toggleEditForm();
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

export default EditSuggestionForm;
