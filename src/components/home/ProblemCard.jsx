import React from "react";
import { StyledLink } from "../../styled/lib";
import { formatTimeString } from "../../utils/time";
import { capitalizeFirstLetter } from "../../utils/capitalize";

function ProblemCard({ problem, className }) {
  const timeDifference = Date.now() - new Date(problem.created_at);
  const timeString = formatTimeString(timeDifference);
  const difficultyRef = ["Easy", "Medium", "Hard"];
  const solved = problem.solved ? "Solved" : "Unsolved";
  const difficulty = difficultyRef[problem.difficulty];

  return (
    <React.Fragment>
      <li className={className}>
        <article>
          <p className={"content"}>
            <span className="negative_hexagon"></span>
            {solved} <br /> Difficulty: {difficulty} <br />
            Tech: {problem.tech} <br />
            {`Posted by: ${problem.username} ${timeString}`}
            <StyledLink to={`/problem/${problem.problem_id}`}>
              <h2>{capitalizeFirstLetter(problem.title)}</h2>
            </StyledLink>
            {problem.body.slice(0, 100) + "... "}
            <br />
            <StyledLink to={`/problem/${problem.problem_id}`}>
              Read more
            </StyledLink>
          </p>
        </article>
      </li>
    </React.Fragment>
  );
}

export default ProblemCard;
