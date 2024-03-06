import { formatDateString } from "../../utils/helpers"
export interface ExperienceProps {
    isEditing?: boolean,
    position: string,
    company: string,
    city?: string | null,
    location: string
    startDate: string,
    finishedDate: string,
    contribution: string
}

export default function Experience({isEditing, position, company, city, location, startDate, finishedDate, contribution}: ExperienceProps) {
    return (
        <section className={`${isEditing && "lg:pl-7"} mt-5  flex flex-col items-start`}>
                <div className="flex items-center justify-between text-base text-stone-600 font-palanquin font-semibold">
                    <h2> {position} </h2>
                    <span className="ml-2"> @ </span>
                    <span className="ml-2"> {company} </span>
                </div>
                <p className="mt-3 text-sm font-palanquin font-semibold"> Location: 
                    {
                        city ? (
                            <span> {city}, {location} </span>
                        )
                        :(
                            <span> {location} </span>
                        )
                    }
                </p>
                <div className="mt-3 flex items-center text-sm font-semibold">
                    <div> From: 
                        <span className="ml-2"> {formatDateString(startDate)}  </span>
                    </div>
                    <span className="mx-2"> - </span>
                    <span> To: {formatDateString(finishedDate)}</span>
                </div>
                <div className="mt-5">
                    <h2 className="text-stone-600 font-palanquin font-semibold"> Contribution </h2>
                    <p className="mt-2 pr-7 text-sm font-palanquin font-medium leading-6"> {contribution} </p>
                </div>
        </section>
    )
}
