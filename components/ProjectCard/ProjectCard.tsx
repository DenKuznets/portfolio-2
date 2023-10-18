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
            className={`relative block min-h-[20rem] min-w-[18rem] max-w-md rounded border-2 border-violet text-white shadow [&_img]:hover:saturate-200 [&_#showmore]:hover:bottom-0 ${
                className ? className : ''
            }`}
            href={`${text.links.project}${projectId}`}
        >
            <div className="overflow-hidden">
                <Image
                    className="object-cover blur-sm transition-all duration-300"
                    fill
                    src={`/images/works-preview/${project.img}`}
                    alt={`${project.name} project image`}
                />
            </div>
            <h4 className="absolute left-0 top-0 w-full bg-violet/[.90] p-2 font-bold shadow-xl first-letter:capitalize">
                {project.name}
            </h4>
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <ul className="mb-4 flex flex-wrap items-center gap-2 px-2 ">
                    {project.tech.map((obj) => (
                        <li
                            className="whitespace-nowrap rounded-md border border-dotted border-violet bg-customOrange/[.90] px-2 py-1 text-xs shadow-lg md:text-base"
                            key={obj}
                        >
                            {obj}
                        </li>
                    ))}
                </ul>
                <div
                    id="showmore"
                    className="bottom-[-100%] w-full bg-violet/[.90] p-2 font-sans font-bold transition-all duration-300 lg:absolute"
                >
                    {text.showmore}
                </div>
            </div>
        </Link>
    ) : (
        <div>project not found</div>
    );
};

export default ProjectCard;
