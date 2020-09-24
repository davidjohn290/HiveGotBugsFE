import React, { Component } from "react";
import { formatTimeString } from "../../utils/time";
import { UserContext } from "../../UserContext";
import { StyledHexButton } from "../../styled/lib";
import { StyledEditSuggestionForm } from "../../styled/singleProblem";
import * as api from "../../utils/api";
import ErrorPage from "../ErrorPage";

class SuggestionCard extends Component {
  state = { editFormVisible: false, err: null };

  static contextType = UserContext;

  toggleEditForm = () => {
    this.setState(({ editFormVisible }) => {
      return { editFormVisible: !editFormVisible };
    });
  };

  handleSolve = () => {
    const { suggestion } = this.props;
    const {
      problem,
      suggestionSolvedOptimistic,
      problemSolvedOptimistic,
    } = this.props;
    const { username } = this.context;

    api
      .incrementBugPoints(suggestion.username)
      .then(() => {
        api.editSuggestion(suggestion.suggestion_id, { approved_by: username });
      })
      .then(() => {
        api.patchProblem(problem.problem_id, { ...problem, solved: "true" });
      })
      .catch(({ response }) => {
        this.setState({
          err: {
            type: "markSolved",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
    suggestionSolvedOptimistic(suggestion.suggestion_id, username);
    problemSolvedOptimistic();
  };

  render() {
    const { username } = this.context;
    const {
      suggestion,
      problem,
      className,
      deleteSuggestionOptimistic,
      editSuggestionOptimistic,
    } = this.props;

    const { editFormVisible, err } = this.state;

    const timeDifference = Date.now() - new Date(suggestion.created_at);
    const timeString = formatTimeString(timeDifference);

    const canShowSolveButton =
      username === problem.username &&
      username !== suggestion.username &&
      problem.solved === "false";

    if (err) return <ErrorPage {...err} />;

    return (
      <li className={className}>
        {username === suggestion.username && (
          <>
            <StyledHexButton as="button" onClick={this.toggleEditForm}>
              Edit
            </StyledHexButton>
            <StyledHexButton
              as="button"
              onClick={() => {
                deleteSuggestionOptimistic(suggestion.suggestion_id);
              }}
            >
              Delete
            </StyledHexButton>
          </>
        )}
        {canShowSolveButton && (
          <StyledHexButton as="button" onClick={this.handleSolve}>
            Solved my problem?
          </StyledHexButton>
        )}
        <p>{`Suggested by: ${suggestion.username} ${timeString}`}</p>
        <p>{suggestion.body}</p>
        {suggestion.approved_by && (
          <p>
            <strong>This suggestion solved the problem!</strong>
          </p>
        )}
        {editFormVisible && (
          <StyledEditSuggestionForm
            suggestion={suggestion}
            editSuggestionOptimistic={editSuggestionOptimistic}
            toggleEditForm={this.toggleEditForm}
          />
        )}
      </li>
    );
  }
}

export default SuggestionCard;
