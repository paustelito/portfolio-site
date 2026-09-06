import Link from "next/link";
import { FC } from "react";
import { useTranslations } from 'next-intl';
import LanguageChanger from "./languageChanger/LanguageChanger";

const Navbar: FC = () => {
    const t = useTranslations('Navbar');

    const textStyle = 'text-gray hover:text-secondary text-[18px]';

    return (
        <div className="z-50 w-full grid grid-cols-3 justify-between">
            {/* Go back to home */}
            <Link href='/'>
                <span className={`${textStyle}`}>{t('name')}</span>
            </Link>

            {/* Navigation links */}
            <div className='flex gap-x-20 justify-center'>
                <Link href='/about'>
                    <span className={`${textStyle}`}>{t('about')}</span>
                </Link>
                <Link href='/work'>
                    <span className={`${textStyle}`}>{t('work')}</span>
                </Link>
                <Link href='/contact'>
                    <span className={`${textStyle}`}>{t('contact')}</span>
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