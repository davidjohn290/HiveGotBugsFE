import React from "react";
import { StyledErrorPage, StyledLoader } from "../../styled/lib";
import { StyledSuggestionsList } from "../../styled/singleProblem";
import { StyledSingleProblemCard } from "../../styled/singleProblem";

import * as api from "../../utils/api";
import { StyledEditProblemForm } from "../../styled/singleProblem";

class SingleProblem extends React.Component {
  state = {
    problem: null,
    editFormVisible: false,
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    const { problem_id } = this.props;
    this.fetchSingleProblem(problem_id);
  }

  fetchSingleProblem(problem_id) {
    this.setState({ isLoading: true });
    api
      .getSingleProblem(problem_id)
      .then((problem) => {
        this.setState({ problem, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: {
            type: "fetchSingleProblem",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  }

  editProblemOptimistic = (editedProblem) => {
    this.setState(({ problem }) => {
      return {
        problem: {
          ...editedProblem,
          created_at: problem.created_at,
          username: problem.username,
          solved: problem.solved,
          problem_id: problem.problem_id,
        },
      };
    });
  };

  toggleEditForm = () => {
    this.setState(({ editFormVisible }) => {
      return { editFormVisible: !editFormVisible };
    });
  };

  handleDeleteProblem = (problem_id) => {
    api
      .deleteProblem(problem_id)
      .then(() => {})
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: {
            type: "deleteProblem",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  };

  render() {
    const { isLoading, err, problem, editFormVisible } = this.state;
    const { className, problem_id } = this.props;

    if (err) return <StyledErrorPage {...err} />;
    if (isLoading) return <StyledLoader />;

    return (
      <main className={className}>
        <StyledSingleProblemCard
          problem={problem}
          toggleEditForm={this.toggleEditForm}
          handleDelete={this.handleDeleteProblem}
        />
        {editFormVisible && (
          <StyledEditProblemForm
            problem={problem}
            editProblemOptimistic={this.editProblemOptimistic}
            toggleEditForm={this.toggleEditForm}
          />
        )}

        <StyledSuggestionsList problem={problem} problem_id={problem_id} />
      </main>
    );
  }
}

export default SingleProblem;
