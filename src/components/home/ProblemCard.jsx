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
    <li className={className}>
      <p>
        <span className="negative_hexagon"></span>
        {`${solved} ${difficulty} Tech: ${problem.tech} | Posted by: ${
          problem.username
        } ${timeString} ${problem.title} ${problem.body.slice(0, 100)}...`}
      </p>
      {/* <img src={hexagonRotated} alt="Hexagon background" />
      <article>
        <p
          className={"header"}
        >{` ${solved} | ${difficulty} | Tech: ${problem.tech}`}</p>
        <p
          className={"header"}
        >{`Posted by: ${problem.username} ${timeString}`}</p>
        <StyledLink to={`/problem/${problem.problem_id}`}>
          <h2>{capitalizeFirstLetter(problem.title)}</h2>
        </StyledLink>

        {problem.body.length > 100 ? (
          <p className={"body"}>
            {problem.body.slice(0, 100) + "... "}

            <StyledLink to={`/problem/${problem.problem_id}`}>
              Read more
            </StyledLink>
          </p>
        ) : (
          problem.body
        )}
      </article> */}
    </li>
  );
}

export default ProblemCard;
