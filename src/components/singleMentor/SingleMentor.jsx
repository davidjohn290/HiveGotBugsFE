import React from "react";
import * as api from "../../utils/api";
import { StyledLoader, StyledErrorPage } from "../../styled/lib";

class SingleMentor extends React.Component {
  state = {
    mentor: null,
    isLoading: true,
    err: null,
  };

  fetchMentor = (username) => {
    api
      .getAMentor(username)
      .then((mentorInformation) => {
        this.setState(() => {
          return { mentor: mentorInformation, isLoading: false };
        });
      })
      .catch(({ response }) => {
        this.setState({
          err: {
            type: "getMentor",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  };

  componentDidMount() {
    const { username } = this.props;
    this.fetchMentor(username);
  }

  render() {
    const { mentor, isLoading, err } = this.state;
    const { className } = this.props;

    if (err) return <StyledErrorPage {...err} />;
    if (isLoading) return <StyledLoader />;

    return (
      <main as="SingleMentor" className={className}>
        <h2>{mentor.name}</h2>
        <h4>{mentor.username}</h4>

        <div className="nameSkillsContainer">
          <img src={mentor.avatar_url} alt="Profile Img" />
            <p>{mentor.skill1}</p>
            <p>{mentor.skill2}</p>
            <p>{mentor.skill3}</p>
        </div>

        <h3>Bio</h3>
        <p>{mentor.description}</p>

        <p>Github Link:</p>
        <a href={mentor.github_url}>{mentor.github_url}</a>
      </main>
    );
  }
}

export default SingleMentor;
