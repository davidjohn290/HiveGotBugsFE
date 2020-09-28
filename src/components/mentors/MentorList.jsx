import React, { Component } from "react";
import * as api from "../../utils/api";
import { StyledLink, StyledLoader, StyledErrorPage } from "../../styled/lib";
import { StyledMentorImage } from "../../styled/mentorImage";

class MentorList extends Component {
  state = {
    mentors: [],
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    this.getMentors()
      .then((mentors) => {
        this.setState({ mentors: mentors, isLoading: false, err: null });
      })
      .catch(({ response }) => {
        this.setState({
          err: {
            type: "getMentorList",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  }

  getMentors = () => {
    return api.getAllMentors();
  };

  render() {
    const { mentors, isLoading, err } = this.state;
    const { className } = this.props;

    if (err) return <StyledErrorPage {...err} />;
    if (isLoading) return <StyledLoader />;

    return (
      <main className={className}>
        {mentors.map((mentor) => (
          <section key={mentor.username} className="mentorCards">
            <StyledMentorImage url={mentor.avatar_url} />
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
            <label>
              Skills:
              <section className="mentor-skills">
                <h5>{mentor.skill1}</h5>
                <h5>{mentor.skill2}</h5>
                <h5>{mentor.skill3}</h5>
                <h5>{mentor.skill4}</h5>
              </section>
            </label>
            <section className="mentor-stats">
              <label>
                Bug Points:
                <p>{mentor.bug_points}</p>
              </label>
            </section>
          </section>
        ))}
      </main>
    );
  }
}

export default MentorList;
