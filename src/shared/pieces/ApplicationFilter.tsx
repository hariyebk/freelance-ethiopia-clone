import { useSearchParams} from "react-router-dom";
import { ApplicationStatus, sortByDate } from "../../constants";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";
import { useEffect, useRef, useState } from "react";


interface ApplicationFilterProps {
    saved?: boolean,
    setSort?: React.Dispatch<React.SetStateAction<string>>,
    setFilter?: React.Dispatch<React.SetStateAction<string>>
}
export default function ApplicationFilter({saved, setFilter, setSort}: ApplicationFilterProps) {
    const [searchParams, setSearchParms] = useSearchParams()
    const [openFilter, setOpenFilter] = useState(false)
    const [openSort, setOpenSort] = useState(false)
    const popOverFilterRef = useRef<HTMLDivElement>(null)
    const popOverSortRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // A function that checks if the popOver is opend when the user cliks outside of the popOver and closes
        const handleClosePopOver = (event: MouseEvent) => {
            if (popOverFilterRef.current && !popOverFilterRef.current.contains(event.target as Node)) {
                setOpenFilter(false)
            }
            if (popOverSortRef.current && !popOverSortRef.current.contains(event.target as Node)) {
                setOpenSort(false)
            }
        }
        document.addEventListener("click", handleClosePopOver)
        // clean up function to stop listening after the component is unmounted.
        return () => {
            document.removeEventListener("click", handleClosePopOver)
        }
    }, [])

    function handleFilter(status: string){
        searchParams.set("filter", status)
        setSearchParms(searchParams)
        setOpenFilter(false)
        if(setFilter){
            setFilter(status)
        }
    }

    function handleSort(sort: string){
        const sortquery = sort.split(" ").at(0)?.toLowerCase() as string
        searchParams.set("sort", sortquery)
        setSearchParms(searchParams)
        setOpenSort(false)
        if(setSort){
            setSort(sort)
        }
    }

    return (
        <section className="my-8">
            <div className="flex items-center gap-3">
                <div ref={popOverFilterRef} className={`${saved ? "hidden": "block"}`}>
                    <Popover open={openFilter}>
                        <PopoverTrigger onClick={() => setOpenFilter((open) => !open)}>
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
                <div ref={popOverSortRef}>
                <Popover open={openSort}>
                    <PopoverTrigger onClick={() => setOpenSort((open) => !open)}>
                        <div className="filter"> Sort by date </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-fit mt-1">
                        <div className="flex flex-col">
                            {sortByDate.map((label) => {
                                return (
                                    <button onClick={() => handleSort(label)} key = {label} className="capitalize mb-2 hover:text-primary"> 
                                        {label}
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
