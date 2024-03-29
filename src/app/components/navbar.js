
import Link from "next/link"
import { usePathname, useRouter }   from "next/navigation"
import { useSession, getSession, signOut } from "next-auth/react"

import ButtonLogin from "./nav-components/btn-login"
import ButtonLogout from "./nav-components/btn-logout"

const NavComponent = () => {
    const activeLink = ['block py-2 pl-3 pr-4 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-200 md:p-0 dark:text-white']
    const unactiveLink = ['block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent']
    const pathName = usePathname()
    const router = useRouter()
    
    const { data: session, status } = useSession()
    const clickHandling = (e) => {
        document.querySelector('#navbar-default').classList.toggle('hidden')
    }

    function TaskLink() {
        return (
            <li>
                <a href="/task" className={pathName == '/task' ? activeLink : unactiveLink}>Task</a>
            </li>
        )
    }

    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded-b-lg dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Forever</span>
                </a>
                <button onClick={clickHandling} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule={"evenodd"} d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule={"evenodd"}></path></svg>
                </button>
                <div className="hidden w-full md:w-auto md:flex" id="navbar-default">
                    <ul className="absolute right-2 z-50 md:static md:right-0 flex gap-2 md:gap-0 flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/" className={pathName == '/' ? activeLink : unactiveLink} aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/about" className={pathName == '/about' ? activeLink : unactiveLink}>About</a>
                        </li>
                        <li>
                            <a href="/contact" className={pathName == '/contact' ? activeLink : unactiveLink}>Contact</a>
                        </li>
                        {status === 'authenticated' ? <TaskLink /> : ''}
                        <li className="mt-5 mr-auto md:mt-0 md:hidden">
                            {status === 'authenticated' ? <ButtonLogout /> : <ButtonLogin />}
                        </li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    {status === 'authenticated' ? <ButtonLogout /> : <ButtonLogin />}
                </div>
            </div>
        </nav>
    )
}

export default NavComponent