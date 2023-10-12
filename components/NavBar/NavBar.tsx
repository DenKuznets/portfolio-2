import React from "react";
import text from "../../utils/text";
import Link from "next/link";

export interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {
  handleLinkClick?: () => void;
}

const NavBar = ({ handleLinkClick} : NavBarProps) => {
  const listElements = [];

  for (const [key, value] of Object.entries(text.header.nav)) {
    listElements.push(
        <li key={key}>
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
    <nav>
      <ul
        className="flex items-center justify-center gap-y-10 text-center font-serif max-md:min-h-screen max-md:flex-col max-md:text-[2rem] md:gap-x-16"
      >
        {listElements}
      </ul>
    </nav>
  );
};

export default NavBar;
