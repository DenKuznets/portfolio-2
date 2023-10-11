import Link from 'next/link';
import React, { FC } from 'react';

export interface MyLinkProps {
    children?: string;
    violet?: boolean;
    href?: string;
}

const linkStyle =
    'transition-all hover:border flex w-fit items-center rounded-2xl border-black  px-10 py-5 text-black  [&>svg]:hover:rotate-45 [&>svg]:ml-2 [&>svg]:transition-all';

const violetStyle =
    'bg-violet text-white hover:text-amber-400 [&>svg]:hover:fill-amber-400 border-none';

export const MyLink: FC<MyLinkProps> = ({ children, href = '#', violet }) => {
    return (
        <Link
            className={`${linkStyle} ${violet ? violetStyle : ''}`}
            href={href}
        >
            {children}
            {violet ? (
                <svg
                    fill="white"
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="Location_Arrow_1" data-name="Location Arrow 1">
                        <path d="M14.472,20.937a1.438,1.438,0,0,1-1.3-.812L10.3,14.343a1.418,1.418,0,0,0-.642-.641L3.874,10.831A1.462,1.462,0,0,1,4.06,8.136l14.952-5a1.46,1.46,0,0,1,1.849,1.847l-5,14.952a1.439,1.439,0,0,1-1.284.994C14.543,20.936,14.507,20.937,14.472,20.937ZM19.479,4.063a.488.488,0,0,0-.149.024h0l-14.952,5a.46.46,0,0,0-.058.849L10.1,12.805A2.444,2.444,0,0,1,11.2,13.9l2.87,5.782a.443.443,0,0,0,.445.255.45.45,0,0,0,.4-.312l5-14.953a.462.462,0,0,0-.433-.607Z" />
                    </g>
                </svg>
            ) : (
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            )}
        </Link>
    );
};

export default MyLink;