import text from '@/utils/text';
import Link from 'next/link';
import { gitSvg, instSvg, telegramSvg } from '@/utils/svgs';

const Footer = () => {
    const socials = [
        { link: text.links.tg, icon: telegramSvg },
        { link: text.links.git, icon: gitSvg },
        { link: text.links.inst, icon: instSvg }
    ];
  return (
      <div className="container absolute min-w-full bottom-0 flex justify-center gap-12 py-2 sm:py-6 bg-almostBlack">
          {socials.map((obj) => (
              <Link
                  className="hover:scale-125 transition-all text-white"
                  key={obj.link}
                  href={obj.link}
              >
                  {obj.icon}
              </Link>
          ))}
      </div>
  );
}

export default Footer