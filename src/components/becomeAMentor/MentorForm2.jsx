import React, { Component } from "react";
import { UserContext } from "../../UserContext";
import * as api from "../../utils/api";
import { StyledLoader } from "../../styled/lib";
import ErrorPage from "../ErrorPage";

class MentorForm2 extends Component {
  static contextType = UserContext;

  state = {
    submitted: false,
    tech: [],
    user: {},
    isLoading: false,
    formValues: {},
    err: null,
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
    const onlyUsername = /(.com|www.)/.test(value);
    if (!onlyUsername) {
      this.setState(({ formValues }) => {
        return { formValues: { ...formValues, [name]: value } };
      });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { formValues, username } = this.state;

    if (formValues.bio !== "" && formValues.github !== "") {
      api.makeUserAMentor(username, formValues);
      this.setState({ submitted: true, bio: "", skills: [], github: "" });
    }
  };

  render() {
    const { className } = this.props;
    const { submitted, tech, formValues, err, isLoading } = this.state;

    if (err) return <ErrorPage {...err} />;
    if (isLoading) return <StyledLoader />;

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
            <label>Bio:</label>
            <textarea
              value={formValues.bio}
              name="bio"
              cols="25"
              rows="8"
              placeholder="Write here..."
              required
              onChange={this.onInput}
            ></textarea>
            <label>
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
            <label>
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
            <label>
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
            <button type="submit">Submit</button>
          </form>
        ) : (
          <p>Your request has been submitted!</p>
        )}
      </section>
    );
  }
}

export default MentorForm2;
