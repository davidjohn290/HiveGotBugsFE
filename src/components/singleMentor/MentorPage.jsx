import React from "react";
import { getAMentor } from "../../utils/api";

class SingleMentor extends React.Component {
  state = {
    mentors: [],
    isLoading: true,
  };

  fetchMentor = (username) => {
    getAMentor(username).then((mentorInformation) => {
      this.setState(() => {
        return { mentors: mentorInformation, isLoading: false };
      });
    });
  };

  componentDidMount() {
    const { username } = this.props;
    this.fetchMentor(username);
  }

  render() {
    const { mentors, isLoading } = this.state;

    if (isLoading) return <p>Is Loading...</p>;

    return (
      <div className="mentorDetails">

        <h3>{mentors.username}</h3>
        <img src={mentors.avatar_url} alt="Profile Img" />

        <ul className="skillsList">
          <li>{mentors.skill1}</li>
          <li>{mentors.skill2}</li>
          <li>{mentors.skill3}</li>
          <li>{mentors.skill4}</li>
        </ul>

        <p>Bio</p>
        <p>{mentors.description}</p>

        <p>Github Link:</p>
        <a href={mentors.github_url}>{mentors.github_url}</a>
      </div>
    );
  }
}

export default SingleMentor;
