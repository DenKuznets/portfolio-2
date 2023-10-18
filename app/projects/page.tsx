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
        <div className="container px-2 pt-8 sm:pt-24">
            <div className="mx-auto flex  max-w-3xl flex-wrap justify-center gap-x-4 gap-y-2 sm:pb-6">
                <Link
                    className={`md:text-base cursor-pointer rounded border p-1 text-xs uppercase  no-underline sm:p-2 sm:text-sm ${
                        !searchParams.filter && 'bg-red-500'
                    }`}
                    href={text.links.project}
                >
                    {text.all}
                </Link>
                {Object.keys(techList).map((key) => (
                    <Link
                        className={`md:text-base cursor-pointer rounded border p-1 text-xs sm:p-2  sm:text-sm ${
                            searchParams.filter === key && 'bg-red-500'
                        }`}
                        key={techList[key]}
                        href={`/projects?filter=${key}`}
                    >
                        {techList[key]}
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-4 py-4">
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
