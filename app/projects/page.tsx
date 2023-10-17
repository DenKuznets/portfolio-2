import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { projects as projectsList } from '@/utils/projects';
import Link from 'next/link';
import { techList } from '@/utils/projects';
import { SearchParams } from '@/types';

type Props = {
    searchParams: SearchParams;
};

const page = ({ searchParams }: Props) => {
    console.log('searchparams', searchParams);
    return (
        <div className="pt-8">
            <div className="flex flex-wrap gap-x-4 gap-y-2">
                {Object.keys(techList).map((key) => (
                    <Link
                        className={`border p-1 cursor-pointer ${searchParams.filter === key && 'bg-red-500'}`}
                        key={techList[key]}
                        href={`/projects?filter=${key}`}
                    >
                        {techList[key]}
                    </Link>
                ))}
            </div>

            <div>
                {projectsList
                    .filter((project) =>
                        searchParams.filter
                            ? project.tech.includes(techList[searchParams.filter])
                            : true
                    )
                    .map((project) => (
                        <ProjectCard key={project.id} projectId={project.id} />
                    ))}
            </div>
        </div>
    );
};

export default page;
