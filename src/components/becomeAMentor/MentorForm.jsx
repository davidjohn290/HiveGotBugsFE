import { Link } from "@reach/router";
import React, { Component } from "react";
import { UserContext } from "../../UserContext";
import * as api from "../../utils/api";
import {
  StyledLoader,
  StyledErrorPage,
  StyledPleaseLogin,
  StyledHexButton,
} from "../../styled/lib";
import "../../css/becomeAMentor.css";

const githubRegex = require("regex-username");

class MentorForm extends Component {
  static contextType = UserContext;

  state = {
    submitted: false,
    username: "",
    tech: [],
    user: {},
    isLoading: false,
    formValues: {
      bio: "",
      skill1: "",
      skill2: "",
      skill3: "",
      github: "",
      name: "",
    },
    err: null,
    validUsername: null,
  };

  componentDidMount() {
    const { username } = this.context;
    this.setState({ username });
    if (username) {
      this.fetchUser(username);
      this.fetchTech();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { username } = this.context;
    if (username !== prevState.username) {
      this.setState({ username });
      if (username) {
        this.fetchUser(username);
        this.fetchTech();
      }
    }
  }

  fetchUser = (username) => {
    this.setState({ isLoading: true });
    api
      .getUserByUsername(username)
      .then((user) => {
        this.setState({ user, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: {
            type: "fetchUser",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  };

  fetchTech = () => {
    this.setState({ isLoading: true });
    api
      .getTech()
      .then((tech) => {
        this.setState({ tech, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: {
            type: "fetchTech",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  };

  onInput = ({ target: { value, name } }) => {
    this.setState(({ formValues }) => {
      return { formValues: { ...formValues, [name]: value } };
    });

    if (name === "github") {
      const validUsername = githubRegex().test(value);
      this.setState({ validUsername });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { formValues, username } = this.state;

    if (formValues.bio !== "" && formValues.github !== "") {
      api.makeUserAMentor(username, formValues).catch(({ response }) => {
        this.setState({
          isLoading: false,
          err: {
            type: "makeUserMentor",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
      this.setState({
        submitted: true,
        bio: "",
        skills: [],
        github: "",
        name: "",
      });
    }
  };

  render() {
    const { className } = this.props;
    const {
      submitted,
      tech,
      formValues,
      err,
      isLoading,
      user,
      username,
    } = this.state;

    if (err) return <StyledErrorPage {...err} />;
    if (isLoading) return <StyledLoader />;
    if (!username) return <StyledPleaseLogin />;

    if (user.bug_points < 10)
      return (
        <p id="becomeAMentorPTag">
          You don't have enough bug points to become a mentor right now. Check
          back once you've earned at least 10 bug points!
        </p>
      );

    if (user.role === "mentor") {
      return (
        <p id="becomeAMentorPTag">
          You are already a mentor. Visit your{" "}
          <Link to="/dashboard">dashboard</Link> to see your profile!
        </p>
      );
    }

    return (
      <section className={className}>
        <header>
          <h2>Become a mentor</h2>
          <p>
            Congratulations! You have gathered enough bug points to become a
            mentor. Fill out your mentor profile below!
          </p>
        </header>
        {!submitted ? (
          <form className={className} onSubmit={this.onSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                onChange={this.onInput}
                value={formValues.name}
                placeholder="Write here..."
                required
              />
            </label>
            <label>
              Skill 1:
              <select
                name="skill1"
                onChange={this.onInput}
                value={formValues.skill1}
                required
              >
                <option value="" hidden>
                  Pick your skills
                </option>
                {tech.map((item) => {
                  return (
                    <option value={item.slug} key={item.slug}>
                      {item.slug}
                    </option>
                  );
                })}
              </select>
            </label>
            <label>
              Skill 2:
              <select
                name="skill2"
                onChange={this.onInput}
                value={formValues.skill2}
                required
              >
                <option value="" hidden>
                  Pick your skills
                </option>
                {tech.map((item) => {
                  return (
                    <option value={item.slug} key={item.slug}>
                      {item.slug}
                    </option>
                  );
                })}
              </select>
            </label>
            <label>
              Skill 3:
              <select
                name="skill3"
                onChange={this.onInput}
                value={formValues.skill3}
                required
              >
                <option value="" hidden>
                  Pick your skills
                </option>
                {tech.map((item) => {
                  return (
                    <option value={item.slug} key={item.slug}>
                      {item.slug}
                    </option>
                  );
                })}
              </select>
            </label>

            <label>
              Github Username:
              <input
                type="text"
                name="github"
                placeholder="Write here..."
                required
                value={formValues.github}
                onChange={this.onInput}
              />
            </label>

            <label>
              Bio:
              <br />
              <textarea
                value={formValues.bio}
                name="bio"
                cols="25"
                rows="8"
                placeholder="Write here..."
                required
                onChange={this.onInput}
              />
            </label>
            {/* {!validUsername && <p>Invalid username</p>} */}
            <StyledHexButton as="button">Submit</StyledHexButton>
            <br />
          </form>
        ) : (
          <p>Your request has been submitted!</p>
        )}
      </section>
    );
  }
}

export default MentorForm;
