import { IoMdClose } from "react-icons/io"
import { useApi } from "../../context/Provider"
import NavLinkLogic from "./NavLinkLogic"
import { RxLoop } from "react-icons/rx"
import { handleAccountSwitch } from "../../utils/switchAccount"


export default function SidebarNav() {
    const {setOpenNav} = useApi()

    return (
        <section className="lg:hidden fixed top-0 left-0 w-[150px] h-full bg-white pl-4">
            <nav className="mt-8 ml-3 flex flex-col gap-7">
                    <button className="flex justify-end mr-6" onClick={() => setOpenNav(false)}>
                        <IoMdClose style = {{fontSize: "20px"}} />
                    </button>
                    <ul className="flex flex-col gap-3 font-normal text-md text-gray-500">
                        <li> <a href="/" className="hover:text-primary"> Home </a></li>
                        <NavLinkLogic />
                        <button className="hover:text-primary mt-3 flex flex-col items-center mr-14 gap-3" onClick={handleAccountSwitch}>
                            <RxLoop style = {{fontSize: "26px"}} />
                            <p className="text-xs">Swicth Account</p>
                        </button>
                    </ul>
            </nav>
        </section>
    )
}
