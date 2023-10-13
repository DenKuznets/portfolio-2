import Image from 'next/image';
import logoIcon from '../../public/images/logo.png';
import NavBar from '../NavBar/NavBar';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="w-full top-0 z-10 shadow-md md:fixed md:p-4 flex justify-between p-2 bg-white">
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
