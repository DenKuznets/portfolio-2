import Image from 'next/image';
import logoIcon from '../../public/images/logo.png';
import NavBar from '../NavBar/NavBar';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="top-0 z-10 flex w-full max-w-7xl justify-between p-2 shadow-md md:fixed md:p-4">
            <Link
                className="flex items-center text-inherit hover:no-underline"
                href="#"
            >
                <Image
                    className="mr-2"
                    width={50}
                    height={50}
                    src={logoIcon}
                    alt="html5 and hammer image"
                />
                <span className="font-bold">ｄｅｎ . ｋｕｚｎｅｔｓ</span>
            </Link>

            <NavBar className="flex items-center max-md:hidden" />
        </header>
    );
};

export default Header;
