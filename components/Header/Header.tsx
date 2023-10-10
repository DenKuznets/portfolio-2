import { FC } from "react";
import { smoothScroll } from "../../utils/functions";
import NavBar from "../NavBar/NavBar";
import Image from "next/image";
import hamIcon from "../../public/images/burger-menu-svgrepo-com.svg";

export interface HeaderProps {
  onClick: () => void;
}

const Header: FC<HeaderProps> = ({ onClick }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <a href="#" onClick={() => smoothScroll()}>
          <Image width={100} height={100} src="./images/logo.png" alt="" />
          <div className="header__logo-text">ｄｅｎ . ｋｕｚｎｅｔｓ</div>
        </a>
      </div>
      <NavBar />
      <button onClick={onClick}>
        <Image width={30} height={30} src={hamIcon} alt="menu icon" />
      </button>
    </div>
  );
};

export default Header;
