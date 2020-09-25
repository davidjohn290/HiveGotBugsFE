import React, { Component } from "react";
import { formatTimeString } from "../../utils/time";
import { capitalizeFirstLetter } from "../../utils/capitalize";
import { SmallStyledHexButton } from "../../styled/lib";
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
    const isOwnProblem = username === problem.username;

    return (
      <article className={className}>
        <header>
          <div className={isOwnProblem ? "textLeft" : "textCenter"}>
            <p>{`Posted by: ${problem.username} ${timeString}`}</p>
            <p>
              Difficulty: {difficulty} | Tech: {problem.tech} |{" "}
              <strong>{solved}</strong>
            </p>
          </div>
          {username === problem.username && (
            <div className="buttons">
              <SmallStyledHexButton
                as="button"
                onClick={toggleEditForm}
                backgroundColor="rgb(0, 124, 146)"
              >
                Edit
              </SmallStyledHexButton>
              <SmallStyledHexButton
                as="button"
                onClick={handleDeleteProblem}
                backgroundColor="#ed6270"
              >
                Delete
              </SmallStyledHexButton>
            </div>
          )}
        </header>

        <h2>{capitalizeFirstLetter(problem.title)}</h2>
        <p>{problem.body}</p>
        {editFormVisible && (
          <StyledEditProblemForm
            problem={problem}
            editProblemOptimistic={editProblemOptimistic}
            toggleEditForm={toggleEditForm}
          />
        )}
      </article>
    );
  }
}

export default SingleProblemCard;
