import { techList } from '@/utils/projects';
import Link from 'next/link';
import { ReactNode } from 'react';

const ProjectsPage = ({ params, children }: { params: { filter: string }, children: ReactNode }) => {
    console.log(params.filter);
    
    return (
        <div className="pt-8">
            <div className="flex flex-wrap gap-x-4 gap-y-2">
                {Object.keys(techList).map((key) => (
                    <Link
                        className={`border p-1 cursor-pointer`}
                        key={techList[key]}
                        href={`/projects/${key}`}
                    >
                        {techList[key]}
                    </Link>
                ))}
            </div>
            {children}
        </div>
    );
};

export default ProjectsPage;
