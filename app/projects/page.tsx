import { projects as projectsList } from '@/utils/projects';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { techList } from '@/utils/projects';
import Link from 'next/link';

const ProjectsPage = () => {
    return (
        <>
            <ul>
                {Object.values(techList).map((value) => (
                    <li key={value}>
                        <Link href={`/projects/react`} />
                        {value}
                    </li>
                ))}
            </ul>
            <div className="flex flex-col gap-8">
                {projectsList.map((project) => (
                    <ProjectCard key={project.id} projectId={project.id} />
                ))}
            </div>
        </>
    );
};

export default ProjectsPage;

export async function generateStaticParams() {
    return projectsList.map((project) => ({
        id: project.id
    }));
}