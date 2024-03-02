
export interface EducationProps {
    institute: string,
    enrolled_in: string,
    fieldOfStudy: string,
    startDate: string,
    finishedDate: string
}
export default function EducationItem({institute, enrolled_in, fieldOfStudy, startDate, finishedDate}: EducationProps) {
    return (
        <div className="mt-5 w-full flex flex-col items-start">
            <h2 className="text-base text-stone-600 font-palanquin font-semibold">{institute} </h2>
            <p className="mt-3 text-sm text-black font-palanquin font-bold capitalize"> {enrolled_in} <span> In </span> {fieldOfStudy} </p>
            <p className="mt-3 text-sm text-black font-palanquin"> From: <span className="capitalize"> {startDate} </span> <span className="mx-1"> - </span> To: <span className="capitalize"> {finishedDate} </span> </p>
        </div>
    )
}
