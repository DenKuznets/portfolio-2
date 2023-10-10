import { FC } from "react";
import { smoothScroll } from "../../utils/functions";
import NavBar from "../NavBar/NavBar";
import Image from "next/image";
import logoIcon from "../../public/images/logo.png";

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="flex justify-between p-2 md:p-4">
      <div>
        <a
          className="flex items-center text-inherit hover:no-underline"
          href="#"
          onClick={() => smoothScroll()}
        >
          <Image
            className="mr-2"
            width={50}
            height={50}
            src={logoIcon}
            alt="html5 and hammer image"
          />
          <div className="font-bold">ｄｅｎ . ｋｕｚｎｅｔｓ</div>
        </a>
      </div>
      <div className="max-md:hidden">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
