import { render} from '@testing-library/react';
import { test } from 'vitest'; // Import test function
import App from '../App';

test('renders a component', () => {
  render(<App />);
  // const linkElement = screen.getByText(/Vite \+ React/i);
  // ... rest of your test assertions
});
