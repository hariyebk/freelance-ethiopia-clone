import { Link, useNavigate} from "react-router-dom"
import { HiBars4 } from "react-icons/hi2";
import { RxLoop } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import NavLinkLogic from "./pieces/NavLinkLogic";
import useApi from "../context/hook";
import {AccountRoles} from "../types";
import { useLogout } from "../lib/Tanstackquery/queriesAndMutations";
import { Box, CircularProgress } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";

export default function NavBar() {
    const {setOpenNav, role, user} = useApi()
    const {isPending, mutate: logout} = useLogout()
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    function handleLogout(){
        logout()
    }

    function handleProfileNavigation(){
        queryClient.removeQueries({
            queryKey: ["user"]
        })
        return role === AccountRoles.jobseeker ? navigate("/my-profile/") : navigate("/profile")
    }

    return (
        <div className="w-full fixed inset-x-0 top-0 z-30">
            <div className="pl-8 max-lg:pt-5 pt-8 pb-5 max-lg:pl-5  flex justify-between items-center bg-white border-b border-b-slate-50">
                <div className="flex justify-between items-center">
                    <button className="lg:hidden mr-2 h-16" onClick={() => setOpenNav(true)}>
                        <HiBars4 style = {{fontSize: "30px", color: "#e94969"}} />
                    </button>
                    <Link to={`${role ? role === AccountRoles.jobseeker ? "/job" : "/my-posts": "/"}`}>
                        <img src="/Images/logo.png" alt="logo" className="h-10 w-32 object-contain" />
                    </Link>
                    <nav className="max-lg:hidden ml-7">
                        <ul className="flex justify-between items-center gap-5">
                            <NavLinkLogic />
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center gap-2 max-lg:mr-2 mr-10">
                    {role ? (
                        <div className="flex items-center justify-between max-sm:gap-4 gap-7">
                            <Link to="/settings" className="hover:text-primary">
                                <IoSettingsOutline style = {{fontSize: "26px"}} />
                            </Link>
                            <Link to="/profile-type" className="hover:text-primary max-lg:hidden">
                                <RxLoop style = {{fontSize: "26px"}} />
                            </Link>
                            <div className="max-lg:hidden">
                                {isPending ? (
                                    <Box sx={{ display: 'flex' }}>
                                        <CircularProgress size={25} />
                                    </Box>
                                    ) :
                                    (
                                    <button onClick={handleLogout} className="max-lg:hidden bg-stone-800 mr-3 text-slate-100 text-sm py-2 max-lg:px-5 px-7 rounded-full"> Log out</button>
                                    )
                                }
                            </div>
                            <div className="lg:hidden">
                                {isPending ? (
                                    <Box sx={{ display: 'flex' }}>
                                        <CircularProgress size={25} />
                                    </Box>
                                )
                                : 
                                <button onClick={handleLogout} className="lg:hidden pt-1 mr-5 hover:text-primary">
                                    <SlLogout style = {{fontSize: "26px"}}/>
                                </button>
                                }
                            </div>
                            <button onClick={handleProfileNavigation} className="max-lg:mr-6 mr-3 md:-ml-3">
                                <img src={`${user?.avatar ? user.avatar : "/Images/userAvatar.png"}`} alt="avatar" width={40} height={40} className="rounded-full object-contain"/>
                            </button>
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


