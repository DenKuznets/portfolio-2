import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { projects as projectsList, techListType } from '@/utils/projects';
import Link from 'next/link';
import { techList } from '@/utils/projects';
import { SearchParams } from '@/types';
import text from '@/utils/text';

type Props = {
    searchParams: SearchParams;
};

const page = ({ searchParams }: Props) => {
    return (
        <div className="container px-2 pt-8 sm:pt-24 md:px-4">
            <div className="mx-auto flex  max-w-3xl flex-wrap justify-center gap-x-4 gap-y-2 sm:pb-6">
                <Link
                    className={`cursor-pointer rounded border p-1 text-xs uppercase no-underline  sm:p-2 sm:text-sm md:text-base ${
                        !searchParams.filter && 'bg-red-500'
                    }`}
                    href={text.links.project}
                >
                    {text.all}
                </Link>
                {Object.keys(techList).map((key) => (
                    <Link
                        className={`cursor-pointer rounded border p-1 text-xs sm:p-2 sm:text-sm  md:text-base ${
                            searchParams.filter === key && 'bg-red-500'
                        }`}
                        key={techList[key as keyof techListType]}
                        href={`/projects?filter=${key}`}
                    >
                        {techList[key as keyof techListType]}
                    </Link>
                ))}
            </div>

            <div className="flex flex-col gap-4 py-4 md:flex-row flex-wrap justify-center">
                {projectsList
                    .filter((project) =>
                        searchParams.filter
                            ? project.tech.includes(
                                  techList[
                                      searchParams.filter as keyof techListType
                                  ]
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
