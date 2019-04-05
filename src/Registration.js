import React, { useState } from 'react';
export function Registration({ onNewGame }) {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  return (
    <div>
      <input
        data-testid="player1"
        onChange={evt => setPlayer1(evt.target.value)}
      />
      <input
        data-testid="player2"
        onChange={evt => setPlayer2(evt.target.value)}
      />
      <button
        data-testid="new-game"
        onClick={() => onNewGame(player1, player2)}
      >
        New Game
      </button>
    </div>
  );
}
