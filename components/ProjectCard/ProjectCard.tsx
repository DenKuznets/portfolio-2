import Link from 'next/link';
import React from 'react';
import { projects } from '../../utils/projects';
import Image from 'next/image';

export interface ProjectCardProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    projectId: number;
}

const ProjectCard = ({ className, projectId }: ProjectCardProps) => {
    const project = projects.find((proj) => proj.id === projectId);

    return project ? (
        <Link
            className={`container [&>img]:hover:saturate-200 shadow border-2 border-zinc-900 rounded block max-w-sm min-h-[30rem] relative ${
                className ? className : ''
            }`}
            href={`/allworks/${projectId}`}
        >
            <Image
                className="transition-all duration-300 blur-sm object-cover"
                fill
                src={`/images/works-preview/${project.img}`}
                alt={`${project.name} project image`}
            />
            <h4 className="first-letter:capitalize shadow-xl font-bold text-white p-4 absolute top-0 left-0 bg-zinc-900/[.75] w-full">
                {project.name}
            </h4>
            <ul className="absolute bottom-0 left-0 flex px-4 flex-wrap gap-3 items-center mb-4">
                {project.tech.map((obj) => (
                    <li
                        className="whitespace-nowrap px-4 py-2 border-dotted rounded-md border-white text-white bg-zinc-900/[.75] border"
                        key={obj}
                    >
                        {obj}
                    </li>
                ))}
            </ul>
        </Link>
    ) : (
        <div>project not found</div>
    );
};

export default ProjectCard;
