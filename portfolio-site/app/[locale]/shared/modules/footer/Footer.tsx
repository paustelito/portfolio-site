import { useTranslations } from 'next-intl';

const Footer = () => {
    const t = useTranslations('Footer');

    const textStyle = 'font-heading text-gray text-[15px]';

    return (
        <div className="z-50 w-full grid grid-cols-2 justify-between">
            {/* Contact links */}
            <div className='flex mr-auto gap-x-20 justify-center'>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/paustelito">
                    <span className={`${textStyle} hover:text-secondary`}>{'github'}</span>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/paulina-almada-6392b8218">
                    <span className={`${textStyle} hover:text-secondary`}>{'linkedin'}</span>
                </a>
                <a target="_blank" rel="noopener noreferrer" href={`mailto:palmadamartinez@gmail.com?subject=${t('subject')}`}>
                    <span className={`${textStyle} hover:text-secondary`}>{t('email')}</span>
                </a>
            </div>

            {/* Timestamp */}
            <div className='flex ml-auto'>
                <span className={`${textStyle}`}>{'© 2026 paulina almada'}</span>
            </div>
        </div>
    );
}

export default Footer;