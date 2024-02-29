import { useSearchParams } from "react-router-dom"
import { Checkbox } from "../../components/ui/checkbox"


interface FilterProps {
    lists: string[],
    title: string,
    param: string
}

export default function Filter({title, lists, param}: FilterProps) {
    const [searchParms, setSearchParms] = useSearchParams()

    function handleClick(value: string){
        console.log("hello")
        const query = value.replace(/ /g, "_") as string
        searchParms.set(param, query)
        setSearchParms(searchParms)
    }

    return (
        <div className="mt-3">
            <h3 className="ml-4 text-darkblue text-lg font-palanquin font-medium"> {title} </h3>
            <div className="mt-5 mx-3">
                {lists.map((value) => {
                    return (
                        <div key={value} className="flex items-center gap-2 my-1.5">
                        <Checkbox onCheckedChange={() => handleClick(value)} className="border-gray-700 w-4 h-4 checked:text-primary focus:outline-none focus-visible:ring-0" />
                        <p className={`${title === "sectors" ? "text-sm truncate ...": "capitalize text-sm"}`}> {value} </p>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}
