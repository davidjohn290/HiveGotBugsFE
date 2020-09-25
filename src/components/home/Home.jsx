import React, { Component } from "react";
import * as api from "../../utils/api";
import RemoveFilters from "./removeFilters";
import { StyledLoader, StyledErrorPage } from "../../styled/lib";
import {
  StyledSortProblems,
  StyledFilterProblemsTech,
  StyledFilterProblemsDifficulty,
  StyledProblemsList,
} from "../../styled/home";

class Home extends Component {
  state = {
    problems: [],
    selectedSort: "newest",
    selectedTech: "",
    selectedDifficulty: "",
    isLoading: true,
    err: null,
    removeFilter: false,
  };

  componentDidMount() {
    const { selectedSort } = this.state;
    const isSolved = false;
    this.fetchProblems(selectedSort, isSolved);
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedSort, selectedDifficulty, selectedTech } = this.state;
    const isSolved = false;
    if (prevState.selectedSort !== selectedSort) {
      this.fetchProblems(
        selectedSort,
        isSolved,
        selectedDifficulty,
        selectedTech
      );
    }
    if (prevState.selectedDifficulty !== selectedDifficulty) {
      this.fetchProblems(
        selectedSort,
        isSolved,
        selectedDifficulty,
        selectedTech
      );
    }
    if (prevState.selectedTech !== selectedTech) {
      this.fetchProblems(
        selectedSort,
        isSolved,
        selectedDifficulty,
        selectedTech
      );
    }
  }

  fetchProblems(selectedSort, isSolved, selectedDifficulty, selectedTech) {
    this.setState({ isLoading: true });
    api
      .getProblems(selectedSort, isSolved, selectedDifficulty, selectedTech)
      .then((problems) => {
        this.setState({ problems, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: {
            type: "fetchProblems",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  }

  handleRemoveFilter = () => {
    api.removeFilter().then((problems) => {
      this.setState({ problems, selectedTech: "", removeFilter: false });
    });
  };

  handleSortChange = (event) => {
    const { value } = event.target;
    this.setState({ selectedSort: value, removeFilter: true });
  };

  handleTechChange = (event) => {
    const { value } = event.target;
    this.setState({ selectedTech: value, removeFilter: true });
  };

  handleDifficultyChange = (event) => {
    const { value } = event.target;
    if (value === "easy")
      this.setState({ selectedDifficulty: 0, removeFilter: true });
    if (value === "medium")
      this.setState({ selectedDifficulty: 1, removeFilter: true });
    if (value === "hard")
      this.setState({ selectedDifficulty: 2, removeFilter: true });
  };

  render() {
    const {
      problems,
      selectedSort,
      selectedTech,
      selectedDifficulty,
      isLoading,
      err,
      removeFilter,
    } = this.state;
    const { className } = this.props;

    if (err) return <StyledErrorPage {...err} />;
    if (isLoading) return <StyledLoader />;

    return (
      <main className={className}>
        <h2>Solve a problem</h2>
        <StyledSortProblems
          handleSortChange={this.handleSortChange}
          selectedSort={selectedSort}
        />
        <StyledFilterProblemsTech
          handleTechChange={this.handleTechChange}
          selectedTech={selectedTech}
        />
        {removeFilter && (
          <RemoveFilters handleRemoveFilter={this.handleRemoveFilter} />
        )}

        <StyledFilterProblemsDifficulty
          handleDifficultyChange={this.handleDifficultyChange}
          selectedDifficulty={selectedDifficulty}
        />
        <StyledProblemsList problems={problems} />
      </main>
    );
  }
}

export default Home;
