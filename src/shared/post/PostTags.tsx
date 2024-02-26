
interface PostTagsProps {
    sector?: string,
    site?: string,
    type?: string
}

export default function PostTags({sector, site, type}: PostTagsProps) {
    return (
        <div className="flex flex-wrap justify-start max-lg:gap-5 gap-7 my-10">
            <button className="bg-stone-800 text-slate-100 text-ellipsis rounded-full max-lg:px-4 px-8 py-2 text-sm">
                {sector || "Accounting and Finance"}
            </button>
            <button className="bg-stone-800 text-slate-100 rounded-full max-lg:px-4 px-8 py-2 text-sm">
                {site || "On-site"}
            </button>
            <button className="bg-stone-800 text-slate-100 rounded-full max-lg:px-4 px-8 py-2 text-sm">
                {type || " Fulltime"}
            </button>
        </div>
    )
}
