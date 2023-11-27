import React from 'react';
import { render, screen } from '@testing-library/react'; 
import '@testing-library/jest-dom';
import { Button } from '.';

describe('Button', () => {
  it('should render children correctly', () => {
    render(<Button>Test Button</Button>)
    expect(screen.getByRole('button', { name: /test button/i})).toBeInTheDocument();
  });

  it('should apply fullWidth class when fullWidth prop is true', () => {
    render(<Button fullWidth>Full Width Button</Button>);
    expect(screen.getByText(/full width button/i)).toHaveClass('w-full');
  });

  it('should applies secondary styles when secondary prop is true', () => {
    render(<Button secondary>Secondary Button</Button>);
    expect(screen.getByText(/secondary button/i)).toHaveClass('bg-white text-black border border-gray-300');
  });

  it('should applies round styles when round prop is true', () => {
    render(<Button round>Round Button</Button>);
    expect(screen.getByText(/round button/i)).toHaveClass('rounded-full');
  });

  it('should renders start icon when iconStart is provided', () => {
    const IconStart = () => <span>Start Icon</span>;
    render(<Button iconStart={<IconStart />}>Button with Start Icon</Button>);
    expect(screen.getByText(/start icon/i)).toBeInTheDocument();
  });
  it('should renders end icon when iconEnd is provided', () => {
    const IconEnd = () => <span>End Icon</span>;
    render(<Button iconEnd={<IconEnd />}>Button with End Icon</Button>);
    expect(screen.getByText(/end icon/i)).toBeInTheDocument();
  });

  it('should combines provided className with default classes', () => {
    const customClassName = 'custom-class';
    render(<Button className={customClassName}>Button with Custom Class</Button>);
    const button = screen.getByText(/button with custom class/i);
    expect(button).toHaveClass('font-semibold flex items-center justify-center space-x-2 px-4 py-2 transition ease-in-out duration-300 hover:bg-teal-500');
    expect(button).toHaveClass(customClassName);
  });
});