import { Link } from "react-router-dom"
import useApi from "../../context/hook"
import { useFindUserById } from "../../lib/Tanstackquery/queriesAndMutations"
import Spinner from "../pieces/Spinner"

export default function PortfolioLinks() {
    const {user, setEditPortfolioLinks} = useApi()
    const {isLoading, data} = useFindUserById()

    if(isLoading){
        return (
            <Spinner />
        )
    }

    return (
        <section className="max-lg:w-full w-[260px] flex items-start justify-between lg:rounded-xl lg:shadow-lg lg:border lg:border-gray-100 max-lg:px-10 max-lg:mt-5 py-5 pl-5">
            <div className="w-full flex flex-wrap flex-col gap-3">
                <h3 className="text-lg text-black font-palanquin"> Portfolio Links </h3>
                {data?.user ? data.user.portfolio_links ? data.user.portfolio_links.map((link: string) => {
                    return (
                        <Link key={link} to={link} rel="noopener" target="_blank"  className="mt-2 inline-block text-sm text-primary pr-3 max-lg:mt-4 font-semibold">
                            <span> {link} </span>
                        </Link> 
                    )
                }) : <p className="text-sm text-gray-500"> Not specified </p>
                :
                !user?.portfolio_links ? null : (
                    user.portfolio_links.map((link) => {
                        return (
                            <Link key={link} to={link} rel="noopener" target="_blank" className="mt-2 inline-block text-sm text-primary pr-3 max-lg:mt-4 font-semibold">
                                {link}
                            </Link> 
                        )
                    })
                )}
            </div>
            {!data?.user && <button className="max-lg:pb-12 lg:pr-8 text-sm text-red-500 font-palanquin font-semibold" onClick={() => setEditPortfolioLinks(true)}> {user?.portfolio_links ? "Edit" : "Add"} </button>}
        </section>
    )
}
