import React from "react";
import LanguageContext from "../Contexts/LanguageContexts";
import ColorContexts from "../Contexts/ColorContext";

class Button extends React.Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Bandh karde ye saab";
  }

  renderColor(color) {
    return color === "red" ? "red" : "primary";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${this.renderColor(color)}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContexts.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContexts.Consumer>
    );
  }
}

export default Button;
