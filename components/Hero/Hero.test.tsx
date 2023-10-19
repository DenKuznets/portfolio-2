/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';
import Hero, { hero_testids } from './Hero';
import '@testing-library/jest-dom';
import text from '@/utils/text';

test('renders correctly', () => {
    render(<Hero />);
    const container = screen.getByTestId(hero_testids.hero_container);
    const h1 = screen.getByRole('heading', { level: 1 });
    const p = screen.getByText(text.hero.stack);
    const telegramLink = screen.getByRole('link', { name: /связаться/i });
    const allProjects = screen.getByRole('link', { name: /мои проекты/i });
    const gitLink = screen.getByAltText(text.links.git).closest('a');
    const instLink = screen.getByAltText(text.links.inst).closest('a');

    expect(container).toBeInTheDocument();
    expect(h1).toHaveTextContent(`${text.hero.fname} ${text.hero.lname}`);
    expect(p).toBeInTheDocument();
    expect(telegramLink).toHaveAttribute('href', 'https://t.me/DenKuznets');
    expect(allProjects).toHaveAttribute('href', '/projects');
    expect(gitLink).toHaveAttribute('href', text.links.git);
    expect(instLink).toHaveAttribute('href', text.links.inst);
});

test("renders hero unchanged", () => {
  const { container } = render(<Hero />);
  expect(container).toMatchSnapshot();
});
