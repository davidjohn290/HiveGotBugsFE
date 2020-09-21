import React from "react";
import { StyledErrorPage, StyledLoader } from "../../styled/lib";
import SuggestionsList from "./SuggestionsList";
import SingleProblemCard from "./SingleProblemCard";
import AddSuggestionForm from "./AddSuggestionForm";
import * as api from "../../utils/api";

class SingleProblem extends React.Component {
  state = { problem: null, isLoading: true, err: null };

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

  render() {
    const { isLoading, err, problem } = this.state;
    const { className } = this.props;

    if (err) return <StyledErrorPage {...err} />;
    if (isLoading) return <StyledLoader />;

    return (
      <main className={className}>
        <SingleProblemCard problem={problem} />
        <AddSuggestionForm />
        <SuggestionsList />
      </main>
    );
  }
}

export default SingleProblem;
