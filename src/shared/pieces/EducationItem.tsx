
interface EducationProps {
    Institute: string,
    EnrolledIn: string,
    FieldOfStudy: string,
    StartDate: string,
    FinishedDate: string
}
export default function EducationItem({Institute, EnrolledIn, FieldOfStudy, StartDate, FinishedDate}: EducationProps) {
    return (
        <div className="mt-5 w-full flex flex-col items-start">
            <h2 className="text-base text-stone-600 font-palanquin font-semibold">{Institute} </h2>
            <p className="mt-3 text-sm font-semibold capitalize"> {EnrolledIn} <span> In </span> {FieldOfStudy} </p>
            <p className="mt-3 text-sm font-semibold"> From: <span className="capitalize"> {StartDate} </span> <span className="mx-1"> - </span> To: <span className="capitalize"> {FinishedDate} </span> </p>
        </div>
    )
}
