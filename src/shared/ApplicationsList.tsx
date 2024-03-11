import { Application} from "../types";
import ApplicationItem from "./pieces/ApplicationItem";

interface ApplicationListProps {
    applications: Application
}

export default function ApplicationsList({applications}: ApplicationListProps){
    // IF THERE IS NO APPLICATION
    if(!applications){
        return (
            <div className="m-20">
                <p className="no-posts"> You haven't applied to any Job yet 😔 </p>
            </div>
        )
    }

    return (
        <section className="mt-16 max-lg:mx-16 mx-16">
            {applications?.map((application) => {
                return (
                    <ApplicationItem key={application.post.id} application={{
                        id: application.post.id,
                        title: application.post.title,
                        status: application.status,
                        location: application.post.location || "Remote",
                        appliedAt: application.appliedAt,
                        description: application.post.description,
                        sector: application.post.sector,
                        site: application.post.site,
                        type: application.post.type
                    }}  />
                )
            })}
        </section>
    )
}
