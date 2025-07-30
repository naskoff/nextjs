import {ReactNode} from "react";

export default function AuthLayout({children}: { children: ReactNode; }) {
    return (
        <div className="bg-gray-50">
            <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                {children}
            </div>
        </div>
    );
}