import Link from "next/link";

export default function HeaderComponent() {
    return (
        <header
            className="bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
            <nav
                className="relative max-w-[85rem] w-full md:flex md:items-center md:justify-between md:gap-3 mx-auto px-4 sm:px-6 lg:px-8 py-2 dark:bg-neutral-900">
                <div className="flex items-center justify-between">
                    <a className="flex-none font-semibold text-xl text-black focus:outline-hidden focus:opacity-80 dark:text-white"
                       href="#" aria-label="Brand">Brand</a>
                    <div className="md:hidden">
                        <button type="button"
                                className="hs-collapse-toggle relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                id="hs-header-classNameic-collapse" aria-expanded="false"
                                aria-controls="hs-header-classNameic"
                                aria-label="Toggle navigation" data-hs-collapse="#hs-header-classNameic">
                            <svg className="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round" stroke-linejoin="round">
                                <line x1="3" x2="21" y1="6" y2="6"/>
                                <line x1="3" x2="21" y1="12" y2="12"/>
                                <line x1="3" x2="21" y1="18" y2="18"/>
                            </svg>
                            <svg className="hs-collapse-open:block shrink-0 hidden size-4"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round">
                                <path d="M18 6 6 18"/>
                                <path d="m6 6 12 12"/>
                            </svg>
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </div>
                <div id="hs-header-classNameic"
                     className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
                     aria-labelledby="hs-header-classNameic-collapse">
                    <div
                        className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                        <div
                            className="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1">
                            <a className="p-2 flex items-center text-sm text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-blue-500 dark:focus:text-blue-500"
                               href="#" aria-current="page">
                                <svg className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round">
                                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
                                    <path
                                        d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                </svg>
                                Landing
                            </a>

                            <a className="p-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                               href="#">
                                <svg className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                                Account
                            </a>

                            <a className="p-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                               href="#">
                                <svg className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round">
                                    <path d="M12 12h.01"/>
                                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                                    <path d="M22 13a18.15 18.15 0 0 1-20 0"/>
                                    <rect width="20" height="14" x="2" y="6" rx="2"/>
                                </svg>
                                Work
                            </a>

                            <a className="p-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                               href="#">
                                <svg className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round">
                                    <path
                                        d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
                                    <path d="M18 14h-8"/>
                                    <path d="M15 18h-5"/>
                                    <path d="M10 6h8v4h-8V6Z"/>
                                </svg>
                                Blog
                            </a>
                            <div
                                className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--adaptive:adaptive] [--is-collapse:true] md:[--is-collapse:false] ">
                                <button id="hs-header-classNameic-dropdown" type="button"
                                        className="hs-dropdown-toggle w-full p-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                                        aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                    <svg className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round">
                                        <path d="m3 10 2.5-2.5L3 5"/>
                                        <path d="m3 19 2.5-2.5L3 14"/>
                                        <path d="M10 6h11"/>
                                        <path d="M10 12h11"/>
                                        <path d="M10 18h11"/>
                                    </svg>
                                    Dropdown
                                    <svg
                                        className="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="m6 9 6 6 6-6"/>
                                    </svg>
                                </button>
                                <div
                                    className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full md:w-52 hidden z-10 top-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 md:after:hidden after:absolute after:top-1 after:start-4.5 after:w-0.5 after:h-[calc(100%-4px)] after:bg-gray-100 dark:bg-transparent dark:md:bg-neutral-900 dark:after:bg-neutral-700"
                                    role="menu" aria-orientation="vertical"
                                    aria-labelledby="hs-header-classNameic-dropdown">
                                    <div className="py-1 md:px-1 space-y-0.5">
                                        <a className="py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                                           href="#">
                                            About
                                        </a>
                                        <div
                                            className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--is-collapse:true] md:[--is-collapse:false] relative">
                                            <button id="hs-header-classNameic-dropdown-sub" type="button"
                                                    className="hs-dropdown-toggle w-full py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500">
                                                Sub Menu
                                                <svg
                                                    className="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:-rotate-90 md:-rotate-90 duration-300 ms-auto shrink-0 size-4"
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="m6 9 6 6 6-6"/>
                                                </svg>
                                            </button>
                                            <div
                                                className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative md:w-48 hidden z-10 md:mt-2 md:mx-2.5! md:top-0 md:end-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md dark:bg-neutral-800 dark:divide-neutral-700 before:hidden md:before:block before:absolute before:-end-5 before:top-0 before:h-full before:w-5 md:after:hidden after:absolute after:top-1 after:start-4.5 after:w-0.5 after:h-[calc(100%-4px)] after:bg-gray-100 dark:bg-transparent dark:md:bg-neutral-900 dark:after:bg-neutral-700"
                                                role="menu" aria-orientation="vertical"
                                                aria-labelledby="hs-header-classNameic-dropdown-sub">
                                                <div className="p-1 space-y-0.5 md:space-y-1">
                                                    <a className="py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                                                       href="#">
                                                        About
                                                    </a>

                                                    <a className="py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                                                       href="#">
                                                        Downloads
                                                    </a>

                                                    <a className="py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                                                       href="#">
                                                        Team Account
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                                           href="#">
                                            Downloads
                                        </a>
                                        <a className="py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                                           href="#">
                                            Team Account
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="relative flex flex-wrap items-center gap-x-1.5 md:ps-2.5 mt-1 md:mt-0 md:ms-1.5 before:block before:absolute before:top-1/2 before:-start-px before:w-px before:h-4 before:bg-gray-300 before:-translate-y-1/2 dark:before:bg-neutral-700">
                                <Link
                                    className="p-2 w-full flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                                    href="/login">
                                    <svg className="shrink-0 size-4 me-3 md:me-2" xmlns="http://www.w3.org/2000/svg"
                                         width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor"
                                         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                                        <circle cx="12" cy="7" r="4"/>
                                    </svg>
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}