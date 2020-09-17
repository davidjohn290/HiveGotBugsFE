import React, { Component } from "react";
import { StyledHexButton } from "../styled/lib";

class ToggleViewer extends Component {
  state = {
    isVisible: this.props.default,
  };

  toggleViewer = () => {
    this.setState(({ isVisible }) => {
      return { isVisible: !isVisible };
    });
  };

  render() {
    const { label } = this.props;
    const { isVisible } = this.state;
    return (
      <div>
        <StyledHexButton as="button" onclick={this.toggleViewer} label={label}>
          {label}
        </StyledHexButton>
        {isVisible && this.props.children}
      </div>
    );
  }
}

export default ToggleViewer;
