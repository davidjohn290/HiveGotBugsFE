import React from "react";

const SortProblems = ({ handleSortChange, selectedSort, className }) => {
  return (
    <section className={className}>
      <label htmlFor="sort-by">Sort problems by: </label>
      <select
        name="sort-by"
        id="sort-by"
        value={selectedSort}
        onChange={handleSortChange}
      >
        <option value="newest">Most recent</option>
        <option value="oldest">Oldest</option>
      </select>
    </section>
  );
};

export default SortProblems;
