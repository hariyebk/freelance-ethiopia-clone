import { IoSearchOutline } from "react-icons/io5";
import PostCard from "../shared/pieces/PostCard";
import { CiFilter } from "react-icons/ci";

import FilterOptions from "../shared/pieces/FilterOptions";
import useApi from "../context/hook";

export default function Job() {
    const {setOpenFilter} = useApi()
    return (
        <section className="w-full mt-20">
            <div className="flex gap-8 max-lg:mx-5 ml-44">
                <div className="max-lg:w-[460px] w-[700px]">
                    <div className="flex flex-col flex-1 shadow-md p-2 my-14">
                        <div className="flex items-center justify-start border border-slate-200 rounded-lg pl-3">
                            <IoSearchOutline style = {{color: "#ef754c", fontSize: "20px"}} />
                            <input type="search" placeholder="Seacrh for job" className="w-full h-full ml-3 py-2.5 outline-none"  />
                            <button className="bg-primary w-16 h-[50px] rounded-r-md flex justify-center items-center">
                                <IoSearchOutline style = {{color: "#fff", fontSize: "20px"}} />
                            </button>
                        </div>
                        <div className="flex items-center justify-between mt-10 ml-5 pr-4">
                            <h1 className="text-2xl text-darkblue font-palanquin"> Jobs You Might Like </h1>
                            <button className="lg:hidden focus:outline-none mt-2" onClick={() => setOpenFilter(true)}>
                                <CiFilter style = {{fontSize: "40px", color: "#ef754c"}} />
                            </button>
                        </div>
                        <p className="mt-5 ml-6 text-sm text-primary font-semibold font-palanquin"> All jobs </p>
                        <hr className="relative top-[11px] w-20 ml-3 border border-t-2 border-primary -z-10" />
                        <hr className="mt-2 border border-t-1 border-gray-100 leading-5" />
                        <p className="text-[15px] ml-4 mt-5 text-gray-600 font-sans font-normal"> Browse jobs that match your experiace to a client’s hiring preference. Ordered by most relevant. </p>
                        <hr className="mt-3 border-t-2 border-gray-100 leading-5" />
                        <PostCard />
                    </div>
                </div>
                <div className="my-14 shadow-md max-lg:hidden pb-48 px-5 overflow-scroll custom-scrollbar">
                    <FilterOptions />
                </div>
            </div>
        </section>
    )
}