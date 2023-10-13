import Link from 'next/link';
import React from 'react';

export interface MyLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    violet?: boolean;
}

export const MyLink = ({className, children, href = '#', violet }:MyLinkProps) => {
    return (
        <Link
            className={`hover:outline-black hover:outline-1 hover:outline outline-none text-inherit [&>svg]:stroke-inherit [&>svg]:fill-inherit text-sm sm:text-lg border-none transition-all flex w-fit items-center rounded-2xl px-8 sm:px-10 py-4 sm:py-5 [&>svg]:hover:rotate-45 [&>svg]:ml-2  [&>svg]:transition-all ${className ? className : ''}`}
            href={href}
        >
            {children}

            <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </Link>
    );
};

export default MyLink;
