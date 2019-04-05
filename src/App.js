import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Registration } from './Registration';
import { Game } from './Game';

class App extends Component {
  state = {
    player1: '',
    player2: ''
  };
  handleNewGame = (player1, player2) => {
    this.setState({ player1, player2 });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            data-testid="app-link"
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Registration onNewGame={this.handleNewGame} />
        <Game player1={this.state.player1} player2={this.state.player2} />
      </div>
    );
  }
}

export default App;
