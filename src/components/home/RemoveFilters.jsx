import React from "react";
import { StyledHexButton } from "../../styled/lib";

const RemoveFilters = ({ handleRemoveFilter }) => {
  const handleInvokeRemoveFilter = () => {
    handleRemoveFilter();
  };
  return (
    <section>
      <StyledHexButton as="button" onClick={handleInvokeRemoveFilter}>
        Clear Filter
      </StyledHexButton>
    </section>
  );
};

export default RemoveFilters;
