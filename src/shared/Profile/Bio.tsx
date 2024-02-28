import { useLocation } from "react-router-dom";
import TitleAndEdit from "../pieces/TitleAndEdit";
import useApi from "../../context/hook";

export default function Bio() {
    const {pathname} = useLocation()
    const {user} = useApi()
    return (
        <section className="profile_container">
            <TitleAndEdit title="Bio" routeTo={`${pathname}/edit-bio`} />
            <div className="mt-5 pr-8">
                <p className="text-sm max-lg:text-justify font-palanquin font-medium leading-6">
                    {user?.bio}
                </p>
            </div>
        </section>
    )
}
