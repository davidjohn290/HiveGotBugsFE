import React, { Component } from "react";
import * as api from "../../utils/api";
import { StyledLink, StyledLoader } from "../../styled/lib";
import "./mentor.css";

class MentorList extends Component {
  state = {
    mentors: [],
    isLoading: true,
    //err: null,
  };

  componentDidMount() {
    this.getMentors().then((mentors) => {
      this.setState({ mentors: mentors, isLoading: false /*err: null*/ });
    });
    // .catch((err) => {
    //   this.setState({ err });
    // });
  }

  getMentors = () => {
    return api.getAllMentors();
  };

  render() {
    const { mentors, isLoading /*err*/ } = this.state;
    if (isLoading) return <StyledLoader />;

    return (
      <main className="main-mentor">
        {mentors.map((mentor) => (
          <section key={mentor.username} className="mentorCards">
            <img src={mentor.avatar_url} alt="" className="mentor-img" />
            <section className="mentor-bio">
              <h1>
                <StyledLink to={`/${mentor.username}`}>
                  {mentor.name}
                  <br />
                  {mentor.username}
                </StyledLink>
              </h1>
              <p>{mentor.description}</p>
            </section>
            <section className="mentor-skills">
              <h5>{mentor.skill1}</h5>
              <h5>{mentor.skill2}</h5>
              <h5>{mentor.skill3}</h5>
              <h5>{mentor.skill4}</h5>
            </section>
            <section className="mentor-stats">
              <p>{mentor.bug_points}</p>
              {/* <p>{mentor.github_url}</p> */}
              <p>{mentor.online_status}</p>
            </section>
          </section>
        ))}
      </main>
    );
  }
}

export default MentorList;
