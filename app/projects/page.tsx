import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { projects as projectsList } from '@/utils/projects';
import Link from 'next/link';
import { techList } from '@/utils/projects';
import { SearchParams } from '@/types';
import text from '@/utils/text';

type Props = {
    searchParams: SearchParams;
};

const page = ({ searchParams }: Props) => {
    return (
        <div className="container px-2 pt-8">
            <div className="flex flex-wrap gap-x-4 gap-y-2">
                <Link
                    className={`rounded text-xs border p-1 cursor-pointer uppercase no-underline ${!searchParams.filter && 'bg-red-500'}`}
                    href={text.links.project}
                >
                    {text.all}
                </Link>
                {Object.keys(techList).map((key) => (
                    <Link
                        className={`rounded text-xs border p-1 cursor-pointer ${
                            searchParams.filter === key && 'bg-red-500'
                        }`}
                        key={techList[key]}
                        href={`/projects?filter=${key}`}
                    >
                        {techList[key]}
                    </Link>
                ))}
            </div>

            <div className="py-4 flex flex-col gap-4">
                {projectsList
                    .filter((project) =>
                        searchParams.filter
                            ? project.tech.includes(
                                  techList[searchParams.filter]
                              )
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
