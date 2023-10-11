import { FC } from 'react';
import Image from 'next/image';
import text from '../../utils/text';
import instIcon from '../../public/images/instagram-logo.svg';
import gitIcon from '../../public/images/github-logo.svg';
import avatarPic from '../../public/images/avatar-violet-bg.webp';

export const hero_testids = {
    hero_container: 'hero_container',
    hero_text: 'hero_text',
    hero_text_links: 'hero_text_links',
    hero_text_socials: 'hero_text_socials',
    hero_image: 'hero_image'
};

const Hero = () => {
    return (
        <div
            data-testid={hero_testids.hero_container}
            className="container mx-auto flex flex-col items-center p-2 md:p-4 lg:grid lg:grid-cols-2 lg:justify-between lg:gap-8"
        >
            <div data-testid={hero_testids.hero_text}>
                <h1 className="font-bold">
                    {text.hero.fname} {text.hero.lname}
                </h1>
                <div className="mt-1 flex items-center justify-end md:justify-start">
                    <hr className="mr-4 w-12 border-black md:w-20" />
                    <span className="first-letter:capitalize md:text-2xl">
                        {text.hero.profession}
                    </span>
                </div>
                <p className="color-black-900 mt-10 text-center  uppercase leading-normal">
                    {text.hero.stack}
                </p>

                <div
                    data-testid={hero_testids.hero_text_links}
                    className="mt-14 flex flex-col items-center gap-4 md:flex-row "
                >
                    
                </div>
                <div
                    data-testid={hero_testids.hero_text_socials}
                    className="flex justify-center items-center mt-14 md:justify-start"
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
          
            <Image
                data-testid={hero_testids.hero_image}
                className="max-lg:hidden rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] shadow-[15px_15px_50px_rgba(0,0,0,0.2)]"
                width={700}
                height={900}
                src={avatarPic}
                alt="man in yellow jacket"
            />
        </div>
    );
};

export default Hero;
