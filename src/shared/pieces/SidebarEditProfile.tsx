import { IoAdd, IoClose } from "react-icons/io5"
import { MdDelete } from "react-icons/md";
import { useApi } from "../../context/Provider"
import { useState } from "react";

export default function SidebarEditProfile() {
        const {setEditProfile} = useApi()
        const [AddNewLink, setAddNewLink] = useState(false)
        return (
            <section className="fixed top-0 right-0 w-[400px] pl-3 h-full bg-white">
                <div className="flex flex-col items-start">
                    <div className="w-full mt-6 px-4 py-3 flex items-center justify-between shadow-md">
                        <h2 className="text-base text-stone-500 font-palanquin font-bold"> Update your Portfolio Links </h2>
                        <button className="mr-4" onClick={() => setEditProfile(false)}>
                            <IoClose style = {{fontSize: "25px"}}  />
                        </button>
                    </div>
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
                        <p className="text-sm font-palanquin"> Add New  </p>
                    </button>
                    <div className="mt-48 mx-auto flex items-center gap-8">
                        <button className="px-10 py-2 border border-stone-800 bg-stone-800 text-slate-100 rounded-md" onClick={() => setEditProfile(false)}> cancel </button>
                        <button className="px-10 py-2 border border-primary bg-gradient-to-r from-primary to-secondary  text-slate-100 text-base font-palanquin rounded-md"> save </button>
                    </div>
                </div>
            </section>
        )
    }
