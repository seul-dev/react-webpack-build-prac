import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render test', () => {
  render(<App />);
  const headingElement = screen.getByText(/My Agora/i);
  expect(headingElement).toBeInTheDocument();
});
