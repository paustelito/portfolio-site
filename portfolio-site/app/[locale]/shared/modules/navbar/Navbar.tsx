import Link from "next/link";
import { FC } from "react";
import { useTranslations } from 'next-intl';
import LanguageChanger from "./languageChanger/LanguageChanger";
import { usePathname } from "next/navigation";

const Navbar: FC = () => {
    const t = useTranslations('Navbar');
    const path = usePathname();
    const current = path.replace(/^\/(es|en)(?=\/)/, '');

    const textStyle = 'font-heading text-gray hover:text-secondary text-[18px]';

    return (
        <div className="z-50 w-full grid grid-cols-3 justify-between">
            {/* Go back to home */}
            <Link href='/'>
                <span className={`${textStyle}`}>{t('name')}</span>
            </Link>

            {/* Navigation links */}
            <div className='flex gap-x-20 justify-center'>
                <Link href='/'>
                    <span className={`${textStyle} ${current === '/en' ? 'text-primary' : '' }`}>{t('home')}</span>
                </Link>
                <Link href='/about'>
                    <span className={`${textStyle} ${current === '/about' ? 'text-primary' : '' }`}>{t('about')}</span>
                </Link>
                <Link href='/work'>
                    <span className={`${textStyle} ${current === '/work' ? 'text-primary' : '' }`}>{t('work')}</span>
                </Link>
                <Link href='/contact'>
                    <span className={`${textStyle} ${current === '/contact' ? 'text-primary' : '' }`}>{t('contact')}</span>
                </Link>
            </div>

            {/* Language changer */}
            <div className='flex ml-auto'>
                <LanguageChanger />
            </div>
        </div>
    );
}

export default Navbar;