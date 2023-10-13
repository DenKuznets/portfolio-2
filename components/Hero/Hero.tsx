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
                    <Link
                        className="bg-violet text-white hover:text-amber-400 [&>svg]:hover:fill-amber-400 hover:outline-0 text-sm sm:text-lg border-none transition-all flex w-fit items-center rounded-2xl px-8 sm:px-10 py-4 sm:py-5 [&>svg]:hover:rotate-45 [&>svg]:ml-2  [&>svg]:transition-all"
                        href={text.links.tg}
                    >
                        {text.hero.contactme}
                        <svg
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
                    </Link>
                    <MyLink className="whitespace-nowrap" href="/allworks">
                        {text.myWorks}
                    </MyLink>
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
