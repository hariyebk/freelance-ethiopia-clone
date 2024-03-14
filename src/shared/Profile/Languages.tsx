import { IoIosArrowRoundForward } from "react-icons/io";
import useApi from "../../context/hook";
import { useFindUserById } from "../../lib/Tanstackquery/queriesAndMutations";
import Spinner from "../pieces/Spinner";

interface LanguageType {
    language: string,
    proficiency: string
}

export default function Languages() {
    const {user, setEditLanguages} = useApi()
    const {isLoading, data} = useFindUserById()

    if(isLoading){
        return (
            <Spinner />
        )
    }

    return (
        <div className="mt-5 max-lg:w-full w-[260px] flex items-start justify-between gap-4 lg:rounded-xl lg:shadow-lg lg:border lg:border-gray-100 py-5 max-lg:px-8 max-lg:mt-2 max-lg:pb-20 px-5"> 
            <div className="max-lg:mt-4 flex flex-wrap flex-col gap-3 lg:w-36">
                <h3 className="text-lg text-black font-palanquin"> Languages </h3>
                {data?.user ? data?.user.languages ? data.user.languages.map((element: LanguageType) => {
                    return (
                        <div key={element.language} className="mt-4 flex items-center gap-3 text-base font-palanquin">
                            <p className="text-sm text-black font-palanquin"> {element.language} </p>
                            <IoIosArrowRoundForward style = {{fontSize: "20px"}} />
                            <p className="text-sm text-gray-500"> {element.proficiency} </p>
                        </div>
                    )
                }) : <p className="text-sm text-gray-500"> Not specified </p>
                :
                !user?.languages ? (
                    null
                ): (
                    user.languages.map((element) => {
                        return (
                            <div key={element.language} className="mt-4 flex items-center gap-3 text-base font-palanquin">
                                <p className="text-sm text-black font-palanquin"> {element.language} </p>
                                <IoIosArrowRoundForward style = {{fontSize: "20px"}} />
                                <p className="text-sm text-gray-500"> {element.proficiency} </p>
                            </div>
                        )
                    })
                )}
            </div>
            {!data?.user && <button className="text-sm text-red-500 font-palanquin font-semibold pt-1 max-lg:pt-5 lg:pr-5" onClick={() => setEditLanguages(true)}> {user?.languages ? "Edit" : "Add"} </button>}
        </div>
    )
}
