import React from "react";
import { StyledProblemCard } from "../../styled/home";

const ProblemsList = ({ problems, className }) => {
  return (
    <ul className={className}>
      {problems.length === 0 ? (
        <p>No problems found</p>
      ) : (
        problems.map((problem) => {
          return (
            <StyledProblemCard
              key={problem.problem_id}
              problem={problem}
              difficulty={problem.difficulty}
            />
          );
        })
      )}
    </ul>
  );
};

export default ProblemsList;
