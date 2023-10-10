import { FC } from 'react';
import Image from 'next/image';
import text from '../../utils/text';
import vkIcon from '../../public/images/vk-logo.svg';
import instIcon from '../../public/images/instagram-logo.svg';
import gitIcon from '../../public/images/github-logo.svg';
import avatarPic from '../../public/images/avatar-violet-bg.webp';
import Link from 'next/link';

export const hero_testids = {
    hero_container: 'hero_container',
    hero_text: 'hero_text',
    hero_text_buttons: 'hero_text_buttons',
    hero_text_socials: 'hero_text_socials',
    hero_image: 'hero_image'
};

const Hero = () => {
    return (
        <div
            data-testid={hero_testids.hero_container}
            className="flex flex-col items-center p-2 md:p-4"
        >
            <div data-testid={hero_testids.hero_text}>
                <h1 className="font-bold">
                    {text.hero.fname} {text.hero.lname}
                </h1>
                <div className="mt-1 flex items-center justify-end">
                    <hr className="mr-4 w-12 border-black md:w-20" />
                    <span className="first-letter:capitalize">
                        {text.hero.profession}
                    </span>
                </div>
                <p className="color-black-900 mt-10 text-center uppercase leading-normal">
                    {text.hero.stack}
                </p>

                <div
                    data-testid={hero_testids.hero_text_buttons}
                    className="mt-14 flex flex-col items-center gap-4"
                >
                    <a
                        className="flex w-fit items-center rounded-2xl border-none bg-violet px-10 py-5 text-base text-white"
                        href="https://t.me/DenKuznets"
                    >
                        {text.hero.contactme}
                        <svg
                            className=" ml-2 md:transition-all md:hover:rotate-45"
                            fill="white"
                            width="30px"
                            height="30px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                id="Location_Arrow_1"
                                data-name="Location Arrow 1"
                            >
                                <path d="M14.472,20.937a1.438,1.438,0,0,1-1.3-.812L10.3,14.343a1.418,1.418,0,0,0-.642-.641L3.874,10.831A1.462,1.462,0,0,1,4.06,8.136l14.952-5a1.46,1.46,0,0,1,1.849,1.847l-5,14.952a1.439,1.439,0,0,1-1.284.994C14.543,20.936,14.507,20.937,14.472,20.937ZM19.479,4.063a.488.488,0,0,0-.149.024h0l-14.952,5a.46.46,0,0,0-.058.849L10.1,12.805A2.444,2.444,0,0,1,11.2,13.9l2.87,5.782a.443.443,0,0,0,.445.255.45.45,0,0,0,.4-.312l5-14.953a.462.462,0,0,0-.433-.607Z" />
                            </g>
                        </svg>
                    </a>

                    <Link
                        className="flex w-fit items-center rounded-2xl px-10 py-5 text-base font-bold text-black"
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                        href="allworks"
                    >
                        {text.myWorks}
                        <svg
                            className="rotate-45"
                            width="30px"
                            height="30px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 4V20M12 4L8 8M12 4L16 8"
                                stroke="#000000"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </Link>
                </div>
                <div
                    data-testid={hero_testids.hero_text_socials}
                    className="flex justify-center items-center mt-14"
                >
                    <span className="first-letter:capitalize">
                        {text.hero.socials}:
                    </span>
                    <div className="flex">
                        <a href="https://www.instagram.com/denis_kyznecov/">
                            <div className="social-icon-container">
                                <Image
                                    width={25}
                                    height={25}
                                    src={instIcon}
                                    alt="instagram-logo"
                                />
                            </div>
                        </a>
                        <a href="https://github.com/DenKuznets">
                            <div className="social-icon-container">
                                <Image
                                    width={25}
                                    height={25}
                                    src={gitIcon}
                                    alt="github-logo"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div data-testid={hero_testids.hero_image}>
                <div className="hero__img-content">
                    <Image
                        className="max-md:hidden"
                        width={500}
                        height={500}
                        src={avatarPic}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
