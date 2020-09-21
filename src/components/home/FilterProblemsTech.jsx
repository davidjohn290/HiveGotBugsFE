import React, { Component } from "react";
import * as api from "../../utils/api";

class FilterProblemsTech extends Component {
  state = { tech: [] };

  componentDidMount() {
    this.fetchTech();
  }

  fetchTech() {
    api.getTech().then((tech) => {
      this.setState({ tech });
    });
  }

  render() {
    const { handleTechChange, selectedTech, className } = this.props;
    const { tech } = this.state;

    return (
      <section className={className}>
        <label htmlFor="filter-by-tech">Filter by tech: </label>
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
      </section>
    );
  }
}

export default FilterProblemsTech;
