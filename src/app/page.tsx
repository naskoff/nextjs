import HeaderComponent from "@/components/HeaderComponent";

export default function Home() {
    return (
        <>
            <HeaderComponent/>
            <main id="content">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        className="py-10 min-h-screen bg-white xl:border-x border-x-gray-200 dark:bg-neutral-800 dark:border-x-gray-700">
                    </div>
                </div>
            </main>
        </>
    );
}
