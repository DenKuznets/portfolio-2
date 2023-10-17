'use client';
import { projects as projectsList } from '@/utils/projects';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import { techList } from '@/utils/projects';
import Link from 'next/link';
import { useState } from 'react';

const ProjectsPage = ({ params }: StaticParamsType) => {
    const [filter, setFilter] = useState<string>();
    // const filteredList = projectsList
    return (
        <div className='pt-8'>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {Object.values(techList).map((value) => (
                    <li
                        onClick={() => setFilter(value)}
                        className={`border p-1 cursor-pointer ${filter && (filter === value) ? 'bg-red':""}`}
                        key={value}
                    >
                        {/* <Link href={`/projects/react`} /> */}
                        {value}
                    </li>
                ))}
            </ul>
            <div className="flex flex-col gap-8">
                {projectsList
                    .filter((project) =>
                        filter ? project.tech.includes(filter) : true
                    )
                    .map((project) => (
                        <ProjectCard key={project.id} projectId={project.id} />
                    ))}
            </div>
        </div >
    );
};

export default ProjectsPage;

export interface StaticParamsType {
    params: {
        id: string;
    };
}
