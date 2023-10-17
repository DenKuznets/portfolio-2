import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { projects as projectsList, techList } from '@/utils/projects';

const page = ({ params }: { params: { filter: string } }) => {
    console.log(params.filter);
    return (
        <div>
            {projectsList
                .filter((project) =>
                    params.filter ? project.tech.includes(techList[params.filter]) : true
                )
                .map((project) => (
                    <ProjectCard key={project.id} projectId={project.id} />
                ))}
        </div>
    );
};

export default page;
