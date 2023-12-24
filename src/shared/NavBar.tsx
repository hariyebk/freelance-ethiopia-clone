import { Link } from "react-router-dom"
import { HiBars4 } from "react-icons/hi2";
import { navlinks } from "../constants";
import { useApi } from "../context/Provider";


export default function NavBar() {
    const {setOpenNav} = useApi()
    return (
        <div>
            <div className="ml-8 mt-5 flex justify-between items-center">
                <div className="flex justify-between items-center">
                    <button className="md:hidden mr-2 h-16" onClick={() => setOpenNav(true)}>
                        <HiBars4 />
                    </button>
                    <Link to="/">
                        <img src="/Images/logo.png" alt="logo" className="h-10 w-32 object-contain" />
                    </Link>
                    <nav className="max-xl:hidden ml-7 bg-white">
                        <ul className="flex justify-between items-center gap-5">
                            {navlinks.map((link) => {
                                return (
                                    <li key={link.label} className="font-normal text-md text-gray-500">
                                        <a href={link.path}> {link.label}  </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center gap-2 max-lg:mr-2 mr-10">
                    <Link to="/login" className="bg-stone-800 mr-3 text-slate-100 max-lg:text-sm text-base py-1 max-lg:px-5 px-7 rounded-full">
                        Login
                    </Link>
                    <Link to="/onboard" className="bg-stone-800 mr-3 text-slate-100 max-lg:text-sm text-base py-1 max-lg:px-5 px-7 rounded-full">
                        Sign up
                    </Link>
                </div>
            </div>
            <hr className="mt-4" />
        </div>
    )
}
