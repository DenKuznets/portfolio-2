import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import '@testing-library/jest-dom';

const project = {
    id: 1,
    name: 'rock paper scissors',
    tech: ['react', 'mui', 'ts', 'unit testing'],
    img: 'rpc.webp',
    github: 'https://github.com/DenKuznets/rock-paper-scissors',
    demo: 'https://rock-paper-scissors-kappa-tawny.vercel.app/',
    description: `Игра "Камень Ножницы Бумага" по дизайну https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH`
};

test('renders correctly', () => {
    render(<ProjectCard projectId={project.id} />);
    const link = screen.getByRole('link');
    const header = screen.getByRole('heading', { level: 4 });
    const img = screen.getByAltText(`${project.name} project image`);
    const listItems = screen.getAllByRole('listitem');

    expect(header).toHaveTextContent(project?.name);
    expect(link).toHaveAttribute('href', `/allworks/${project.id}`);
    expect(img).toBeInTheDocument();
    expect(listItems).toHaveLength(project.tech.length);
});

test('renders ProjectCard unchanged', () => {
    const { container } = render(<ProjectCard projectId={1} />);
    expect(container).toMatchSnapshot();
});
