import { useSearchParams} from "react-router-dom";
import { ApplicationStatus, sortByDate } from "../../constants";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";


interface ApplicationFilterProps {
    saved?: boolean
}
export default function ApplicationFilter({saved}: ApplicationFilterProps) {
    const [searchParams, setSearchParms] = useSearchParams()

    function handleFilter(status: string){
        searchParams.set("filter", status)
        setSearchParms(searchParams)
    }

    function handleSort(sort: string){
        const sortquery = sort.split(" ").at(0)?.toLowerCase() as string
        searchParams.set("sort", sortquery)
        setSearchParms(searchParams)
    }

    return (
        <section className="my-8">
            <div className="flex items-center gap-3">
                <div className={`${saved ? "hidden": "block"}`}>
                    <Popover>
                        <PopoverTrigger>
                            <div className="filter"> Filter by status </div>
                        </PopoverTrigger>
                        <PopoverContent className="w-fit mt-1 px-4">
                            <div className="flex flex-col w-auto">
                                {ApplicationStatus.map((status) => {
                                    return (
                                        <button onClick={() => handleFilter(status)} key = {status} className="capitalize mb-2 hover:text-primary"> 
                                            {status}
                                        </button>
                                    )
                                })}
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
                <div>
                <Popover>
                    <PopoverTrigger>
                        <div className="filter"> Sort by date </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-fit mt-1">
                        <div className="flex flex-col">
                            {sortByDate.map((date) => {
                                return (
                                    <button onClick={() => handleSort(date.query)} key = {date.label} className="capitalize mb-2 hover:text-primary"> 
                                        {date.query}
                                    </button>
                                )
                            })}
                        </div>
                    </PopoverContent>
                </Popover>
                </div>

            </div>
        </section>
    )
}
