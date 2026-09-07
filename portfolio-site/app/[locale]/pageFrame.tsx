"use client";

import Footer from './shared/modules/footer/Footer';
import Navbar from './shared/modules/navbar/Navbar';

export default function PageFrame({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className={`w-full min-h-screen flex flex-col py-10 px-16 bg-black text-white`}>
                <Navbar />
                <div className='flex-1 pt-12 pb-5'>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
}
