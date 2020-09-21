// If my username matches that of the suggestion: render edit button and delete button

// If my username matches that of the PROBLEM - render mark as having solved buttton

import React, { Component } from "react";
import { formatTimeString } from "../../utils/time";
import { UserContext } from "../../UserContext";
import { StyledHexButton } from "../../styled/lib";
import { StyledEditSuggestionForm } from "../../styled/singleProblem";

class SuggestionCard extends Component {
  state = { editFormVisible: false };

  static contextType = UserContext;

  toggleEditForm = () => {
    this.setState(({ editFormVisible }) => {
      return { editFormVisible: !editFormVisible };
    });
  };

  render() {
    const { username } = this.context;
    const {
      suggestion,
      problem,
      className,
      deleteSuggestionOptimistic,
      solveOptimistic,
      editSuggestionOptimistic,
    } = this.props;
    const { editFormVisible } = this.state;

    const timeDifference = Date.now() - new Date(suggestion.created_at);
    const timeString = formatTimeString(timeDifference);

    return (
      <>
        <li className={className}>
          {username === suggestion.username && (
            <>
              <StyledHexButton as="button" onClick={this.toggleEditForm}>
                Edit
              </StyledHexButton>
              <StyledHexButton as="button" onClick={deleteSuggestionOptimistic}>
                Delete
              </StyledHexButton>
            </>
          )}
          {username === problem.username && (
            <StyledHexButton as="button" onClick={solveOptimistic}>
              Solved my problem?
            </StyledHexButton>
          )}
          <p>{`Suggested by: ${suggestion.username} ${timeString}`}</p>
          <p>{suggestion.body}</p>
          {suggestion.approved_by && <p>{suggestion.approved_by}</p>}
          {editFormVisible && (
            <StyledEditSuggestionForm
              editSuggestionOptimistic={editSuggestionOptimistic}
            />
          )}
        </li>
      </>
    );
  }
}

export default SuggestionCard;
