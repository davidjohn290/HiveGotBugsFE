import React from "react";
import { StyledErrorPage, StyledLoader } from "../../styled/lib";
import {
  StyledSuggestionsList,
  StyledSingleProblemCard,
  StyledEditProblemForm,
} from "../../styled/singleProblem";
import { navigate } from "@reach/router";
import * as api from "../../utils/api";

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

  problemSolvedOptimistic = () => {
    this.setState(({ problem }) => {
      return {
        problem: {
          ...problem,
          solved: "true",
        },
      };
    });
  };

  toggleEditForm = () => {
    this.setState(({ editFormVisible }) => {
      return { editFormVisible: !editFormVisible };
    });
  };

  handleDeleteProblem = () => {
    const {
      problem: { problem_id },
    } = this.state;
    api
      .deleteProblem(problem_id)
      .then(() => {
        navigate("/");
      })
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
          handleDeleteProblem={this.handleDeleteProblem}
        />
        {editFormVisible && (
          <StyledEditProblemForm
            problem={problem}
            editProblemOptimistic={this.editProblemOptimistic}
            toggleEditForm={this.toggleEditForm}
          />
        )}
        <StyledSuggestionsList
          problem={problem}
          problem_id={problem_id}
          problemSolvedOptimistic={this.problemSolvedOptimistic}
        />
      </main>
    );
  }
}

export default SingleProblem;
