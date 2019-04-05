import React from 'react';
export const Game = ({ player1, player2 }) => {
  return (
    <div>
      <h1 data-testid="player1-title">{player1}</h1>
      <h1 data-testid="player2-title">{player2}</h1>
    </div>
  );
};
