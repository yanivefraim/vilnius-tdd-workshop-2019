export function gameStatus(board) {
  if (board[0].every(cell => cell === 'X')) {
    return 'X';
  }
}
