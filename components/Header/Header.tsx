import { FC } from "react";
import { smoothScroll } from "../../utils/functions";
import Image from "next/image";
import logoIcon from "../../public/images/logo.png";
import NavBar from "../NavBar/NavBar";

export const header_testids = {
  header_container: "header_container",
  header_logo_image: "header_logo_image",
  header_logo_text: "header_logo_text",
};

const Header: FC = () => {
  return (
    <div
      data-testid={header_testids.header_container}
      className="flex justify-between p-2 md:p-4"
    >
      <div>
        <a
          className="flex items-center text-inherit hover:no-underline"
          href="#"
          onClick={() => smoothScroll()}
        >
          <Image
            data-testid={header_testids.header_logo_image}
            className="mr-2"
            width={50}
            height={50}
            src={logoIcon}
            alt="html5 and hammer image"
          />
          <div
            data-testid={header_testids.header_logo_text}
            className="font-bold"
          >
            ｄｅｎ . ｋｕｚｎｅｔｓ
          </div>
        </a>
      </div>
      <div className="max-md:hidden">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
