import React from "react";
import { getAMentor } from "../../utils/api";

class SingleMentor extends React.Component {
  state = {
    mentors: [],
    isLoading: true,
  };

  fetchMentor = (username) => {
    getAMentor(username).then((mentorInformation) => {
      console.log(mentorInformation)
      this.setState(() => {
        return { mentors: mentorInformation, isLoading: false };
      });
    });
  };

  componentDidMount() {
    const { username } = this.props
    this.fetchMentor(username);
  }

  render() {
    const { mentors, isLoading } = this.state;

    if (isLoading) return <p>Is Loading...</p>;

    return (
      <div className="mentorDetails">
        {/* {console.log(mentors)}

        <h3>{mentors[0].username}</h3>
        <img src={mentors[0].avatar_url} alt="Profile Img" />

        <ul className="skillsList">
          <li>{mentors[0].skill1}</li>
          <li>{mentors[0].skill2}</li>
          <li>{mentors[0].skill3}</li>
          <li>{mentors[0].skill4}</li>
        </ul>

        <p>Bio</p>
        <p>{mentors[0].description}</p>

        <p>Github Link:</p>
        <p>{mentors[0].github_url}</p> */}
      </div>
    );
  }
}

export default SingleMentor;
