import React from "react";
import { StyledLink } from "../../styled/lib";
import { capitalizeFirstLetter } from "../../utils/capitalize";
import { formatTimeString } from "../../utils/time";

function ProblemCard({ problem, className }) {
  const difficultyRef = ["Easy", "Medium", "Hard"];
  const solved = problem.solved ? "Solved" : "Unsolved";
  const difficulty = difficultyRef[problem.difficulty];
  const timeDifference = Date.now() - new Date(problem.created_at);
  const timeString = formatTimeString(timeDifference);

  return (
    <li className={className}>
      <article className="container">
        <span className="negative_hexagon"></span>
        <p className="header">
          {solved} <br /> Difficulty: {difficulty} <br />
          {`Posted by: ${problem.username} ${timeString}`}
          <br />
          Tech: {problem.tech}
        </p>
        <StyledLink to={`/problem/${problem.problem_id}`}>
          <h2>{capitalizeFirstLetter(problem.title)}</h2>
        </StyledLink>
        {problem.body.slice(0, 80) + "... "}
        <br />
        <StyledLink to={`/problem/${problem.problem_id}`}>Read more</StyledLink>
      </article>
    </li>
  );
}

export default ProblemCard;
