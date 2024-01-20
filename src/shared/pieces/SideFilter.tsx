import { IoMdClose } from "react-icons/io";

import FilterOptions from "./FilterOptions";
import useApi from "../../context/hook";
export default function SideFilter() {
    const {setOpenFilter} = useApi()
    return (
        <section className="lg:hidden fixed top-0 right-4 w-[350px] h-full bg-white">
            <div className="mt-10 flex flex-col gap-3 overflow-scroll custom-scrollbar pt-20">
                <button className="flex justify-end mr-6" onClick={() => setOpenFilter(false)}>
                    <IoMdClose style = {{fontSize: "20px"}} />
                </button>
                <FilterOptions />
            </div>
        </section>
    )
}
