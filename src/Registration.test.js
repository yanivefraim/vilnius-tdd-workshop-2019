import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { Registration } from './Registration';

afterEach(cleanup);

it('should not start new game with no names', () => {
  const onNewGame = jest.fn();
  const { queryByText } = render(<Registration onNewGame={onNewGame} />);
  //fireEvent.change(queryByTestId('player1'), { target: { value: 'Yaniv' } });
  fireEvent.click(queryByText('New Game'));
  expect(onNewGame).not.toHaveBeenCalled();
});
