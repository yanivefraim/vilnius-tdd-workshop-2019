import React from 'react';
import { render, cleanup } from 'react-testing-library';
import App from './App';

afterEach(cleanup);

it('renders link text correctly', () => {
  const { queryByTestId } = render(<App />);

  expect(queryByTestId('app-link').textContent).toBe('Learn React');
});
