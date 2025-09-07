import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';

// Simple test to verify Jest and RTL setup
describe('Test Setup', () => {
  it('renders a simple component', () => {
    const TestComponent = () => <div role="button">Test Button</div>;
    render(<TestComponent />);

    const button = screen.getByRole('button');
    expect(button).toBeTruthy();
    expect(button.textContent).toBe('Test Button');
  });
});
