import { FC, useState } from "react";
import { smoothScroll } from "../../utils/functions";
import NavBar from "../NavBar/NavBar";
import Image from "next/image";
import text from "../../utils/text";
import hamIcon from "../../public/images/burger-menu-svgrepo-com.svg";

export interface HeaderProps {
  onClick: () => void;
}

const Header: FC<HeaderProps> = ({ onClick }) => {
  const [showMenu, setShowMenu] = useState(false);
  const listElements = [];
  //   const text = useLocalization().local;

  for (const [key, value] of Object.entries(text.header.nav)) {
    listElements.push(
      <li key={key}>
        <a
          onClick={() => {
            setShowMenu(!showMenu);
            smoothScroll();
          }}
          href={`#${key}`}
        >
          {value}
        </a>
      </li>,
    );
  }

  return (
    // <HeaderStyled>
    <div className="header">
      <div className="header__logo">
        <a href="#" onClick={() => smoothScroll()}>
          <Image width={100} height={100} src="./images/logo.png" alt="" />
          <div className="header__logo-text">ｄｅｎ . ｋｕｚｎｅｔｓ</div>
        </a>
      </div>
      <NavBar />
      <button onClick={onClick}>
        <Image
          width={30}
          height={30}
          //   src="./images/burger-menu-svgrepo-com.svg"
          src={hamIcon}
          alt="menu icon"
        />
      </button>
    </div>
    // </HeaderStyled>
  );
};

export default Header;
