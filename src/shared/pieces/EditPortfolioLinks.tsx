import { IoAdd} from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

export default function EditPortfolioLinks() {
    const [AddNewLink, setAddNewLink] = useState(false)
    return (
        <section className="flex flex-col items-start">
            <div className="flex items-center justify-between gap-3">
                <form className="w-[280px] border-2 border-gray-300 focus:border-primary ml-4 mt-10 rounded-sm">
                    <input placeholder="https://example.com" className="w-full pl-4 py-2 outline-none text-stone-600 text-sm font-palanquin" /> 
                </form>
                <button>
                    <MdDelete style = {{color: "#ef754c", fontSize: "20px", marginTop: "35px"}}/>
                </button>
            </div>
            {AddNewLink && (
                <div className="mt-4 flex items-center justify-between gap-3">
                    <form className="w-[280px] border-2 border-gray-300 focus:border-primary ml-4">
                        <input placeholder="https://example.com" className="w-full pl-4 py-2 outline-none text-stone-600 text-sm font-palanquin" /> 
                    </form>
                    <button onClick={() => setAddNewLink(false)}>
                        <MdDelete style = {{color: "#ef754c", fontSize: "20px", marginBottom: "8px"}}/>
                    </button>
                </div>
            )}
            <button className={`${AddNewLink ? "text-gray-300": "hover:text-primary"} mt-6 ml-5 flex items-center gap-1 cursor-pointer`} disabled = {AddNewLink} onClick={() => setAddNewLink(true)}>
                <IoAdd />
                <p className="text-sm font-palanquin"> Add New Link  </p>
            </button>
        </section>
    )
}
