import Image from 'next/image';
import text from '../../utils/text';
import instIcon from '../../public/images/instagram-logo.svg';
import gitIcon from '../../public/images/github-logo.svg';
import avatarPic from '../../public/images/avatar-violet-bg.webp';
import MyLink from '../MyLink/MyLink';
import Link from 'next/link';

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
            className="container md:mt-[90px] mx-auto flex flex-col items-center lg:grid lg:grid-cols-2 lg:justify-between lg:gap-8 uhd:max-w-[1920px]"
        >
            <div>
                <h1 className="font-bold text-5xl sm:text-6xl">
                    {text.hero.fname} {text.hero.lname}
                </h1>
                <div className="mt-1 flex items-center justify-end md:justify-start">
                    <hr className="mr-4 w-12 border-black md:w-20" />
                    <span className="first-letter:capitalize md:text-2xl">
                        {text.hero.profession}
                    </span>
                </div>
                <p className="color-black-900 mt-10 text-center md:text-start  uppercase leading-normal">
                    {text.hero.stack}
                </p>

                <div className="mt-14 flex flex-col items-center gap-4 md:flex-row ">
                    <MyLink violet href={text.links.tg}>
                        {text.hero.contactme}
                    </MyLink>
                    <MyLink className='whitespace-nowrap' href="/allworks">{text.myWorks}</MyLink>
                </div>
                <div className="flex justify-center items-center mt-14 md:justify-start">
                    <span className="first-letter:capitalize">
                        {text.hero.socials}:
                    </span>
                    <div className="flex px-4 gap-6">
                        {socials.map((obj) => (
                            <Link
                                className="hover:scale-125 transition-all"
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
