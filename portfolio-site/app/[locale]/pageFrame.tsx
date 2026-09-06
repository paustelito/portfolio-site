"use client";

import Navbar from './shared/navbar/Navbar';

export default function PageFrame({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className={`w-full min-h-screen p-10 bg-black text-white`}>
                <Navbar />
                {children}
            </div>
        </>
    );
}
