import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders the welcome message', () => {
  const { getByText } = render(<Home />);
  const welcomeMessage = getByText('Welcome to our Website');
  expect(welcomeMessage).toBeInTheDocument();
});

test('renders the description text', () => {
  const { getByText } = render(<Home />);
  const description = getByText('A calculator is a device or software application that performs arithmetic operations on numbers. It typically includes basic operations like addition, subtraction, multiplication, and division. More advanced calculators can also handle operations like square roots, percentages, exponentiation, logarithms, and trigonometric functions.');
  expect(description).toBeInTheDocument();
});
