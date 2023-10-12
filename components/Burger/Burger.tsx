import Image from 'next/image';
import React from 'react';
import hamIcon from '../../public/images/burger-menu-svgrepo-com.svg';

export interface BurgerProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    handleClick: () => void;
}

const Burger = ({ handleClick }: BurgerProps) => {
    return (
        <button onClick={handleClick}>
            <Image
                className="relative md:hidden"
                width={30}
                height={30}
                src={hamIcon}
                alt="menu icon"
            />
        </button>
    );
};

export default Burger;
