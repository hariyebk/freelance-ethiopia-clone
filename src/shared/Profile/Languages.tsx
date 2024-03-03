import { IoIosArrowRoundForward } from "react-icons/io";
import useApi from "../../context/hook";

export default function Languages() {
    const {user, setEditLanguages} = useApi()
    return (
        <div className="mt-5 max-lg:w-full w-[260px] flex items-start justify-between gap-4 lg:rounded-xl lg:shadow-lg lg:border lg:border-gray-100 py-5 max-lg:px-8 max-lg:mt-2 max-lg:pb-20 px-5"> 
            <div className="max-lg:mt-4 flex flex-wrap flex-col gap-3 lg:w-36 max-lg:font-semibold">
                <h3 className="text-lg text-black font-palanquin"> Languages </h3>
                {!user?.languages ? (
                    null
                ): (
                    user.languages.map((language) => {
                        return (
                            <div key={language} className="mt-4 flex items-center gap-3 text-base font-palanquin">
                                <p className="text-sm text-black font-palanquin"> Amharic </p>
                                <IoIosArrowRoundForward style = {{fontSize: "20px"}} />
                                <p className="text-sm text-gray-500"> Native </p>
                            </div>
                        )
                    })
                )}
            </div>
            <button className="text-sm text-red-500 font-palanquin font-semibold max-lg:pt-5 lg:pr-5" onClick={() => setEditLanguages(true)}> Edit </button>
        </div>
    )
}
