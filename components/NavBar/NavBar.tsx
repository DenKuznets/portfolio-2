import React from 'react';
import text from '../../utils/text';
import Link from 'next/link';

export interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {
    handleClick?: () => void;
}

export const links = [
    { text: text.aboutMe, url: 'https://denkuznets.github.io/rsschool-cv/cv' },
    { text: text.examples, url: '/#examples' },
    { text: text.allWorks, url: '/projects' }
];

const NavBar = ({ className, handleClick }: NavBarProps) => {
    const closeNav = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (
            e.target instanceof HTMLElement &&
            e.target.tagName === 'NAV' &&
            handleClick
        ) {
            handleClick();
        }
    };
    return (
        <nav
            onClick={(e) => closeNav(e)}
            className={`fixed z-10 min-w-full bg-white/40 md:static md:flex md:min-w-fit ${
                className ? className : ''
            }`}
        >
            <ul className="flex min-h-screen w-[70vw] flex-col items-center justify-center gap-y-10 bg-white px-8 text-center font-serif text-2xl shadow-lg md:min-h-fit md:w-fit md:min-w-0 md:flex-row md:justify-end md:gap-x-16 md:px-0 md:text-xl md:shadow-none ">
                {links.map((link) => (
                    <li key={link.url}>
                        <Link
                            className="text-gray-500 hover:text-almostBlack"
                            onClick={handleClick}
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
