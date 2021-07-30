import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import ToggleTheme from './ToggleTheme';
import "../App.css";

class BookList extends Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
        <>
      <ul
        style={{ background: theme.bg, color: theme.syntax }}
        id="book-list-ul"
      >
        <li style={{ background: theme.ui }}>The way of kings</li>
        <li style={{ background: theme.ui }}>The name of the wind</li>
        <li style={{ background: theme.ui }}>The final empire</li>
      </ul>
      <ToggleTheme />
      </>
    );
  }
}

export default BookList;
