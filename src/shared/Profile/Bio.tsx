import TitleAndEdit from "../pieces/TitleAndEdit";
import useApi from "../../context/hook";
import { useEffect } from "react";
import { useFindUserById } from "../../lib/Tanstackquery/queriesAndMutations";
import Spinner from "../pieces/Spinner";

export default function Bio() {
    const {user} = useApi()
    const {isLoading, data} = useFindUserById()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if(isLoading){
        return (
            <Spinner />
        )
    }

    return (
        <section className="profile_container">
            {data?.user ? <h3 className="mt-3 text-lg text-black font-semibold"> Bio </h3> : <TitleAndEdit title="Bio" routeTo="/edit-bio" add={Boolean(!user?.bio)} />}
            <div className="mt-5 pr-8">
                {data?.user ? data?.user.bio ? <p className="text-base text-black max-lg:text-justify font-palanquin leading-7">
                    {data.user.bio}
                </p> : <p className="mt-6 ml-4 text-base text-gray-600"> Bio is not added </p>
                :
                user?.bio ? <p className="text-base text-black max-lg:text-justify font-palanquin leading-7">
                    {user?.bio}
                </p>: (
                    <p className="my-5 no-posts"> You have no bio 😣  </p>
                )}
            </div>
        </section>
    )
}
