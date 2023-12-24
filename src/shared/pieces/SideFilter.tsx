import { IoMdClose } from "react-icons/io";
import { useFilterContext } from "../../context/Provider";
import FilterOptions from "./FilterOptions";
export default function SideFilter() {
    const {setOpen} = useFilterContext()
    return (
        <section className="lg:hidden fixed top-0 right-4 w-[350px] h-full bg-white">
            <div className="mt-10 flex flex-col gap-3 overflow-scroll custom-scrollbar">
                <button className="flex justify-end mr-6" onClick={() => setOpen(false)}>
                    <IoMdClose style = {{fontSize: "20px"}} />
                </button>
                <FilterOptions />
            </div>
        </section>
    )
}
