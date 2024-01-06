import { IoMdClose } from "react-icons/io"
import { navlinks } from "../../constants"
import { useApi } from "../../context/Provider"


export default function SidebarNav() {
    const {setOpenNav} = useApi()
    return (
        <section className="lg:hidden fixed top-0 left-4 w-[150px] h-full bg-white">
            <nav className="mt-8 ml-3 flex flex-col gap-7">
                    <button className="flex justify-end mr-6" onClick={() => setOpenNav(false)}>
                        <IoMdClose style = {{fontSize: "20px"}} />
                    </button>
                    <ul className="flex flex-col gap-3 font-normal text-md text-gray-500">
                        <li> <a href="/" className="hover:text-primary"> Home </a></li>
                        {navlinks.map((link) => {
                            return (
                                <li key={link.label} className="hover:text-primary">
                                    <a href={link.path}> {link.label}  </a>
                                </li>
                            )
                        })}
                    </ul>
            </nav>
        </section>
    )
}
