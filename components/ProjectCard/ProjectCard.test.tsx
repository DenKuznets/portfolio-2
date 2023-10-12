import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import '@testing-library/jest-dom';
import { getProject } from '@/utils/projects';

test('renders correctly', () => {
    const project = getProject(1);
    if (project) {
        render(<ProjectCard projectId={project.id} />);
        const link = screen.getByRole('link');
        const header = screen.getByRole('heading', { level: 4 });
        const img = screen.getByAltText(`${project.name} project image`);
        const listItems = screen.getAllByRole('listitem');

        expect(header).toHaveTextContent(project?.name);
        expect(link).toHaveAttribute('href', `/allworks/${project.id}`);
        expect(img).toBeInTheDocument();
        expect(listItems).toHaveLength(project.tech.length);
    }
});

test("renders ProjectCard unchanged", () => {
  const { container } = render(<ProjectCard projectId={1} />);
  expect(container).toMatchSnapshot();
});
