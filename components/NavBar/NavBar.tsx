import React, { FC } from "react";
import text from "../../utils/text";

export interface NavBarProps {
  onClick?: () => void;
}

const NavBar: FC<NavBarProps> = ({ onClick }) => {
  const listElements = [];

  for (const [key, value] of Object.entries(text.header.nav)) {
    listElements.push(
      <li key={key}>
        <a onClick={onClick} href={`#${key}`}>
          {value}
        </a>
      </li>,
    );
  }

  return (
    <nav>
      <ul className="flex items-center justify-center gap-y-10 text-center font-serif max-md:min-h-screen max-md:flex-col max-md:text-[2rem] md:gap-x-16">
        {listElements}
      </ul>
    </nav>
  );
};

export default NavBar;
