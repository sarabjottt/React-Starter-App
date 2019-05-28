import React, { Component } from "react";
import logo from "../assets/facebook.png";

export default class App extends Component {
  render() {
    return (
      <header>
        <h1>This is your template !!</h1>
        <img src={logo} alt='This is just a example image.' />
      </header>
    );
  }
}
