import { status } from "../../types"
import { changeDateFromIsoToNormal, formatDistanceFromNow } from "../../utils/helpers"

interface ApplicationItemProps {
    application: {
        id: string,
        title: string,
        status: string,
        location: string,
        appliedAt: string,
        description: string,
        sector: string,
        site: string,
        type: string,
        feedback?: string
    }
}

export default function ApplicationItem({application}: ApplicationItemProps){  
    let statusColor:string
    if(application.status === status.pending){
        statusColor = "bg-yellow-500"
    }
    else if(application.status === status.hired){
        statusColor = "bg-green-500"
    }
    else if(application.status === status.shortListed){
        statusColor = "bg-blue-500"
    }
    else {
        statusColor = "bg-red-500"
    }

    return (
        <section className='my-7'>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 lg:text-lg md:text-sm max-md:text-sm max-lg:text-ellipsis font-palanquin">
                    <p> {application.title}, </p>
                    <p>{formatDistanceFromNow(changeDateFromIsoToNormal(application.appliedAt))} </p>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className={`h-2 w-2 ${statusColor} rounded-full border-none focus:outline-none`} />
                    <p className="text-sm"> {application.status} </p>
                </div>
            </div>
            <p className="mt-3 text-sm uppercase"> {application.location} </p>
            <p className="mt-4 max-lg:text-justify text-base max-lg:text-sm text-stone-600"> {application.description} </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
                <p className="max-lg:mt-2 px-6 py-2 text-xs text-slate-100 rounded-full bg-stone-800"> {application.sector} </p>
                <p className="max-lg:mt-2 px-6 py-2 text-xs text-slate-100 rounded-full bg-stone-800"> {application.site} </p>
                <p className="max-lg:mt-2 px-6 py-2 text-xs text-slate-100 rounded-full bg-stone-800"> {application.type} </p>
            </div>
            {application.feedback && <div className="flex items-center gap-2 mt-7 text-base text-black font-palanquin">
                    <span> Feedback: </span>
                    <span> {application.feedback} </span>
                </div>
            }
            <hr className="mt-8 mb-10 border-0.5 border-slate-400 shadow-md"/>
        </section>
    )
}
