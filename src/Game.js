import React from 'react';
export const Game = ({ player1, player2, board, onCellClicked }) => {
  return (
    <div>
      <h1 data-testid="player1-title">{player1}</h1>
      <h1 data-testid="player2-title">{player2}</h1>
      <table>
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  onClick={() => onCellClicked(rowIndex, colIndex)}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
