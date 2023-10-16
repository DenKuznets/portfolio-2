// 'use client';

// import { Burger } from '@/utils/svgs';
import React from 'react';

export interface BurgerProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    handleClick?: () => void;
    isOpen?: boolean;
}

const Burger = ({ handleClick, isOpen = false }: BurgerProps) => {
    // console.log(isOpen);
    return (
        <button
            className="fixed right-6 top-6 sm:hidden z-50"
            onClick={handleClick}
            aria-label="Hamburger Menu"
        >
            <div className="w-6 cursor-pointer transition-all ease duration-300">
                <div className="relative">
                    <span
                        className="absolute top-0 inline-block w-full h-0.5 bg-almostBlack rounded transition-all ease duration-200"
                        style={{
                            transform: isOpen
                                ? 'rotate(-45deg) translateY(0)'
                                : 'rotate(0deg) translateY(6px)'
                        }}
                    >
                        &nbsp;
                    </span>
                    <span
                        className="absolute top-0 inline-block w-full h-0.5 bg-almostBlack rounded transition-all ease duration-200"
                        style={{
                            opacity: isOpen ? 0 : 1
                        }}
                    >
                        &nbsp;
                    </span>
                    <span
                        className="absolute top-0 inline-block w-full h-0.5 bg-almostBlack rounded transition-all ease duration-200"
                        style={{
                            transform: isOpen
                                ? 'rotate(45deg) translateY(0)'
                                : 'rotate(0deg) translateY(-6px)'
                        }}
                    >
                        &nbsp;
                    </span>
                </div>
            </div>
        </button>
    );
};

export default Burger;
