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
            <TitleAndEdit title="Bio" routeTo="/edit-bio" add={Boolean(!user?.bio)} />
            <div className="mt-5 pr-8">
                {user?.bio ? <p className="text-base text-black max-lg:text-justify font-palanquin leading-7">
                    {user?.bio}
                </p>: (
                    <p className="my-5 no-posts"> You have no bio 😣  </p>
                )}
            </div>
        </section>
    )
}
