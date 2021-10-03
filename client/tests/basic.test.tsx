/**
 * @jest-environment jsdom
 */

import { render, screen } from './../test-utils';
import { App } from '../views/App';

describe('My Test Suite', () => {
  it('Renders app correctly', () => {
    render(<App />);
    const Button = screen.getByText('Increment');
    expect(Button).toBeInTheDocument();
  });
});
