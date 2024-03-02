import TitleAndEdit from "../pieces/TitleAndEdit";
import useApi from "../../context/hook";
import { useEffect } from "react";

export default function Bio() {
    const {user} = useApi()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="profile_container">
            <TitleAndEdit title="Bio" routeTo="/edit-bio" />
            <div className="mt-5 pr-8">
                <p className="text-base text-black max-lg:text-justify font-palanquin leading-6">
                    {user?.bio}
                </p>
            </div>
        </section>
    )
}
