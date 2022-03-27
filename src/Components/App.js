import React from "react";
import UserCreate from "./UserCreate";
import ColorContexts from "../Contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";
import { LanguageStore } from "../Contexts/LanguageContexts";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language: language });
  };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContexts.Provider value="red">
            <UserCreate />
          </ColorContexts.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
