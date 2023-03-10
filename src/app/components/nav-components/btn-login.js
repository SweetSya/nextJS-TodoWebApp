import { useRouter } from "next/navigation"

const ButtonLogin = () => {
    const router = useRouter()
    return (
            <button 
            onClick={ () => {
                router.push('/login')
            } } 
            className="flex gap-2 py-2 px-5 rounded text-white bg-gray-700 hover:bg-gray-200 hover:text-gray-700 transition-all ease-in duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokel="true"   inecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
                Login
            </button>
    )
}

export default ButtonLogin