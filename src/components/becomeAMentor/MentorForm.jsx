import React, { Component } from "react";
import { UserContext } from "../../UserContext";
import * as api from "../../utils/api";
import { StyledLoader, StyledErrorPage } from "../../styled/lib";
const githubRegex = require("regex-username");

class MentorForm extends Component {
  static contextType = UserContext;

  state = {
    submitted: false,
    username: "",
    tech: [],
    user: {},
    isLoading: false,
    formValues: { bio: "", skill1: "", skill2: "", skill3: "", github: "" },
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
      this.setState({ submitted: true, bio: "", skills: [], github: "" });
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
      validUsername,
    } = this.state;

    if (err) return <StyledErrorPage {...err} />;
    if (isLoading) return <StyledLoader />;
    if (!username) return <p>Please log in first!</p>;
    if (user.bug_points < 10)
      return (
        <p>
          You don't have enough bug points to become a mentor right now. Check
          back once you've earned at least 10 bug points!
        </p>
      );

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
          <form className="form" onSubmit={this.onSubmit}>
            <label htmlFor="bio">
              Bio:
              <textarea
                value={formValues.bio}
                id="bio"
                name="bio"
                cols="25"
                rows="8"
                placeholder="Write here..."
                required
                onChange={this.onInput}
              />
            </label>
            <label htmlFor="skill1">
              Skill 1:
              <select
                id="skill1"
                name="skill1"
                onChange={this.onInput}
                value={formValues.skill1}
              >
                <option value="">None</option>
                {tech.map((item) => {
                  return (
                    <option value={item.slug} key={item.slug}>
                      {item.slug}
                    </option>
                  );
                })}
              </select>
            </label>
            <label htmlFor="id">
              Skill 2:
              <select
                id="skill2"
                name="skill2"
                onChange={this.onInput}
                value={formValues.skill2}
              >
                <option value="">None</option>
                {tech.map((item) => {
                  return (
                    <option value={item.slug} key={item.slug}>
                      {item.slug}
                    </option>
                  );
                })}
              </select>
            </label>
            <label htmlFor="skill3">
              Skill 3:
              <select
                id="skill3"
                name="skill3"
                onChange={this.onInput}
                value={formValues.skill3}
              >
                <option value="">None</option>
                {tech.map((item) => {
                  return (
                    <option value={item.slug} key={item.slug}>
                      {item.slug}
                    </option>
                  );
                })}
              </select>
            </label>

            <label htmlFor="github">
              Github Username:
              <input
                id="github"
                type="text"
                name="github"
                placeholder="Write here..."
                required
                value={formValues.github}
                onChange={this.onInput}
              />
            </label>
            {!validUsername && <p>Invalid username</p>}
            <button type="submit">Submit</button>
          </form>
        ) : (
          <p>Your request has been submitted!</p>
        )}
      </section>
    );
  }
}

export default MentorForm;
