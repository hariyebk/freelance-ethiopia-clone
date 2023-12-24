import { IoMdClose } from "react-icons/io"
import { navlinks } from "../../constants"
import { useApi } from "../../context/Provider"


export default function SidebarNav() {
    const {setOpenNav} = useApi()
    return (
        <section className="lg:hidden fixed top-0 left-4 w-[150px] h-[500px] bg-white">
            <nav className="mt-8 ml-3 flex flex-col gap-7">
                    <button className="flex justify-end mr-6" onClick={() => setOpenNav(false)}>
                        <IoMdClose style = {{fontSize: "20px"}} />
                    </button>
                    <ul className="flex flex-col gap-3 font-normal text-md text-gray-500">
                        <li> <a href="/"> Home </a></li>
                        {navlinks.map((link) => {
                            return (
                                <li key={link.label}>
                                    <a href={link.path}> {link.label}  </a>
                                </li>
                            )
                        })}
                    </ul>
            </nav>
        </section>
    )
}
