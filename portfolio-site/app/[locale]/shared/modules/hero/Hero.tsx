import { ReactNode } from 'react';
import Link from 'next/link';

export interface HeroProps {
    eyebrow?: ReactNode;
    title: ReactNode;
    body: ReactNode;
    buttons: Array<{
        text: string;
        link: string;
        variant?: 'solid' | 'outline';
        className?: string;
    }>
    className?: string;
    textClassName?: string;
}

const Hero = ({
    eyebrow,
    title,
    body,
    buttons,
    className = '',
    textClassName,
}: HeroProps) => {
    const renderedButtons = buttons.map(({ text, link, variant = 'solid', className = '' }) => {
        const variantStyles = {
            solid: { className: `bg-primary text-black hover:bg-secondary` },
            outline: { className: `border border-primary bg-transparent text-gray transition-all duration-200 hover:text-white/70 hover:border-secondary` },
        }[variant];

        const base = (
            <button
                className={`font-heading text-[20px] px-3 py-1 rounded-md ${variantStyles.className} ${className}`}>
                {text}
            </button>
        );

        return <Link key={link} href={link}>{base}</Link>;
    });

    return (
        <div className='flex flex-col gap-2'>
            <span className='text-primary text-[16px] tracking-[1.2]'>{eyebrow}</span>
            <span className='font-heading text-[32px]'>{title}</span>
            <div className='text-gray text-[18px] mt-3'>{body}</div>
            <div className="flex gap-6 mt-10">
                {renderedButtons}
            </div>
        </div>
    )
};

export default Hero;