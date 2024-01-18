import { AuthenticatedNavLinks, navlinks } from "../../constants"
import useApi from "../../context/hook"
import SingleLink from "./SingleLink"

export default function NavLinkLogic() {
    const {isAuthenticated} = useApi()
    return (
        <>
            {isAuthenticated ? 
            AuthenticatedNavLinks.map((link) => {
                return (
                    <SingleLink key={link.label} link={link} />
                )
            })
            : navlinks.map((link) => {
                return (
                    <SingleLink key={link.label} link={link} />
                )
            })}
        </>
    )
}
