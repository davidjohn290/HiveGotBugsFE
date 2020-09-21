import React from "react";
import { StyledErrorPage, StyledLoader } from "../../styled/lib";
import { StyledSuggestionsList } from "../../styled/singleProblem";
import { StyledSingleProblemCard } from "../../styled/singleProblem";
import { StyledAddSuggestionForm } from "../../styled/singleProblem";
import * as api from "../../utils/api";
import { StyledEditProblemForm } from "../../styled/singleProblem";
import { UserContext } from "../../UserContext";

class SingleProblem extends React.Component {
  state = {
    problem: null,
    editFormVisible: false,
    isLoading: true,
    err: null,
  };

  static contextType = UserContext;

  componentDidMount() {
    const { problem_id } = this.props;
    this.fetchSingleProblem(problem_id);
  }

  fetchSingleProblem(problem_id) {
    this.setState({ isLoading: true });
    api
      .getSingleProblem(problem_id)
      .then((problem) => {
        console.log(problem);
        this.setState({ problem, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          // err: {
          //   type: "fetchProblems",
          //   msg: response.data.msg,
          //   status: response.status,
          // },
        });
      });
  }

  toggleEditForm = () => {
    this.setState(({ editFormVisible }) => {
      return { editFormVisible: !editFormVisible };
    });
  };

  handleDelete = () => {
    console.log("problem delete function called");
  };

  render() {
    const { isLoading, err, problem, editFormVisible } = this.state;
    const { className } = this.props;
    const { username } = this.context;

    if (err) return <StyledErrorPage {...err} />;
    if (isLoading) return <StyledLoader />;

    return (
      <main className={className}>
        <StyledSingleProblemCard
          problem={problem}
          toggleEditForm={this.toggleEditForm}
          handleDelete={this.handleDelete}
        />
        {editFormVisible && <StyledEditProblemForm />}
        {username && <StyledAddSuggestionForm />}
        <StyledSuggestionsList />
      </main>
    );
  }
}

export default SingleProblem;
