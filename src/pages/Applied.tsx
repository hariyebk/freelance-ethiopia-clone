import ApplicationsList from "../shared/ApplicationsList";
import ApplicationFilter from "../shared/pieces/ApplicationFilter";
import useApi from "../context/hook";
import { Application} from "../types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { useFilterAndSort } from "../lib/Tanstackquery/queriesAndMutations";
import { Box, CircularProgress } from "@mui/material";

export default function Applied() {
    const {user} = useApi()
    const [filter, setFilter] = useState("")
    const [sort, setSort] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    const {isPending, mutate: filterAndSort, data: applications} = useFilterAndSort()

    useEffect(() => {
        if(filter || sort){
            filterAndSort({
                filterString: filter,
                sortString: sort
            })
        }
        window.scrollTo(0, 0);
    }, [filter, sort, filterAndSort]);

    function handleDeleteFilter(){
        searchParams.delete("filter")
        setSearchParams(searchParams)
        setFilter("")
    }

    function handleDeleteSort(){
        searchParams.delete("sort")
        setSearchParams(searchParams)
        setSort("")
    }


    return (
        <section className="w-full mt-40 mb-36">
            <div className="mx-auto max-md:w-[450px] md:w-[600px] lg:w-[700px] h-auto shadow-lg bg-slate-50 rounded-md pb-28">
                <div className="pt-10 max-lg:px-14 px-14">
                    <div className="flex items-center justify-between text-stone-600 font-palanquin font-semibold">
                        <h1 className="text-2xl max-lg:text-lg"> Your Applications </h1>
                        <p className="text-xl max-lg:text-lg"> Status </p>
                    </div>
                    { user?.appliedTo ? <ApplicationFilter setFilter={setFilter} setSort={setSort} /> : null}
                </div>
                <div className="flex items-center -mt-3">
                    {filter && <div className="ml-14">
                        <button onClick={handleDeleteFilter} className="bg-stone-800 w-fit ml-3 mt-5 px-5 py-2 text-white text-xs flex items-center gap-4 rounded-full">  
                            <span> {filter} </span>
                            <IoClose className = "text-white hover:text-primary w-4 h-4" />
                        </button>
                    </div>}
                    {sort && <div className={`${filter ? "ml-4" : "ml-14"}`}>
                        <button onClick={handleDeleteSort} className="bg-stone-800 w-fit ml-3 mt-5 px-5 py-2 text-white text-xs flex items-center gap-4 rounded-full">  
                            <span> {sort} </span>
                            <IoClose className = "text-white hover:text-primary w-4 h-4" />
                        </button>
                    </div>}
                </div>
                {isPending ? (
                    <div className="h-[350px] mt-20">
                        <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
                            <CircularProgress size={40} color="inherit" />
                        </Box>
                    </div>
                ) : 
                <ApplicationsList applications={(filter || sort) ? applications : user?.appliedTo as Application} />}
            </div>
        </section>
    )
}
