import React from 'react';
import text from '../../utils/text';
import Link from 'next/link';

export interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {
    handleLinkClick?: () => void;
}

export const links = [
    { text: text.aboutMe, url: '#hero' },
    { text: text.examples, url: '#examples' }
];

const NavBar = ({className, handleLinkClick }: NavBarProps) => {
    return (
        <nav className={className}>
            <ul className="flex items-center justify-center gap-y-10 text-center font-serif max-md:min-h-screen max-md:flex-col max-md:text-[2rem] md:gap-x-16">
                {links.map((link) => (
                    <li key={link.url}>
                        <Link
                            className="text-gray-500 hover:text-almostBlack"
                            onClick={handleLinkClick}
                            href={link.url}
                        >
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;
