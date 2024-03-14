import { changeDateFromIsoToNormal, formatDistanceFromNow } from "../../utils/helpers"

interface Props {
    postedBy?: string,
    created_at?: string,
    location?: string
}

export default function PostSubHeader({postedBy, created_at, location}: Props) {
    return (
        <div className="flex items-center justify-evenly max-lg:gap-4 gap-7 mt-3 max-lg:text-xs text-sm text-fade">
            <p className="hover:text-primary"> {postedBy?.toUpperCase() || "Jambo bet"} </p>
            <p className="hover:text-primary"> {created_at ? formatDistanceFromNow(changeDateFromIsoToNormal(created_at)) : "posted 4 hours ago"} </p>
            <p className="uppercase"> {location || "Remote"}, {location && "Ethiopia" }</p>
        </div>
    )
}
