import { smoothScroll } from "../../utils/functions";
import Image from "next/image";
import logoIcon from "../../public/images/logo.png";
import NavBar from "../NavBar/NavBar";
import Link from "next/link";

export const header_testids = {
  header_container: "header_container",
  header_navbar_container: "header_navbar_container",
  header_logo_image: "header_logo_image",
  header_logo_text: "header_logo_text",
};

const Header = () => {
  return (
    <div
      data-testid={header_testids.header_container}
      className="top-0 z-10 flex w-full max-w-7xl justify-between p-2 shadow-md md:fixed md:p-4"
    >
      <Link
        className="flex items-center text-inherit hover:no-underline"
        href="#"
        // onClick={() => smoothScroll()}
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
      </Link>

      <div
        data-testid={header_testids.header_navbar_container}
        className="flex items-center max-md:hidden"
      >
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
