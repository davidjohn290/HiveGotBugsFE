import React from "react";
import { StyledLink } from "../../styled/lib";
import { capitalizeFirstLetter } from "../../utils/capitalize";

function ProblemCard({ problem, className }) {
  const difficultyRef = ["Easy", "Medium", "Hard"];
  const solved = problem.solved ? "Solved" : "Unsolved";
  const difficulty = difficultyRef[problem.difficulty];

  return (
    <li className={className}>
      <article className="container">
        <span className="negative_hexagon"></span>
        <p>
          {solved} <br /> Difficulty: {difficulty} <br />
        </p>
        Tech: {problem.tech} <br />
        <StyledLink to={`/problem/${problem.problem_id}`}>
          <h2>{capitalizeFirstLetter(problem.title)}</h2>
        </StyledLink>
        {problem.body.slice(0, 100) + "... "}
        <br />
        <StyledLink to={`/problem/${problem.problem_id}`}>Read more</StyledLink>
      </article>
    </li>
  );
}

export default ProblemCard;
