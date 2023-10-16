'use client';
import Image from 'next/image';
import logoIcon from '../../public/images/logo.png';
import NavBar from '../NavBar/NavBar';
import Link from 'next/link';
import { useState } from 'react';
import Burger from '../Burger/Burger';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header
            data-testid={'header'}
            className="w-full top-0 z-10 shadow-md md:fixed md:p-4 flex justify-between p-2 bg-white"
        >
            <Link
                className="flex items-center text-inherit hover:no-underline"
                href="#"
            >
                <Image
                    className="mr-2 h-full w-auto"
                    sizes="(max-width: 768px) 20px, 30px"
                    src={logoIcon}
                    alt="html5 and hammer image"
                />
                <span className="font-bold text-sm sm:text-lg whitespace-nowrap">
                    ｄｅｎ . ｋｕｚｎｅｔｓ
                </span>
            </Link>

            <NavBar
                handleClick={() => setShowMenu(!showMenu)}
                className={`transition-all duration-200 ${
                    showMenu ? 'left-0 top-0' : 'left-[-100vh] '
                }`}
            />

            <Burger
                className="fixed right-6 top-4 sm:top-5 md:hidden z-50 "
                isOpen={showMenu}
                handleClick={() => setShowMenu(!showMenu)}
            />
        </header>
    );
};

export default Header;
