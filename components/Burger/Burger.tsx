import Image from "next/image";
import React, { FC } from "react";
import hamIcon from "../../public/images/burger-menu-svgrepo-com.svg";

export interface BurgerProps {
  onClick: () => void;
}

const Burger: FC<BurgerProps> = ({ onClick }) => {
  return (
    <div>
      <button className="z- relative md:hidden" onClick={onClick}>
        <Image width={30} height={30} src={hamIcon} alt="menu icon" />
      </button>
    </div>
  );
};

export default Burger;
