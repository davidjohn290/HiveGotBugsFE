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
      <main className={className}>
        <h2>{mentor.name}</h2>
        <h3>{mentor.username}</h3>
        <img src={mentor.avatar_url} alt="Profile Img" />

        <ul>
          <li>{mentor.skill1}</li>
          <li>{mentor.skill2}</li>
          <li>{mentor.skill3}</li>
        </ul>

        <p>Bio</p>
        <p>{mentor.description}</p>

        <p>Github Link:</p>
        <a href={mentor.github_url}>{mentor.github_url}</a>
      </main>
    );
  }
}

export default SingleMentor;
