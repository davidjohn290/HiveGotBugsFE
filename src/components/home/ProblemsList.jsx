import React from "react";
import { StyledProblemCard } from "../../styled/home";

const ProblemsList = ({ problems, className }) => {
  return (
    <ul className={className}>
      {problems.map((problem) => {
        return <StyledProblemCard key={problem.problem_id} problem={problem} />;
      })}
    </ul>
  );
};

export default ProblemsList;
