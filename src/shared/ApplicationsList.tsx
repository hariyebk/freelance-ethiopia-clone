// import { useSearchParams } from "react-router-dom";
import { Applications } from "../constants";
import ApplicationItem from "./pieces/ApplicationItem";


export default function ApplicationsList() {
    // const [searchParams] = useSearchParams()
    // const filterQuery = searchParams.get("status")
    // const sortQuery = searchParams.get("sort")

    return (
        <section className="mt-16 max-lg:mx-16 mx-16">
            {Applications.map((application) => {
                return (
                    <ApplicationItem key={application.companyName} application={application}/>
                )
            })}
        </section>
    )
}
