import { IoLayers } from "react-icons/io5";

interface HelpCardProps {
    isHorizontal: boolean
}

export default function HelpCards({isHorizontal}: HelpCardProps) {
    return (
        <section className={`-mt-14 max-lg:-mt-6 w-full ${isHorizontal ? "flex max-lg:flex-col gap-6" : "flex flex-1 flex-col gap-4"} items-center justify-center`}>
            <div className={`${isHorizontal ? "hover:-translate-y-5 px-24 pt-10" : "w-[600px] h-36 mx-auto hover:translate-y-5 flex items-center gap-10 pl-5"} bg-white w-[300px] h-[250px] border rounded-md shadow-lg  hover:translate hover:border hover:border-primary transition duration-500 z-10`}>
                <IoLayers className = {`${isHorizontal ? "w-10 h-10" : "w-14 h-14"} text-primary mb-5 ml-6`} />
                <div>
                    <p className="text-xl text-black font-palanquin"> Employer </p>
                    <div className="flex items-center">
                        {!isHorizontal && <img src="/Images/afriwork.jpg" alt="afriwork logo" className="w-6 h-6 object-contain" />}
                        <button className={`${!isHorizontal && "pb-4"} mt-5 ml-3 text-sm text-primary font-semibold`}>
                            7 articles
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isHorizontal ? "hover:-translate-y-5 pt-10 px-10" : "w-[600px] h-36 mx-auto hover:translate-y-5 flex items-center gap-10 pl-11 pt-3"} bg-white w-[300px] h-[250px] border rounded-md shadow-lg hover:translate hover:border hover:border-primary transition duration-500 z-10`}>
                <IoLayers className = {`${isHorizontal ? "w-10 h-10 mb-5 ml-20" : "w-14 h-14 mb-6"} text-primary`} />
                <div>
                    <p className="text-xl text-black font-palanquin"> Mostly Asked Questions</p>
                    <div className="flex items-center gap-3">
                        {!isHorizontal && <img src="/Images/afriwork.jpg" alt="afriwork logo" className="w-6 h-6 object-contain" />}
                        <button className={`${isHorizontal ? "px-16" : "pb-4"} mt-5 text-sm text-primary font-semibold`}> 
                            2 articles
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isHorizontal ? "hover:-translate-y-5 pt-10 px-20" : "w-[600px] h-36 mx-auto hover:translate-y-5 flex items-center gap-10 pl-11 pt-3"} bg-white w-[300px] h-[250px] border rounded-md shadow-lg hover:translate hover:border hover:border-primary transition duration-500 z-10`}>
                <IoLayers className = {` ${isHorizontal ? "w-10 h-10 mb-5 ml-9" : "w-14 h-14 mb-6"} text-primary`} />
                <div>
                    <p className="text-xl text-black font-palanquin"> Job Seekers </p>
                    <div className="flex items-center mt-2">
                        {!isHorizontal && <img src="/Images/afriwork.jpg" alt="afriwork logo" className="w-6 h-6 object-contain" />}
                        <button className={`${!isHorizontal && "pb-4"} mt-4 ml-4 text-primary text-sm font-semibold`}>
                            3 articles
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
