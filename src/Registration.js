import React from 'react';
export class Registration extends React.Component {
  state = {
    player1: '',
    player2: ''
  };
  render() {
    const { onNewGame } = this.props;
    return (
      <div>
        <input
          data-testid="player1"
          onChange={evt =>
            this.setState({
              player1: evt.target.value
            })
          }
        />
        <input
          data-testid="player2"
          onChange={evt =>
            this.setState({
              player2: evt.target.value
            })
          }
        />
        <button
          data-testid="new-game"
          onClick={() => onNewGame(this.state.player1, this.state.player2)}
        >
          New Game
        </button>
      </div>
    );
  }
}
