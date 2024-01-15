import { Link } from "react-router-dom"
import { useApi } from "../../context/Provider"

export default function PortfolioLinks() {
    const {setEditPortfolioLinks} = useApi()
    return (
        <section className="max-lg:w-full w-[260px] flex items-start justify-between lg:rounded-xl lg:shadow-lg lg:border lg:border-gray-100 max-lg:px-10 max-lg:mt-5 py-5 pl-5">
            <div className="max-lg:w-full flex flex-wrap flex-col gap-3 w-36">
                <h3 className="text-lg text-stone-800 font-palanquin font-bold"> Portfolio Links </h3>
                <Link to="https://harun-space.vercel.app" rel="noopener" target="_blank" className="inline-block text-sm lg:text-gray-500 pr-3 max-lg:mt-4 max-lg:font-semibold hover:text-primary">
                    My digital space
                </Link>
            </div>
            <button className="max-lg:pb-12 lg:pr-8 text-sm text-red-500 font-palanquin font-semibold" onClick={() => setEditPortfolioLinks(true)}> Edit </button>
        </section>
    )
}
