import { burger } from '@/utils/svgs';
import React from 'react';

export interface BurgerProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    handleClick?: () => void;
}

const Burger = ({ handleClick }: BurgerProps) => {
    return (
        <button
            onClick={handleClick}
            className="fixed right-2 top-3 transition-all hover:text-violet"
        >
            {burger}
        </button>
    );
};

export default Burger;
