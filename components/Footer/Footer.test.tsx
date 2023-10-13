import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom';

test('renders correctly', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(3)
});

test("renders footer unchanged", () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});
