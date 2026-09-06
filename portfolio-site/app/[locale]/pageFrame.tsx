"use client";

import Footer from './shared/modules/footer/Footer';
import Navbar from './shared/modules/navbar/Navbar';

export default function PageFrame({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className={`w-full min-h-screen flex flex-col p-10 bg-black text-white`}>
                <Navbar />
                <div className='flex-1 py-5'>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
}
