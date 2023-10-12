import React, { FC } from "react";
import text from "../../utils/text";
import Link from "next/link";

export interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {
  handleLinkClick?: () => void;
}

export const navbar_testids = {
  navbar_container: "navbar_container",
  navbar_list: "navbar_list",
  nabar_list_item: "navbar_list_item",
};

const NavBar = ({ handleLinkClick} : NavBarProps) => {
  const listElements = [];

  for (const [key, value] of Object.entries(text.header.nav)) {
    listElements.push(
        <li data-testid={navbar_testids.nabar_list_item} key={key}>
            <Link
                className="text-gray-500 hover:text-almostBlack"
                onClick={handleLinkClick}
                href={`#${key}`}
            >
                {value}
            </Link>
        </li>
    );
  }

  return (
    <nav data-testid={navbar_testids.navbar_container}>
      <ul
        data-testid={navbar_testids.navbar_list}
        className="flex items-center justify-center gap-y-10 text-center font-serif max-md:min-h-screen max-md:flex-col max-md:text-[2rem] md:gap-x-16"
      >
        {listElements}
      </ul>
    </nav>
  );
};

export default NavBar;
