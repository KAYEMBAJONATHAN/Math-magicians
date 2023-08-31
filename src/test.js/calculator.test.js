import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

test('renders calculator', () => {
  render(<Calculator />);
  const calculatorTitle = screen.getByText("Let's do some Math");
  expect(calculatorTitle).toBeInTheDocument();
});

test('performs addition', () => {
  render(<Calculator />);
  const button1 = screen.getByText('1');
  const buttonPlus = screen.getByText('+');
  const button2 = screen.getByText('2');
  const buttonEquals = screen.getByText('=');
  const display = screen.getByRole('textbox');

  fireEvent.click(button1);
  fireEvent.click(buttonPlus);
  fireEvent.click(button2);
  fireEvent.click(buttonEquals);

  expect(display).toHaveValue('3');
});

test('performs division', () => {
  render(<Calculator />);
  const button6 = screen.getByText('6');
  const buttonDivision = screen.getByText('÷');
  const button3 = screen.getByText('3');
  const buttonEquals = screen.getByText('=');
  const display = screen.getByRole('textbox');

  fireEvent.click(button6);
  fireEvent.click(buttonDivision);
  fireEvent.click(button3);
  fireEvent.click(buttonEquals);

  expect(display).toHaveValue('2');
});