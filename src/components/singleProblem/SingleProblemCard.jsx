// Get access to context`
// Get the single problem from api here rather than in parent compoent
// Add this.showEditProblem function(but don't write functionality yet)
// Add Delete Problem button and handleDeleteProblem function
// Add a form component to edit the problem

import React, { Component } from "react";
import { formatTimeString } from "../../utils/time";
import { capitalizeFirstLetter } from "../../utils/capitalize";
import { StyledHexButton } from "../../styled/lib";
import { UserContext } from "../../UserContext";

class SingleProblemCard extends Component {
  static contextType = UserContext;

  render() {
    const { username } = this.context;
    const { problem } = this.props;

    const timeDifference = Date.now() - new Date(problem.created_at);
    const timeString = formatTimeString(timeDifference);
    const difficultyRef = ["Easy", "Medium", "Hard"];
    const solved = problem.solved ? "Solved" : "Unsolved";
    const difficulty = difficultyRef[problem.difficulty];

    return (
      <article>
        {username === problem.username && (
          <StyledHexButton as="button" onClick={this.showEditProblem}>
            Edit Problem
          </StyledHexButton>
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
