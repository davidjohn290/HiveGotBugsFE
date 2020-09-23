import React, { Component } from "react";
import * as api from "../../utils/api";
import ErrorPage from "../ErrorPage";

class FilterProblemsTech extends Component {
  state = {
    tech: [],
    err: null,
  };

  componentDidMount() {
    this.fetchTech();
  }

  fetchTech() {
    api
      .getTech()
      .then((tech) => {
        this.setState({ tech });
      })
      .catch(({ response }) => {
        this.setState({
          err: {
            type: "filterTech",
            msg: response.data.msg,
            status: response.status,
          },
        });
      });
  }

  render() {
    const { handleTechChange, selectedTech, className } = this.props;
    const { tech, err } = this.state;

    if (err) return <ErrorPage {...err} />;

    return (
      <section className={className}>
        <label htmlFor="filter-by-tech">
          Filter by tech:{" "}
          <select
            name="filter-by-tech"
            id="filter-by-tech"
            value={selectedTech}
            onChange={handleTechChange}
          >
            <option value="">None</option>
            {tech.map((tech) => {
              return (
                <option key={tech.slug} value={tech.slug}>
                  {tech.slug}
                </option>
              );
            })}
          </select>
        </label>
      </section>
    );
  }
}

export default FilterProblemsTech;
