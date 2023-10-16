import { projects as projectsList } from '@/utils/projects';
import ProjectCard from '@/components/ProjectCard/ProjectCard';

const projects = () => {
    return (
        <div>
            <div className='flex flex-col gap-8'>
                {projectsList.map((proj) => (
                    <ProjectCard key={proj.id} projectId={proj.id} />
                ))}
            </div>
        </div>
    );
};

export default projects;
