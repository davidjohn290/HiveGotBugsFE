import React from "react";
import { StyledDifficultyButton } from "../../styled/lib";

const FilterProblemsDifficulty = ({
  handleDifficultyChange,
  selectedDifficulty,
  className,
}) => {
  return (
    <section className={className}>
      <p>Filter by difficulty: </p>
      <StyledDifficultyButton
        value="easy"
        difficulty="easy"
        selected={selectedDifficulty === "easy"}
        onClick={handleDifficultyChange}
      >
        Easy
      </StyledDifficultyButton>
      <StyledDifficultyButton
        value="medium"
        difficulty="medium"
        selected={selectedDifficulty === "medium"}
        onClick={handleDifficultyChange}
      >
        Medium
      </StyledDifficultyButton>
      <StyledDifficultyButton
        value="hard"
        difficulty="hard"
        selected={selectedDifficulty === "hard"}
        onClick={handleDifficultyChange}
      >
        Hard
      </StyledDifficultyButton>
    </section>
  );
};

export default FilterProblemsDifficulty;
