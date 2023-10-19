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
            className={`container grid-cols-2 items-center justify-between px-2 py-8 md:px-4 lg:grid lg:gap-8 ${
                className ? className : ''
            }`}
        >
            <div>
                <h3 className="mb-4 font-bold leading-normal first-letter:capitalize">
                    {project.name}
                </h3>
                <ul className="mb-4 flex flex-wrap items-center gap-3">
                    {project.tech.map((obj) => (
                        <li
                            className="whitespace-nowrap rounded-md border border-dotted border-[currentColor] px-4 py-2 text-sm sm:text-lg"
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
                        className="mb-4 mt-4 hover:outline-inherit lg:mb-0"
                    >
                        {text.showmore}
                    </MyLink>
                )}
            </div>

            <Link className="relative mt-8 lg:mt-0" href={project.demo}>
                <Image
                    className="shadow-2xl filter-none transition-all duration-300 hover:saturate-150"
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
