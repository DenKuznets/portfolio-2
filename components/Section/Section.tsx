import React, { MutableRefObject, useRef } from 'react';
import { projects, getProject } from '../../utils/projects';
import Link from 'next/link';
import MyLink from '../MyLink/MyLink';
import text from '../../utils/text';
import Image from 'next/image';

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    projectId: number;
}

export const section_testids = {
    section_text: 'section_text',
    section_image: 'section_image'
};

const Section = ({ projectId }: SectionProps) => {
    const project = getProject(projectId);
    return project ? (
        <div className="container lg:flex lg:gap-8 justify-between">
            <div data-testid={section_testids.section_text}>
                <h3 className="font-bold leading-normal mb-4">
                    {project.name}
                </h3>
                <ul className="flex flex-wrap gap-3 items-center mb-4">
                    {project.tech.map((obj) => (
                        <li
                            className="whitespace-nowrap px-4 py-2 border-dotted rounded-md border-black border"
                            key={obj}
                        >
                            {obj}
                        </li>
                    ))}
                </ul>
                <Link href={project.github}>Github</Link> |{' '}
                <Link href={project.demo}>Demo</Link>
                <MyLink
                    href={`/allworks/${projectId}`}
                    className="mt-4"
                >
                    {text.showmore}
                </MyLink>
            </div>

            <Link
                data-testid={section_testids.section_image}
                className="relative hidden md:block mt-8 shadow-2xl overflow-hidden lg:mt-0"
                href={`/allworks/${projectId}`}
            >
                <Image
                    width={800}
                    height={600}
                    src={`/images/works-preview/${project.img}`}
                    alt={`${project.img}`}
                />
            </Link>
        </div>
    ) : (
        <div>project not found</div>
    );
};

export default Section;