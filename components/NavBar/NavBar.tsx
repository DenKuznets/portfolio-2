import React, { FC } from "react";
import text from "../../utils/text";

export interface NavBarProps {
  onClick?: () => void;
}

export const NAVBAR_TESTIDS = {
  navbar_container: "navbar_container",
  navbar_list: "navbar_list",
  nabar_list_item: "navbar_list_item",
};

const NavBar: FC<NavBarProps> = ({ onClick }) => {
  const listElements = [];

  for (const [key, value] of Object.entries(text.header.nav)) {
    listElements.push(
      <li data-testid={NAVBAR_TESTIDS.nabar_list_item} key={key}>
        <a onClick={onClick} href={`#${key}`}>
          {value}
        </a>
      </li>,
    );
  }

  return (
    <nav data-testid={NAVBAR_TESTIDS.navbar_container}>
      <ul
        data-testid={NAVBAR_TESTIDS.navbar_list}
        className="flex items-center justify-center gap-y-10 text-center font-serif max-md:min-h-screen max-md:flex-col max-md:text-[2rem] md:gap-x-16"
      >
        {listElements}
      </ul>
    </nav>
  );
};

export default NavBar;
