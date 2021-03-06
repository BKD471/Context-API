import React from "react";
import LanguageContext from "../Contexts/LanguageContexts";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag in"
          onClick={() => this.context.onLanguageChange("hindi")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
