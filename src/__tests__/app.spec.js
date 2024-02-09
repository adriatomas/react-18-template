
import { render } from '@testing-library/react';
import App from '../app';





test('renders app component with correct text', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Rick and Morty/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders app component with h1 tag', () => {
  const { container } = render(<App />);
  const headingElement = container.querySelector('h1');
  expect(headingElement).toBeInTheDocument();
});