import React, { Component } from 'react';
import sheldon from '../assets/Sheldon_meme.gif';

export default class App extends Component {
  render() {
    return (
      <header>
        <h1>This is your template !!</h1>
        <img src={sheldon} alt="This is just a example image." />
      </header>
    );
  }
}
