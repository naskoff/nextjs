import {ReactNode} from "react";

export default function AuthLayout({children}: { children: ReactNode; }) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-neutral-800">
            <div className={'flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8'}>
                {children}
            </div>
        </div>
    );
}