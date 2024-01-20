import { AuthenticatedNavLinks, EmployerNavLinks, navlinks } from "../../constants"
import useApi from "../../context/hook"
import { AccountRoles } from "../../types";
import SingleLink from "./SingleLink"

export default function NavLinkLogic() {
    const {role} = useApi()
    return (
        <>
            {role === AccountRoles.employer ? (
                EmployerNavLinks.map((link) => {
                    return (
                        <SingleLink key={link.label} link={link} />
                    )
                })
            ): role === AccountRoles.jobseeker ? (
                AuthenticatedNavLinks.map((link) => {
                    return (
                        <SingleLink key={link.label} link={link} />
                    )
                })
            ): (
                navlinks.map((link) => {
                    return (
                        <SingleLink key={link.label} link={link} />
                    )
                })
            )
            }
        </>
    )
}
