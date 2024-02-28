import { Applications } from "../constants";
import ApplicationItem from "./pieces/ApplicationItem";


export default function ApplicationsList() {

    return (
        <section className="mt-16 max-lg:mx-16 mx-16">
            {Applications.map((application) => {
                return (
                    <ApplicationItem key={application.companyName} application={application} />
                )
            })}
        </section>
    )
}
