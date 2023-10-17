import { techList } from '@/utils/projects';
import Link from 'next/link';
import { ReactNode } from 'react';

const ProjectsLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <ul>
                {Object.values(techList).map((value) => (
                    <li key={value}>
                        <Link href={`/projects/react`} />
                        {value}
                    </li>
                ))}
            </ul>
            {children}
        </>
    );
};

export default ProjectsLayout;
