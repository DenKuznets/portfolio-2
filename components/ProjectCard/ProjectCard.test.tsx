import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import '@testing-library/jest-dom';
import { projects } from '@/utils/projects';

const project = projects[0];

test('renders correctly', () => {
    render(<ProjectCard projectId={project.id} />);
    const link = screen.getByRole('link');
    const header = screen.getByRole('heading', { level: 4 });
    const img = screen.getByAltText(`${project.name} project image`);
    const listItems = screen.getAllByRole('listitem');

    expect(header).toHaveTextContent(project?.name);
    expect(link).toHaveAttribute('href', `/projects/${project.id}`);
    expect(img).toBeInTheDocument();
    expect(listItems).toHaveLength(project.tech.length);
});

test('renders ProjectCard unchanged', () => {
    const { container } = render(<ProjectCard projectId={1} />);
    expect(container).toMatchSnapshot();
});
