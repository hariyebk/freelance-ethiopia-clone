
export default function PortfolioLinks() {
    return (
        <div className="w-[260px] flex items-start gap-4 rounded-xl shadow-lg border border-gray-300 py-5 pl-5">
            <div className="flex flex-wrap flex-col gap-3 w-36">
                <h3 className="text-base text-stone-600 font-palanquin font-bold"> Portfolio Links </h3>
                <p className="text-sm text-gray-500 pr-3"> https://harun-space-vercel.app </p>
            </div>
            <button className="text-sm text-red-500 font-palanquin font-semibold"> Edit </button>
        </div>
    )
}
