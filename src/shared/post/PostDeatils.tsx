import { formatDateString } from "../../utils/helpers"

interface PostDeatilsProps {
    compensationType?: string,
    salary?: string,
    level?: string,
    deadline?: string
}

export default function PostDeatils({compensationType, salary, level, deadline}: PostDeatilsProps) {
    return (
        <div className="flex items-center justify-between max-lg:gap-3 gap-5">
            <div className="h-16 border-l border-gray-500" />
            <div className="flex flex-col gap-3 text-sm text-fade font-sans">
                <p className="max-lg:text-sm text-base text-darkblue"> Compensation Type - {compensationType || "Monthly"} </p>
                {salary ? <p className="text-primary max-lg:text-sm text-base font-palanquin font-bold"> {salary} birr </p> : <p className="text-primary  max-lg:text-sm text-base font-palanquin font-bold"> Not Specified </p>}
            </div>
            <div className="h-16 border-l border-gray-500" />
            <div className="flex flex-col gap-3 text-sm text-fade font-sans">
                <p  className="max-lg:text-sm text-base text-darkblue"> Experience-Level </p>
                <p className="text-primary  max-lg:text-sm text-base font-palanquin font-bold"> {level || "SENIOR"} </p>
            </div>
            <div className="h-16 border-l border-gray-500" />
            <div className="flex flex-col gap-3 text-sm text-stone-600 font-sans">
                <p  className="max-lg:text-sm text-base text-darkblue"> Deadline </p>
                <p className="text-primary  max-lg:text-sm text-base font-palanquin font-bold"> {deadline ? formatDateString(deadline) : "January 05 2024"} </p>
            </div>
            <div className="h-16 border-l border-gray-500" />
        </div>
    )
}
