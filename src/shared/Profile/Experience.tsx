
export interface ExperienceProps {
    position: string,
    company: string,
    city?: string,
    location: string
    startDate: string,
    finishedDate: string,
    contribution: string
}

export default function Experience({position, company, city, location, startDate, finishedDate, contribution}: ExperienceProps) {
    return (
        <section className="mt-5 flex flex-col items-start">
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
                <div className="mt-2 flex items-center text-sm font-semibold">
                    <span> From: {startDate} </span>
                    <span className="mx-2"> - </span>
                    <span> To: {finishedDate}</span>
                </div>
                <div className="mt-3">
                    <h2 className="text-stone-600 font-palanquin font-semibold"> Contribution </h2>
                    <p className="mt-2 pr-4 text-sm font-palanquin font-medium leading-6"> {contribution} </p>
                </div>
        </section>
    )
}
