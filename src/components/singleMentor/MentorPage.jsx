import React from "react";
import { getAMentor } from "../../utils/api";

class SingleMentor extends React.Component {
  state = {
    mentor: null,
    isLoading: true,
  };

  fetchMentor = (username) => {
    getAMentor(username).then((mentorInformation) => {
      this.setState(() => {
        return { mentor: mentorInformation, isLoading: false };
      });
    });
  };

  componentDidMount() {
    const { username } = this.props;
    this.fetchMentor(username);
  }

  render() {
    const { mentor, isLoading } = this.state;
    const { className } = this.props;

    if (isLoading) return <p>Is Loading...</p>;

    return (
      <main className={className}>
        <h2>{mentor.name}</h2>
        <h3>{mentor.username}</h3>
        <img src={mentor.avatar_url} alt="Profile Img" />

        <ul>
          <li>{mentor.skill1}</li>
          <li>{mentor.skill2}</li>
          <li>{mentor.skill3}</li>
          <li>{mentor.skill4}</li>
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
