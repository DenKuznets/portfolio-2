import { render, screen } from '@testing-library/react';
import Section from './Section';
import '@testing-library/jest-dom';
import {  projects } from '@/utils/projects';
import text from '../../utils/text';

const project = projects[0];

test('renders correctly', () => {
    render(<Section projectId={project.id} />);
    const header = screen.getByRole('heading', { level: 3 });
    const listItems = screen.getAllByRole('listitem');
    const gitLink = screen.getByRole('link', { name: 'Github' });
    const demoLink = screen.getByRole('link', { name: 'Demo' });
    const showmoreLink = screen.getByRole('link', { name: text.showmore });
    const img = screen.getByAltText(`${project.name} project image`);

    expect(header).toHaveTextContent(project?.name);
    expect(listItems).toHaveLength(project.tech.length);
    expect(gitLink).toHaveAttribute('href', project.github);
    expect(demoLink).toHaveAttribute('href', project.demo);
    expect(showmoreLink).toHaveAttribute('href', `/allworks/${project.id}`);
    expect(img).toBeInTheDocument();
});

test('renders Section unchanged', () => {
    const { container } = render(<Section projectId={1} />);
    expect(container).toMatchSnapshot();
});
