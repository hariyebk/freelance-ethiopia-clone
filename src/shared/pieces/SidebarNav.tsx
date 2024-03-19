import { IoMdClose } from "react-icons/io"
import NavLinkLogic from "./NavLinkLogic"
import { RxLoop } from "react-icons/rx"
import useApi from "../../context/hook"
import { AccountRoles } from "../../types"
import { useNavigate } from "react-router-dom"


export default function SidebarNav() {
    const {setOpenNav, role} = useApi()
    const navigate = useNavigate()

    function handleNavigation(){
        setOpenNav(false)
        navigate("/profile-type")
    }

    return (
        <section className="lg:hidden fixed top-0 left-0 w-[150px] h-full bg-white pl-4 max-lg:pt-20">
            <nav className="mt-8 flex flex-col gap-7">
                <button className="flex justify-end mr-6" onClick={() => setOpenNav(false)}>
                    <IoMdClose style = {{fontSize: "20px"}} />
                </button>
                <ul className="flex flex-col gap-3 font-normal text-md text-gray-500">
                    <li className="pl-3"> <a href={`${role ? role === AccountRoles.employer ? "/my-posts" : "/job" : "/"}`} className="hover:text-primary"> Home </a></li>
                    <NavLinkLogic />
                    <button onClick={handleNavigation} className="hover:text-primary mt-3 flex flex-col items-center mr-14 gap-3">
                        <RxLoop style = {{fontSize: "26px"}} />
                        <p className="text-xs ml-5">Swicth Account</p>
                    </button>
                </ul>
            </nav>
        </section>
    )
}
