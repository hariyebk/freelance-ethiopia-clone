import { IoSearchOutline } from "react-icons/io5";
import PostCard from "../shared/PostCard";
export default function Job() {
    return (
        <section className="w-full min-h-screen">
            <div className="flex gap-8 ml-44">
                {/* Job List section */}
                <div className="w-[700px] h-full">
                    <div className="flex flex-col flex-1 shadow-md p-2 my-14">
                        <div className="flex items-center justify-start border border-slate-200 rounded-lg pl-3">
                            <IoSearchOutline style = {{color: "#ef754c", fontSize: "20px"}} />
                            <input type="search" placeholder="Seacrh for job" className="w-full h-full ml-3 py-2.5 outline-none"  />
                            <button className="bg-primary w-16 h-[50px] rounded-r-md flex justify-center items-center">
                                <IoSearchOutline style = {{color: "#fff", fontSize: "20px"}} />
                            </button>
                        </div>
                        <h1 className="text-2xl text-darkblue font-palanquin font-medium mt-10 ml-5"> Jobs You Might Like </h1>
                        <p className="mt-5 ml-6 text-sm text-primary font-medium font-palanquin"> All jobs </p>
                        <hr className="relative top-[10px] w-20 ml-3 border border-t-2 border-primary" />
                        <hr className="mt-2 border border-t-1 border-gray-100 leading-5" />
                        <p className="text-[15px] ml-4 mt-5 text-gray-600 font-sans font-normal"> Browse jobs that match your experiace to a client’s hiring preference. Ordered by most relevant. </p>
                        <hr className="mt-3 border-t-2 border-gray-100 leading-5" />
                        <PostCard />
                    </div>
                </div>
                {/* Filter Options */}
                <div className="my-14 w-[300px] min-h-screen shadow-md">
                    <div className="flex flex-col items-start justify-between m-3">
                        <h2 className="text-primary text-lg ml-5 font-palanquin"> Filter jobs </h2>
                    </div>
                </div>
                
            </div>
        </section>
    )
}