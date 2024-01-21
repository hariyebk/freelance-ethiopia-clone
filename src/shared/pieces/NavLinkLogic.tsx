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
                <div className="flex max-lg:flex-col max-lg:items-start items-center max-lg:gap-3 gap-10 max-lg:pl-3">
                    {
                        AuthenticatedNavLinks.map((link) => {
                            return (
                                <SingleLink key={link.label} link={link} />
                            )
                        })
                    }
                </div>
            ): (
                <div className="flex max-lg:flex-col max-lg:items-start items-center max-lg:gap-3 gap-10 max-lg:pl-3">
                    {
                        navlinks.map((link) => {
                            return (
                                <SingleLink key={link.label} link={link} />
                            )
                        })
                    }
                </div>
            )
            }
        </>
    )
}
