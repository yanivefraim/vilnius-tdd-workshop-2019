import { gameStatus } from './gameService';

test('X should win', () => {
  // prettier-ignore
  const board = [
    ['X', 'X', 'X'],
    ['', '', ''],
    ['', '', '']
  ];
  expect(gameStatus(board)).toBe('X');
});
