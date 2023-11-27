/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'; 
import Main from '.';
import '@testing-library/jest-dom';

describe('Main', () => {
  it('should render the heading', () => {
    render(<Main />);

    expect(
      screen. getByRole( 'heading', { name: /react avançado/i })).toBeInTheDocument()
  })
});