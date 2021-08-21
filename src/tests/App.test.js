import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders the app This page', () => {
  render(<App />);
  const linkElement = screen.getByText(/this page/i);
  expect(linkElement).toBeInTheDocument();
});
