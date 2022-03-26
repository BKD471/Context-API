import React from "react";
import UserCreate from "./UserCreate";
import LanguageContexts from "../Contexts/LanguageContexts";
import ColorContexts from "../Contexts/ColorContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language: language });
  };

  handleInputChange() {
    return this.state.language;
  }
  setLanguage(e) {
    console.log(e);
    this.setState({ Language: e });
  }

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag in"
            onClick={() => this.onLanguageChange("hindi")}
          />
        </div>
        <ColorContexts.Provider value="red">
          <LanguageContexts.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContexts.Provider>
        </ColorContexts.Provider>
      </div>
    );
  }
}

export default App;
