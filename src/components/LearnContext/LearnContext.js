import React from "react";
import ButtonWrapper from "./ButtonWrapper";
import { ThemeContext, UserContext } from "./ContextFile";
const themes = {
  light: {
    background: "#fafaaa",
    color: "brown"
  },
  dark: {
    background: "black",
    color: "white"
  }
};
export default class LearnContext extends React.Component {
  handleTheme = () => {
    const theme =
      this.state.theme === themes.light ? themes.dark : themes.light;
    this.setState({ theme });
  };
  state = {
    theme: themes.light,
    toggleTheme: this.handleTheme
  };
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <UserContext.Provider value='Anshuman'>
          <div style={this.state.theme}>
            <h1>LearnContext</h1>
            {/* <button onClick={this.handleTheme}>Change Style </button> */}
            <ButtonWrapper />
          </div>
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}
