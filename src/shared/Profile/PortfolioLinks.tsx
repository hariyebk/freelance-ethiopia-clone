import { Link } from "react-router-dom"
import { useApi } from "../../context/Provider"

export default function PortfolioLinks() {
    const {setEditPortfolioLinks} = useApi()
    return (
        <section className="max-lg:w-full w-[260px] flex items-start gap-4 lg:rounded-xl lg:shadow-lg lg:border lg:border-gray-300 max-lg:px-8 py-5 pl-5">
            <div className="max-lg:w-full flex flex-wrap flex-col gap-3 w-36">
                <h3 className="text-base text-stone-600 font-palanquin font-bold"> Portfolio Links </h3>
                <Link to={" https://harun-space-vercel.app"} className="text-sm lg:text-gray-500 pr-3 max-lg:mt-4 max-lg:font-semibold hover:text-primary">
                    My digital space
                </Link>
            </div>
            <button className="text-sm text-red-500 font-palanquin font-semibold" onClick={() => setEditPortfolioLinks(true)}> Edit </button>
        </section>
    )
}
