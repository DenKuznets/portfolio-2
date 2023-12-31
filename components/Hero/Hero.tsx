import Image from 'next/image';
import text from '../../utils/text';
import instIcon from '../../public/images/instagram-logo.svg';
import gitIcon from '../../public/images/github-logo.svg';
import avatarPic from '../../public/images/avatar-violet-bg.webp';
import MyLink from '../MyLink/MyLink';
import Link from 'next/link';
import { telegramSvg } from '@/utils/svgs';

export const hero_testids = {
    hero_container: 'hero_container'
};

const Hero = () => {
    const socials = [
        { link: text.links.git, icon: gitIcon },
        { link: text.links.inst, icon: instIcon }
    ];
    return (
        <div
            data-testid={hero_testids.hero_container}
            id="#hero"
            className="container mx-auto flex flex-col items-center px-2 sm:mt-[40px] md:mt-[60px] md:px-4 lg:grid lg:grid-cols-2 lg:justify-between lg:gap-8"
        >
            <div>
                <h1 className="text-5xl font-bold sm:text-6xl">
                    {text.hero.fname} {text.hero.lname}
                </h1>
                <div className="mt-1 flex items-center justify-end md:justify-start">
                    <hr className="mr-4 w-12 border-black md:w-20" />
                    <span className="first-letter:capitalize md:text-2xl">
                        {text.hero.profession}
                    </span>
                </div>
                <p className="color-black-900 mt-10 text-center uppercase  leading-normal md:text-start">
                    {text.hero.stack}
                </p>

                <div className="mt-14 flex flex-col items-center gap-4 md:flex-row ">
                    <MyLink
                        className="bg-violet [&&]:text-white [&&]:hover:text-amber-400 [&&]:hover:outline-none [&>svg]:hover:fill-amber-400"
                        href={text.links.tg}
                        svg={telegramSvg}
                    >
                        {text.hero.contactme}
                    </MyLink>
                    <MyLink
                        className="whitespace-nowrap text-black"
                        href="/projects"
                    >
                        {text.myWorks}
                    </MyLink>
                </div>
                <div className="mb-4 mt-8 flex items-center justify-center md:mt-14 md:justify-start">
                    <span className="text-sm first-letter:capitalize sm:text-lg">
                        {text.hero.socials}:
                    </span>
                    <div className="flex gap-6 px-4">
                        {socials.map((obj) => (
                            <Link
                                className="transition-all hover:scale-125"
                                key={obj.link}
                                href={obj.link}
                            >
                                <Image
                                    width={25}
                                    height={25}
                                    src={obj.icon}
                                    alt={obj.link}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Image
                className="rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] shadow-[15px_15px_50px_rgba(0,0,0,0.2)] max-lg:hidden"
                width={700}
                height={900}
                src={avatarPic}
                alt="man in yellow jacket"
            />
        </div>
    );
};

export default Hero;
