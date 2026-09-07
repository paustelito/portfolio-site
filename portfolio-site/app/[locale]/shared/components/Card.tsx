import { ReactNode } from 'react';
import Link from "next/link";

export interface CardProps {
    title?: ReactNode;
    content?: ReactNode;
    cta?: ReactNode;
    link?: string;
    className?: string;
    bodyClassName?: string;
}

const Card = ({
    title,
    content,
    cta,
    link,
    className = 'p-5',
    bodyClassName,
}: CardProps) => {
    return (
        <div className={`flex flex-col min-h-0 min-w-0 ${className} transition-all duration-200 bg-dark-gray hover:bg-dark-gray-hover rounded-2xl border border-primary/30 hover:border-secondary/40`}>
            <div className={`min-h-0 flex-1 ${bodyClassName}`}>
                {title && ( <span className='font-heading text-[20px]'>{title}</span>)}
                {content && <div className='mb-2 text-gray text-[16px]'>{content}</div>}
                {link && (
                    <div className='flex mt-auto'>
                        <Link key={link} href={link}><span className='font-heading transition-all duration-200 text-primary hover:text-secondary'>{cta}</span></Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;