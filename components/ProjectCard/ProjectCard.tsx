import Link from 'next/link';
import React from 'react';
import { projects } from '../../utils/projects';
import Image from 'next/image';
import text from '@/utils/text';

export interface ProjectCardProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    projectId: number;
}

const ProjectCard = ({ className, projectId }: ProjectCardProps) => {
    const project = projects.find((proj) => proj.id === projectId);

    return project ? (
        <Link
            className={`relative block min-h-[20rem] max-w-md min-w-[18rem] rounded border-2 border-zinc-900 text-white shadow [&>img]:hover:saturate-200 ${
                className ? className : ''
            }`}
            href={`${text.links.project}${projectId}`}
        >
            <Image
                className="object-cover blur-sm transition-all duration-300"
                fill
                src={`/images/works-preview/${project.img}`}
                alt={`${project.name} project image`}
            />
            <h4 className="absolute left-0 top-0 w-full bg-zinc-900/[.75] p-2 font-bold shadow-xl first-letter:capitalize">
                {project.name}
            </h4>
            <div className="absolute bottom-0 left-0 w-full">
                <ul className="mb-4 flex flex-wrap items-center gap-2 px-2 ">
                    {project.tech.map((obj) => (
                        <li
                            className="border-currentColor whitespace-nowrap rounded-md border border-dotted bg-zinc-900/[.75] px-2 py-1 text-xs md:text-base"
                            key={obj}
                        >
                            {obj}
                        </li>
                    ))}
                </ul>
                <div className="p-2 bg-zinc-900/[.75] font-sans font-bold">
                    {text.showmore}
                </div>
            </div>
        </Link>
    ) : (
        <div>project not found</div>
    );
};

export default ProjectCard;
