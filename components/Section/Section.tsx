import React, { FC } from 'react';
import { projects } from '../../utils/projects';
import Link from 'next/link';
import MyLink from '../MyLink/MyLink';
import text from '../../utils/text';

export interface SectionProps {
    id: number;
}

const Section: FC<SectionProps> = ({ id }) => {
    const projText = projects.find((proj) => proj.id === id);
    return projText ? (
        <div className="container">
            <h3 className="font-bold leading-normal mb-4">{projText.name}</h3>
            <ul className="flex flex-wrap gap-3 items-center mb-4">
                {projText.tech.map((obj) => (
                    <li
                        className="whitespace-nowrap px-4 py-2 border-dotted rounded-md border-black border"
                        key={obj}
                    >
                        {obj}
                    </li>
                ))}
            </ul>
            <Link href={projText.github}>Github</Link> |{' '}
            <Link href={projText.demo}>Demo</Link>
            <MyLink>{text.showmore}</MyLink>
        </div>
    ) : (
        <div>project not found</div>
    );
};

export default Section;
