import { Link, useNavigate } from "react-router-dom"
import { HiBars4 } from "react-icons/hi2";
import { RxLoop } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";

import NavLinkLogic from "./pieces/NavLinkLogic";
import { handleAccountSwitch } from "../utils/switchAccount";
import useApi from "../context/hook";
import { AccountRoles } from "../types";

export default function NavBar() {
    const {setOpenNav, isAuthenticated, role} = useApi()
    const navigate = useNavigate()
    const fakeuserid = "653e8db1e8b915a518a8"
    function handleLogout(){
        // TODO: After logging out the user redirect them to the login page
        navigate("/login")
    }
    return (
        <div className="fixed inset-x-0 top-0">
            <div className=" w-full lg:ml-8 max-lg:pt-5 pt-8 pb-5 max-lg:pl-5  flex justify-between items-center bg-white border-b border-b-slate-50 lg:z-50">
                <div className="flex justify-between items-center">
                    <button className="md:hidden mr-2 h-16" onClick={() => setOpenNav(true)}>
                        <HiBars4 style = {{fontSize: "30px", color: "#e94969"}} />
                    </button>
                    <Link to={`${role === AccountRoles.jobseeker ? "/job" : "/"}`}>
                        <img src="/Images/logo.png" alt="logo" className="h-10 w-32 object-contain" />
                    </Link>
                    <nav className="max-xl:hidden ml-7">
                        <ul className="flex justify-between items-center gap-5">
                            <NavLinkLogic />
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center gap-2 max-lg:mr-2 mr-10">
                    {isAuthenticated ? (
                        <div className="flex items-center justify-between gap-7">
                            <Link to="/settings" className="hover:text-primary">
                                <IoSettingsOutline style = {{fontSize: "26px"}} />
                            </Link>
                            {/* TODO: show only if the user has another registered account */}
                            <Link to="/profile-type" className="hover:text-primary max-lg:hidden" onClick={handleAccountSwitch}>
                                <RxLoop style = {{fontSize: "26px"}} />
                            </Link>
                            <button onClick={handleLogout} className="max-lg:hidden bg-stone-800 mr-3 text-slate-100 text-sm py-2 max-lg:px-5 px-7 rounded-full"> Log out</button>
                            <button onClick={handleLogout} className="lg:hidden mr-5 hover:text-primary">
                                <SlLogout style = {{fontSize: "26px"}}/>
                            </button>
                            {/* TODO: USER ID */}
                            <Link to={`${role === AccountRoles.jobseeker ? `/jobseeker-profile/${fakeuserid}`: `/employer-profile/${fakeuserid}`}`} className="max-lg:mr-6 mr-3 -ml-3">
                                <img src="/Images/hari.jpg" alt="avatar" width={40} height={40} className="rounded-full object-contain"/>
                            </Link>
                        </div>
                    ):(
                        <div>
                            <Link to="/login" className="bg-stone-800 mr-7 text-slate-100 text-sm py-2 max-lg:px-8 px-7 rounded-full">
                                Login
                            </Link>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    )
}


