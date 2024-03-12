import { useNavigate, useSearchParams } from "react-router-dom"
import { Checkbox } from "../../components/ui/checkbox"
import useApi from "../../context/hook"
import { useState } from "react"
import { getAllQueryStrings } from "../../utils/helpers"


interface FilterProps {
    lists: string[],
    title: string,
    param: string,
}

export default function Filter({title, lists, param}: FilterProps) {
    const [searchParms, setSearchParms] = useSearchParams()
    const currentQuery = searchParms.get(param)
    const [checkedItem, setCheckedItem] = useState<string | null>(currentQuery)
    const {role, setQueryObj} = useApi()
    const navigate = useNavigate()


    function handleClick(value: string){
        if(!role){
            return  navigate("/login")
        }
        const query = value.replace(/ /g, "_") as string
        // If it's already checked
        if(checkedItem === query){
            setCheckedItem(null)
            searchParms.delete(param)
        }
        else{
            setCheckedItem(query)
            searchParms.set(param, query)
        }
        setSearchParms(searchParms)
        const UrlQueries = getAllQueryStrings()
        setQueryObj(Object.keys(UrlQueries).length === 0 ? null : UrlQueries)
    }
    

    return (
        <div className="mt-3">
            <h3 className="ml-4 text-darkblue text-lg font-palanquin font-medium"> {title} </h3>
            <div className="mt-5 mx-3">
                {lists.map((value) => {
                    return (
                        <div key={value} className="flex items-center gap-2 my-1.5">
                        <Checkbox checked={checkedItem === value.replace(/ /g, "_") as string}  onCheckedChange={() => handleClick(value)} className="border-gray-700 w-4 h-4 checked:text-primary focus:outline-none focus-visible:ring-0" />
                        <p className={`${title === "sectors" ? "text-sm truncate ...": "capitalize text-sm"}`}> {value} </p>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
