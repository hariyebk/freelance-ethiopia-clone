import { Link, useSearchParams} from "react-router-dom";
import { ApplicationStatus, sortByDate } from "../../constants";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";

export default function ApplicationFilter() {
    const [searchParams] = useSearchParams()
    const filterQuery = searchParams.get("status")
    const sortQuery = searchParams.get("sort")

    return (
        <section className="my-8">
            <div className="flex items-center gap-3">
                <div>
                    <Popover>
                        <PopoverTrigger>
                            <button className="filter"> Filter by status </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-fit mt-1 px-4">
                            <div className="flex flex-col w-auto">
                                {ApplicationStatus.map((status) => {
                                    return (
                                        <Link to={`${sortQuery ? `?sort=${sortQuery}&` : "?"}status=${status}`} key = {status} className="capitalize mb-2 hover:text-primary"> 
                                            {status}
                                        </Link>
                                    )
                                })}
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
                <div>
                <Popover>
                    <PopoverTrigger>
                        <button className="filter"> Sort by date </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-fit mt-1">
                        <div className="flex flex-col">
                            {sortByDate.map((date) => {
                                return (
                                    <Link to={`${filterQuery ? `?status=${filterQuery}&` : "?"}sort=${date.label}`} key = {date.label} className="capitalize mb-2 hover:text-primary"> 
                                        {date.query}
                                    </Link>
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
