import { defaultSvg } from '@/utils/svgs';
import Link from 'next/link';
import React from 'react';

export interface MyLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    svg?: React.JSX.Element;
}

export const MyLink = ({
    svg = defaultSvg,
    className,
    children,
    href = '#'
}: MyLinkProps) => {
    return (
        <Link
            className={`hover:outline-[currentColor] text-inherit hover:outline-1 hover:outline outline-none text-sm sm:text-lg border-none transition-all flex w-fit items-center rounded-2xl px-8 sm:px-10 py-4 sm:py-5 [&>svg]:hover:rotate-45 [&>svg]:ml-2  [&>svg]:transition-all 
            ${className ? className : ''}`}
            href={href}
        >
            {children}
            {svg}
        </Link>
    );
};

export default MyLink;
