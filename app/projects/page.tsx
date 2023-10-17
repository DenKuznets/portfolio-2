import { projects as projectsList } from '@/utils/projects';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import ProjectsLayout from './layout';

const ProjectsPage = ({ params }) => {
    return (
        <ProjectsLayout>
            <div className="flex flex-col gap-8">
                {projectsList.map((proj) => (
                    <ProjectCard key={proj.id} projectId={proj.id} />
                ))}
            </div>
        </ProjectsLayout>
    );
};

export default ProjectsPage;
