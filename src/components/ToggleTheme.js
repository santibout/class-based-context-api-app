import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
class ToggleTheme extends Component {
  static contextType = ThemeContext;
  state = {};
  render() {
    return <button onClick={this.context.toggleTheme}>ToggleTheme</button>;
  }
}

export default ToggleTheme;
