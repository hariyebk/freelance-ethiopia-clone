import { useApi } from "../../context/Provider"
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Languages() {
    const {setEditLanguages} = useApi()
    return (
        <div className="mt-5 max-lg:w-full w-[260px] flex items-start justify-between gap-4 lg:rounded-xl lg:shadow-lg lg:border lg:border-gray-300 py-5 max-lg:px-8 px-5"> 
            <div className="max-lg:mt-4 flex flex-wrap flex-col gap-3 lg:w-36 max-lg:font-semibold">
                <h3 className="text-base text-stone-600 font-palanquin font-bold"> Languages </h3>
                <div className="mt-4 flex items-center gap-3 text-base font-palanquin">
                    <h3> Amharic </h3>
                    <IoIosArrowRoundForward style = {{fontSize: "20px"}} />
                    <p className="text-gray-500"> native </p>
                </div>
                <div className="mt-2 flex items-center gap-3 text-base font-palanquin">
                    <h3> English </h3>
                    <IoIosArrowRoundForward style = {{fontSize: "20px"}} />
                    <p className="text-gray-500"> Professional </p>
                </div>
                <div className="mt-2 flex items-center gap-3 text-base font-palanquin">
                    <h3> Spanish </h3>
                    <IoIosArrowRoundForward style = {{fontSize: "20px"}} />
                    <p className="text-gray-500"> Beginner </p>
                </div>
            </div>
            <button className="text-sm text-red-500 font-palanquin font-semibold" onClick={() => setEditLanguages(true)}> Edit </button>
        </div>
    )
}
