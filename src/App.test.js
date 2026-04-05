import { render, screen } from '@testing-library/react';
import App from './App';

test('shows my name', () => {
  render(<App />);
  expect(screen.getByText(/Nicole Ricare/i)).toBeInTheDocument();
});

test('shows the course name', () => {
  render(<App />);
  expect(screen.getByText(/TECH2102/i)).toBeInTheDocument();
});