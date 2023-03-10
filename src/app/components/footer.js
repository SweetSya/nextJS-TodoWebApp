
const footerComponent = () => {

    return (
        <footer
            aria-label="Site Footer"
            className="bg-white dark:bg-gray-900 lg:grid lg:grid-cols-5"
            >
            <div className="relative block h-32 lg:col-span-2 lg:h-full">
                <img
                src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                alt=""
                className="absolute inset-0 object-cover w-full h-full"
                />
            </div>

            <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                    <p>
                    <span
                        className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400"
                    >
                        Contact Me
                    </span>

                    <a
                        href="#"
                        className="block text-2xl font-medium text-gray-900 hover:opacity-75 dark:text-white sm:text-3xl"
                    >
                        +62 896-7795-0614
                    </a>
                    </p>

                    <ul className="flex gap-6 mt-8">

                    <li>
                        <a
                        href="https://www.instagram.com/sultanherrysan/"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                        >
                        <span className="sr-only">Instagram</span>

                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                            />
                        </svg>
                        </a>
                    </li>

                    <li>
                        <a
                        href="https://github.com/SweetSy-9"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                        >
                        <span className="sr-only">GitHub</span>

                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                            />
                        </svg>
                        </a>
                    </li>
                    </ul>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                    <p className="font-medium text-gray-900 dark:text-white">Useful Links</p>

                    <nav aria-label="Footer Navigation - Services" className="mt-6">
                        <ul className="space-y-4 text-sm">
                        <li>
                            <a
                            href="#"
                            className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                            >
                            Home
                            </a>
                        </li>

                        <li>
                            <a
                            href="#"
                            className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                            >
                            About
                            </a>
                        </li>

                        <li>
                            <a
                            href="#"
                            className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                            >
                            Contact
                            </a>
                        </li>

                        </ul>
                    </nav>
                    </div>

                    <div>
                    <p className="font-medium text-gray-900 dark:text-white">About Me</p>
                    <p className="font-light">
                        <span className="font-medium">SweetSy</span> here, currently learning on full-stack web development, i surely is not the best, but i will try my best.
                        <span className="font-medium"> "So, surely with hardship comes ease."</span>
                    </p>
                    </div>
                </div>
                </div>

                <div className="pt-12 mt-12 border-t border-gray-100 dark:border-gray-800">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <nav aria-label="Footer Navigation - Support">
                    <ul className="flex flex-wrap gap-4 text-xs">
                        <li>
                        <a
                            href="#"
                            className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                        >
                            Terms & Conditions
                        </a>
                        </li>

                        <li>
                        <a
                            href="#"
                            className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                        >
                            Privacy Policy
                        </a>
                        </li>

                        <li>
                        <a
                            href="#"
                            className="text-gray-500 transition hover:opacity-75 dark:text-gray-400"
                        >
                            Cookies
                        </a>
                        </li>
                    </ul>
                    </nav>

                    <p className="mt-8 text-xs text-gray-500 dark:text-gray-400 sm:mt-0">
                    &copy; 2023. Forever. All rights reserved.
                    </p>
                </div>
                </div>
            </div>
        </footer>

    )
}

export default footerComponent