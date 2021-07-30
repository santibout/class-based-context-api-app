import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";
import ".././App.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.context);
  }
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => {
          const { isAuthenticated, toggleAuth } = authContext;
          return (
            <ThemeContext.Consumer>
              {(themeContext) => {
                const { isLightTheme, light, dark } = themeContext;
                const theme = isLightTheme ? light : dark;
                return (
                  <nav
                    style={{
                      background: theme.ui,
                      color: theme.syntax,
                    }}
                  >
                    <h1>Context App</h1>
                    <h4 onClick={toggleAuth}>
                      {isAuthenticated ? "Logged In" : "Logged Out"}
                    </h4>
                    <ul>
                      <li style={{ color: theme.syntax }}>Home</li>
                      <li style={{ color: theme.syntax }}>About</li>
                      <li style={{ color: theme.syntax }}>Contact</li>
                    </ul>
                  </nav>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
