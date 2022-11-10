import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom/client';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/My React Page/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders without crashing', () => {
 act(() => {
 const root = ReactDOM.createRoot(document.createElement('div'));
 root.render(<App />);
 });
});

test('renders h2 text', () => {
  render(<App />);
  const h2 = screen.getByText(/This is my first React page… I enjoy learning!+/i);
  expect(h2).toBeInTheDocument();
})

