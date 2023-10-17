import React from 'react';
import { getProject } from '../../utils/projects';
import Link from 'next/link';
import MyLink from '../MyLink/MyLink';
import text from '../../utils/text';
import Image from 'next/image';
import replaceURL from '@/utils/replaceURL';

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    projectId: number;
    description?: boolean;
}

const Section = ({ className, projectId, description }: SectionProps) => {
    const project = getProject(projectId);
    return project ? (
        <div
            data-testid="section"
            className={`container px-2 md:px-4 lg:grid grid-cols-2 items-center lg:gap-8 py-8 justify-between ${
                className ? className : ''
            }`}
        >
            <div>
                <h3 className="font-bold leading-normal mb-4 first-letter:capitalize">
                    {project.name}
                </h3>
                <ul className="flex flex-wrap gap-3 items-center mb-4">
                    {project.tech.map((obj) => (
                        <li
                            className="whitespace-nowrap px-4 py-2 border-dotted rounded-md border-[currentColor] border text-sm sm:text-lg"
                            key={obj}
                        >
                            {obj}
                        </li>
                    ))}
                </ul>
                <Link className="text-sm sm:text-lg" href={project.github}>
                    Github
                </Link>{' '}
                |{' '}
                <Link className="text-sm sm:text-lg" href={project.demo}>
                    Demo
                </Link>
                {description ? (
                    <p className="break-words py-8">
                        {replaceURL(project.description)}
                    </p>
                ) : (
                    <MyLink
                        href={`${text.links.project}${projectId}`}
                        className="mt-4 mb-4 lg:mb-0 hover:outline-inherit"
                    >
                        {text.showmore}
                    </MyLink>
                )}
            </div>

            <Link
                className="relative mt-8 lg:mt-0"
                href={`${text.links.project}${projectId}`}
            >
                <Image
                    className="filter-none shadow-2xl hover:saturate-150 transition-all duration-300"
                    width={800}
                    height={600}
                    src={`/images/works-preview/${project.img}`}
                    alt={`${project.name} project image`}
                />
            </Link>
        </div>
    ) : (
        <div>project not found</div>
    );
};

export default Section;
