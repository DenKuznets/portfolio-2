import React from 'react';
import text from '../../utils/text';
import Link from 'next/link';

export interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {
    handleClick?: () => void;
}

export const links = [
    { text: text.aboutMe, url: '#hero' },
    { text: text.examples, url: '#examples' }
];

const NavBar = ({ className, handleClick }: NavBarProps) => {
    const closeNav = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.target instanceof HTMLElement && e.target.tagName === "NAV" && handleClick) {
            console.log(e.target.tagName);
            handleClick();
        }
    };
    return (
        <nav
            onClick={(e) => closeNav(e)}
            className={`fixed md:static z-10 min-w-full md:min-w-fit bg-white/40 md:flex ${
                className ? className : ''
            }`}
        >
            <ul className="flex-col w-[70vw] md:w-fit px-8 md:px-0 bg-white flex items-center justify-center gap-y-10 text-center font-serif min-h-screen md:min-w-0 md:min-h-fit md:shadow-none md:flex-row md:justify-end text-2xl md:text-xl shadow-lg md:gap-x-16 ">
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
