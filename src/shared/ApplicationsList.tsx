import useApi from "../context/hook";
import { Application} from "../types";
import ApplicationItem from "./pieces/ApplicationItem";

interface ApplicationListProps {
    applications: Application
}

export default function ApplicationsList({applications}: ApplicationListProps){
    const {user} = useApi()
    console.log(user?.appliedTo)
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
            {applications?.map((item) => {
                return (
                    <ApplicationItem key={item.application?.post.id} application={{
                        id: item.application?.post.id,
                        title: item.application?.post.title,
                        status: item.application?.status,
                        location: item.application?.post.location || "Remote",
                        appliedAt: item.application?.appliedAt,
                        description: item.application?.post.description,
                        sector: item.application?.post.sector,
                        site: item.application?.post.site,
                        type: item.application?.post.type
                    }}  />
                )
            })}
        </section>
    )
}
