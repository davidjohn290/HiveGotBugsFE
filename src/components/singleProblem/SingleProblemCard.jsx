import React, { Component } from "react";
import { formatTimeString } from "../../utils/time";
import { capitalizeFirstLetter } from "../../utils/capitalize";
import { StyledHexButton } from "../../styled/lib";
import { UserContext } from "../../UserContext";

class SingleProblemCard extends Component {
  static contextType = UserContext;

  render() {
    const { username } = this.context;
    const {
      problem,
      toggleEditForm,
      handleDeleteProblem,
      className,
    } = this.props;

    const timeDifference = Date.now() - new Date(problem.created_at);
    const timeString = formatTimeString(timeDifference);
    const difficultyRef = ["Easy", "Medium", "Hard"];
    const solved = problem.solved ? "Solved" : "Unsolved";
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

        <p>{solved}</p>
        <p>Difficulty: {difficulty} </p>
        <p>Tech: {problem.tech} </p>
        <p>{`Posted by: ${problem.username} ${timeString}`}</p>
        <h2>{capitalizeFirstLetter(problem.title)}</h2>
        <p>{problem.body}</p>
      </article>
    );
  }
}

export default SingleProblemCard;
