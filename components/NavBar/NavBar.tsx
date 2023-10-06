import React, { FC } from "react";
// import text from "@/utils/text";
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
            </li>
        );
    }

    return (
        <nav>
            <ul>{listElements}</ul>
        </nav>
    );
};

export default NavBar;
