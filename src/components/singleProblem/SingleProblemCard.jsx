import React, { Component } from "react";
import { formatTimeString } from "../../utils/time";
import { capitalizeFirstLetter } from "../../utils/capitalize";
import { StyledHexButton } from "../../styled/lib";
import { UserContext } from "../../UserContext";
import { StyledEditProblemForm } from "../../styled/singleProblem";

class SingleProblemCard extends Component {
  static contextType = UserContext;

  render() {
    const { username } = this.context;
    const {
      problem,
      toggleEditForm,
      handleDeleteProblem,
      className,
      editProblemOptimistic,
      editFormVisible,
    } = this.props;

    const timeDifference = Date.now() - new Date(problem.created_at);
    const timeString = formatTimeString(timeDifference);
    const difficultyRef = ["Easy", "Medium", "Hard"];
    const solved = problem.solved === "true" ? "Solved" : "Unsolved";
    const difficulty = difficultyRef[problem.difficulty];

    return (
      <article className={className}>
        {username === problem.username && (
          <>
            <StyledHexButton as="button" onClick={toggleEditForm}>
              Edit
            </StyledHexButton>
            <StyledHexButton as="button" onClick={handleDeleteProblem}>
              Delete
            </StyledHexButton>
          </>
        )}

        <h2>{capitalizeFirstLetter(problem.title)}</h2>
        <p>
          <strong>{solved}</strong>
        </p>
        <p>
          Difficulty: {difficulty} | Tech: {problem.tech}{" "}
        </p>
        <p>{`Posted by: ${problem.username} ${timeString}`}</p>
        <p>{problem.body}</p>
        {editFormVisible && (
          <StyledEditProblemForm
            problem={problem}
            editProblemOptimistic={editProblemOptimistic}
          />
        )}
      </article>
    );
  }
}

export default SingleProblemCard;
