import { status } from "../../types"

interface ApplicationItemProps {
    application: {
        role: string,
        companyName: string,
        location: string,
        status: string,
        requiredSkills: string[],
        description: string
    }
}

export default function ApplicationItem({application}: ApplicationItemProps){
    let statusColor:string
    if(application.status === status.pending){
        statusColor = "bg-blue-500"
    }
    else if(application.status === status.hired){
        statusColor = "bg-green-500"
    }
    else {
        statusColor = "bg-red-500"
    }

    return (
        <section className='my-7'>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-lg max-lg:text-base max-lg:text-ellipsis font-palanquin max-lg:mr-3">
                    <p> {application.role}, </p>
                    <span className="max-lg:hidden"> at </span>
                    <p>{application.companyName} </p>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className={`h-2 w-2 ${statusColor} rounded-full border-none focus:outline-none`} />
                    <p className="text-sm"> {application.status} </p>
                </div>
            </div>
            <p className="mt-3 text-sm uppercase"> {application.location} </p>
            <p className="mt-4 text-base max-lg:text-sm text-stone-600"> {application.description} </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
                {application.requiredSkills.map((skill) => {
                    return (
                        <p key={skill} className="max-lg:mt-2 px-6 py-2 text-xs text-slate-100 rounded-full bg-stone-800"> {skill} </p>
                    )
                })}
            </div>
            <hr className="mt-8 mb-10 border-0.5 border-slate-400 shadow-md"/>
        </section>
    )
}
